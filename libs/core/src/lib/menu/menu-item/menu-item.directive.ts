import {
    AfterContentInit,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    Input,
    Output,
    HostListener,
    OnInit
} from '@angular/core';
import { MenuLinkDirective } from './link/menu-link.directive';
import { MenuItemInterface } from './menu-item.interface';
import { MenuListDirective } from '../menu-list/menu-list.directive';
import { MenuKeyboardService } from '@fundamental-ngx/core';
import { MenuSublistDirective } from './submenu/menu-sublist.directive';
import { PreparedMenuComponent } from '../prepared-menu/prepared-menu.component';
import { PreparedSubmenuComponent } from '../prepared-menu/prepared-submenu/prepared-submenu.component';
import focusTrap, { FocusTrap } from 'focus-trap';

@Directive({
    selector: '[fdMenuItem], [fd-menu-item]'
})
export class MenuItemDirective implements /*OnInit,*/ AfterContentInit, MenuItemInterface {
    /** @hidden */
    @HostBinding('class.fd-menu__item')
    fdNestedListItemClass: boolean = true;

    /**
     * @hidden
     * Reference to the link directive, to allow manipulating the properties of this element.
     */
    @ContentChild(MenuLinkDirective)
    linkItem: MenuLinkDirective;

    /** @hidden */
    // @ContentChild(NestedListPopoverComponent)
    // popoverItem: NestedListPopoverComponent;

    /** @hidden */
    // @ContentChild(forwardRef(() => MenuListDirective))
    @ContentChild(MenuSublistDirective)
    menuListItem: MenuSublistDirective;

    /** @hidden */
    @ContentChild(forwardRef(() => PreparedMenuComponent))
    preparedListComponent: PreparedMenuComponent;

    /** @hidden */
    @ContentChild(PreparedSubmenuComponent)
    preparedSublistComponent: PreparedSubmenuComponent;

    /** @hidden */
    public focusTrap: FocusTrap;

    /** Check if the item element has any child */
    public get hasChildren(): boolean {
        return !!(
            this.menuListItem ||
            // || this.popoverItem
            this.nestedListFromPreparedComponent ||
            this.nestedSublistFromPreparedComponent
        );
        // );
    }

    /** Get all of the children item elements */
    public get allChildrenItems(): MenuItemInterface[] {
        if (this.menuListItem && this.menuListItem.items) {
            /** Get elements from child list */
            return this.menuListItem.items.toArray();
        } else if (this.nestedListFromPreparedComponent && this.nestedListFromPreparedComponent.items) {
            /** Get elements from child prepared list  component */
            return this.nestedListFromPreparedComponent.items.toArray();
        } else if (this.nestedSublistFromPreparedComponent && this.nestedSublistFromPreparedComponent.items) {
            /** Get elements from child prepared sublist  component */
            return this.nestedSublistFromPreparedComponent.items.toArray();
        } else {
            return [];
        }
    }

    /** @hidden */
    constructor(private elementRef: ElementRef, private keyboardService: MenuKeyboardService) {}

    // ngOnInit(): void {
    //     this.setupFocusTrap();
    // }

    /** Whether item should be expanded */
    @Input() set expanded(expanded: boolean) {
        this.propagateOpenChange(expanded);
    }

    /** @hidden */
    get expanded(): boolean {
        return this._expanded;
    }

    /** @hidden */
    private _expanded: boolean = false;

    /** Event thrown, when expanded state is changed */
    @Output()
    readonly expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    /** Event thrown, when any keyboard event is dispatched on this, or link element */
    @Output()
    readonly keyboardTriggered: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

    /** @hidden */
    ngAfterContentInit(): void {
        /** Propagate hasChildren property */
        if (this.hasChildren && this.linkItem) {
            this.linkItem.hasChildren = true;
            this.linkItem.changeDetRef.detectChanges();
        }

        if (this.linkItem) {
            /** Subscribe to mouse click event, thrown by link item */
            this.linkItem.clicked.subscribe(() => this.toggle());

            /** Subscribe to keyboard event and throw it farther */
            this.linkItem.keyboardTriggered.subscribe(keyboardEvent => this.keyboardTriggered.emit(keyboardEvent));
        }

        /** Pass this element to popover child item, to allow control `expanded` value */
        // if (this.popoverItem) {
        //     this.popoverItem.parentItemElement = this;
        // }

        /** Propagate initial open state to children */
        this.propagateOpenChange(this._expanded);
    }

    /** Method that expand the item and propagate it to children */
    triggerOpen(): void {
        if (!this.expanded) {
            /** Propagate initial open state to children */
            this.propagateOpenChange(true);
        }
    }

    /** Method that close the item and propagate it to children */
    triggerClose(): void {
        if (this.expanded) {
            /** Propagate initial open state to children */
            this.propagateOpenChange(false);
        }
    }

    /** Method that toggle the item and propagate it to children */
    toggle(): void {
        /** Propagate initial open state to children */
        this.propagateOpenChange(!this._expanded);
    }

    /** Method that dispatches `click` event on link item*/
    click(): void {
        if (this.linkItem) {
            this.linkItem.click();
        }
    }

    /** Method that focuses link item*/
    focus(): void {
        if (this.linkItem) {
            this.linkItem.focus();
        }
    }

    /** Method that on hover opens link item*/
    @HostListener('mouseenter') onMouseEnter() {
        // this.toggle();   //closes menu on hovering again
        this.triggerOpen();
    }

    /** @hidden */
    @HostListener('document:click', ['$event'])
    clickHandler(event): void {
        /** Check if click wasn't inside the component, then close. */
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.triggerClose();
        }
    }

    /**
     * @hidden
     * Propagate open state to all of the children
     */
    private propagateOpenChange(open: boolean): void {
        this._expanded = open;

        if (this.linkItem) {
            this.linkItem.expanded = open;
        }

        if (this.menuListItem) {
            this.menuListItem.hidden = !open;
            // this.menuListItem.items.first.focus();
        }

        if (this.nestedSublistFromPreparedComponent) {
            this.nestedSublistFromPreparedComponent.hidden = !open;
        }
        // if (this.nestedListFromPreparedComponent) {
        //     this.nestedListFromPreparedComponent.hidden = !open;
        // }

        // if (open) {
        //     this.focusTrap.activate();
        // } else {
        //     this.focusTrap.deactivate();
        // }

        // if (this.popoverItem) {
        //     this.popoverItem.open = open;
        // }

        /** Trigger event to provide keyboard support to new list of opened item element. */
        this.keyboardService.refresh$.next();
        this.expandedChange.emit(open);
    }

    /**
     * @hidden
     */
    private get nestedListFromPreparedComponent(): MenuListDirective {
        return this.preparedListComponent && this.preparedListComponent.menuListDirective;
    }
    /**
     * @hidden
     */
    private get nestedSublistFromPreparedComponent(): MenuSublistDirective {
        return this.preparedSublistComponent && this.preparedSublistComponent.menuSublistDirective;
    }

    private setupFocusTrap(): void {
        try {
            this.focusTrap = focusTrap(this.elementRef.nativeElement, {
                clickOutsideDeactivates: true,
                returnFocusOnDeactivate: true,
                escapeDeactivates: false
            });
        } catch (e) {
            console.warn('Unsuccessful attempting to focus trap the Multi Input.');
        }
    }
}

import {
    ChangeDetectorRef,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    OnInit,
    Output,
    Renderer2
} from '@angular/core';
import { MenuTitleDirective } from './title/menu-title.directive';

@Directive({
    selector: '[fdMenuLink], [fd-menu-link]',
    host: {
        tabindex: '0'
    }
})
export class MenuLinkDirective implements OnInit {
    /** @hidden */
    @HostBinding('class.fd-menu__link')
    fdMenuItemClass: boolean = true;

    /**
     *  @hidden
     *  Reference to title element, it is used, to get title for condensed mode.
     */
    @ContentChild(MenuTitleDirective)
    title: MenuTitleDirective;

    /** Event that is thrown, when any keyboard event is dispatched on this element */
    @Output()
    readonly keyboardTriggered: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

    /** Event that is thrown, when this element is clicked */
    @Output()
    readonly clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    /** Whether this element is selected, the `selected` state is propagated to all of parent elements */
    @Input()
    set selected(selected: boolean) {
        if (this._selected !== selected) {
            this._selected = selected;
            this.controlSelected = selected;
            // this.nestedListStateService.refresh$.next();
        }
    }
    get selected(): boolean {
        return this._selected;
    }
    _selected: boolean;

    /** Function that is called on click event dispatch on this element. */
    @Input()
    onClickCallback: Function;

    /** */
    @HostBinding('class.is-selected')
    controlSelected: boolean = this._selected;

    /**
     * @hidden
     * Attribute controlled by the parent `MenuItemDirective`
     */
    @HostBinding('class.is-expanded')
    @HostBinding('attr.aria-expanded')
    expanded: boolean = false;

    /**
     * @hidden
     * Attribute controlled by the parent `MenuItemDirective`
     */
    @HostBinding('class.has-child')
    @HostBinding('attr.aria-haspopup')
    hasChildren: boolean = false;

    /** Set focus on the element. */
    focus(): void {
        this.elementRef.nativeElement.focus();
    }

    /** Dispatches the click event on the element */
    click(): void {
        this.elementRef.nativeElement.click();
    }

    /** @hidden */
    constructor(private renderer: Renderer2, private elementRef: ElementRef, public changeDetRef: ChangeDetectorRef) {}

    /** @hidden */
    ngOnInit(): void {
        /** Add event listeners on the element */

        /** Keyboard */
        this.renderer.listen(this.elementRef.nativeElement, 'keydown', event => this.keyboardTriggered.emit(event));

        /** Mouse Click */
        this.renderer.listen(this.elementRef.nativeElement, 'click', event => {
            if (this.onClickCallback) {
                this.onClickCallback();
            }
            this.clicked.emit(event);
        });
    }
}

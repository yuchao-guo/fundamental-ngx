import {
    Component,
    HostBinding,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ContentChild,
    QueryList,
    ViewChildren,
    forwardRef,
    ViewChild
} from '@angular/core';
import { MenuConfigurationModel } from './prepared-menu/menu-configuration-model';
import { PreparedMenuComponent } from './prepared-menu/prepared-menu.component';
import focusTrap, { FocusTrap } from 'focus-trap';
import { MenuListDirective } from './menu-list/menu-list.directive';
import { MenuKeyboardService } from './menu-keyboard.service';
import { MenuItemDirective } from './menu-item/menu-item.directive';

/**
 * The component that represents a menu.
 */
@Component({
    selector: 'fd-menu',
    templateUrl: './menu.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
    /** @hidden */
    // @HostBinding('class.fd-menu')
    // fdMenuClass: boolean = true;

    /** set the compact mode styles to menu */
    @Input()
    @HostBinding('class.fd-menu--compact')
    compact: boolean = false;

    /** set the compact mode styles to menu */
    @Input()
    @HostBinding('class.fd-menu--mobile')
    mobile: boolean = false;

    @Input()
    menuConfiguration: MenuConfigurationModel;

    @ViewChildren(PreparedMenuComponent)
    preparedMenuList: QueryList<PreparedMenuComponent>;

    /** @hidden */
    @ContentChild(forwardRef(() => MenuListDirective))
    menuList: MenuListDirective;

    /**
     * @hidden
     */
    @ViewChildren(forwardRef(() => MenuListDirective))
    _menuListDirective: MenuListDirective;

    /**
     * @hidden
     */
    @ViewChildren(forwardRef(() => MenuItemDirective))
    menuListItems: QueryList<MenuItemDirective>;

    /** @hidden */
    constructor(private keyboardService: MenuKeyboardService) {
        this.keyboardService.refresh$.subscribe(() =>
            /** Refresh list of elements, that are being supported by keyboard */
            this.keyboardService.refreshItems(this.getLists())
        );
    }

    /**
     * @hidden
     * Method that returns 1 deep level of lists.
     */
    private getLists(): MenuListDirective[] {
        const lists: MenuListDirective[] = [];

        if (this.preparedMenuList) {
            lists.push(...this.preparedMenuList.map(preparedMenu => preparedMenu.menuListDirective));
        }
        if (this.menuList) {
            // console.log('this' + this.menuListItems.length);

            // this.menuList = Object.assign(this._menuListDirective, { items: this.menuListItems });
            lists.push(this.menuList);
        }

        return lists;
    }

    // /** @hidden */
    // @ContentChild(MenuListDirective, { static: false })
    // list: MenuListDirective;
}

import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Input,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';
import { MenuConfigurationModel } from './menu-configuration-model';
import { MenuListDirective } from '../menu-list/menu-list.directive';
import { MenuItemDirective } from '../menu-item/menu-item.directive';
import { PreparedSubmenuComponent } from './prepared-submenu/prepared-submenu.component';
// import { NestedListDirective } from '../nested-list/nested-list.directive';
// import { NestedListModel } from '../nested-list-model';
// import { NestedListStateService } from '../nested-list-state.service';
// import { NestedItemDirective } from '../nested-item/nested-item.directive';

/**
 * Component for internal usage, allows to generate the nested list from defined object.
 */
@Component({
    selector: 'fd-prepared-menu',
    templateUrl: './prepared-menu.component.html'
    // styleUrls: ['./prepared-menu.component.scss']
})
export class PreparedMenuComponent implements AfterViewInit {
    /**
     * @hidden
     * For internal usage.
     * Defines if the component is first
     */
    // @Input()
    // first: boolean = true;

    /**
     * @hidden
     *  For internal usage.
     *  Open sublist if child menu is present
     */
    // @Input()
    // hasChildMenu: boolean = false;

    /**
     * Defines if list should be displayed in condensed mode
     */
    // @Input()
    // condensed: boolean = false;

    /**
     * List configuration
     */
    @Input()
    list: MenuConfigurationModel;

    // @ViewChild(PreparedSubmenuComponent)
    // preparedSubmenuComponent: PreparedSubmenuComponent;

    /**
     * @hidden
     */
    @ViewChild(forwardRef(() => MenuListDirective))
    _menuListDirective: MenuListDirective;

    /**
     * @hidden
     */
    @ViewChildren(forwardRef(() => MenuItemDirective))
    menuListItems: QueryList<MenuItemDirective>;

    /**
     * In prepared nested list, nested items should be taken as reference of View, not Content.
     * There is direct reference to these directives here.
     */
    get menuListDirective(): MenuListDirective {
        console.log(this.menuListItems);
        return Object.assign(this._menuListDirective, { items: this.menuListItems });
    }

    /** @hidden */
    constructor(
        private changeDetRef: ChangeDetectorRef // private stateService: NestedListStateService
    ) {}

    /** @hidden */
    ngAfterViewInit(): void {
        // this.stateService.propagateSelected(this.nestedListDirective);
        this.changeDetRef.markForCheck();
        this.changeDetRef.detectChanges();
    }
}

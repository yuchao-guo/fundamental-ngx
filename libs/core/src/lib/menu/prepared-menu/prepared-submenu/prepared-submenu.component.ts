import {
    Component,
    AfterViewInit,
    Input,
    ChangeDetectorRef,
    QueryList,
    ViewChildren,
    forwardRef,
    ViewChild
} from '@angular/core';
import { MenuSublistDirective } from '../../menu-item/submenu/menu-sublist.directive';
import { MenuItemDirective } from '../../menu-item/menu-item.directive';
import { MenuConfigurationModel } from '../menu-configuration-model';

@Component({
    selector: 'fd-prepared-submenu',
    templateUrl: './prepared-submenu.component.html',
    styleUrls: ['./prepared-submenu.component.scss']
})
export class PreparedSubmenuComponent implements AfterViewInit {
    /**
     * @hidden
     * For internal usage.
     * Defines if the component is first
     */
    // @Input()
    // first: boolean = true;

    /**
     * Subist configuration
     */
    @Input()
    sublist: MenuConfigurationModel;

    /** @hidden */
    constructor(
        private changeDetRef: ChangeDetectorRef // private stateService: NestedListStateService
    ) {}

    /**
     * @hidden
     */
    @ViewChild(forwardRef(() => MenuSublistDirective))
    _menuSublistDirective: MenuSublistDirective;

    /**
     * @hidden
     */
    @ViewChildren(forwardRef(() => MenuItemDirective))
    menuSublistItems: QueryList<MenuItemDirective>;

    /**
     * In prepared nested list, nested items should be taken as reference of View, not Content.
     * There is direct reference to these directives here.
     */
    get menuSublistDirective(): MenuSublistDirective {
        console.log(this.menuSublistItems);
        return Object.assign(this._menuSublistDirective, { subItems: this.menuSublistItems });
    }

    /** @hidden */
    ngAfterViewInit(): void {
        // this.stateService.propagateSelected(this.nestedListDirective);
        this.changeDetRef.markForCheck();
        this.changeDetRef.detectChanges();
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuTitleDirective } from './menu-item/link/title/menu-title.directive';
import { MenuListDirective } from './menu-list/menu-list.directive';
import { MenuItemDirective } from './menu-item/menu-item.directive';
import { MenuLinkDirective } from './menu-item/link/menu-link.directive';
import { PreparedMenuComponent } from './prepared-menu/prepared-menu.component';
import { IconModule } from '../icon/public_api';
import { RouterModule } from '@angular/router';
import { PreparedSubmenuComponent } from './prepared-menu/prepared-submenu/prepared-submenu.component';
import { MenuItemAddonBeforeDirective } from './menu-item/link/addon/menu-item-addon-before.directive';
import { MenuItemAddonAfterDirective } from './menu-item/link/addon/menu-item-addon-after.directive';
import { MenuSublistDirective } from './menu-item/submenu/menu-sublist.directive';
import { MenuSeparatorDirective } from './separator/menu-separator.directive';

@NgModule({
    imports: [CommonModule, RouterModule, IconModule],
    exports: [
        MenuComponent,
        MenuTitleDirective,
        MenuListDirective,
        MenuItemDirective,
        MenuItemAddonBeforeDirective,
        MenuItemAddonAfterDirective,
        MenuSublistDirective,
        MenuSeparatorDirective,
        MenuLinkDirective,
        PreparedMenuComponent,
        PreparedSubmenuComponent
    ],
    declarations: [
        MenuComponent,
        MenuTitleDirective,
        MenuListDirective,
        MenuItemDirective,
        MenuItemAddonBeforeDirective,
        MenuItemAddonAfterDirective,
        MenuSublistDirective,
        MenuSeparatorDirective,
        MenuLinkDirective,
        PreparedMenuComponent,
        PreparedSubmenuComponent
    ]
})
export class MenuModule {}

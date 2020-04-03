import { QueryList } from '@angular/core';
import { MenuItemInterface } from '../menu-item/menu-item.interface';

/** Interface, to reduce amount of circular dependency warnings */
export interface MenuListInterface {
    items: QueryList<MenuItemInterface>;
    hidden: boolean;
}

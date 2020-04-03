import { EventEmitter } from '@angular/core';
import { DefaultMenuItem } from '../default-menu-item';
import { MenuLinkDirective } from './link/menu-link.directive';

/** Interface, to reduce amount of circular dependency warnings */
export interface MenuItemInterface extends DefaultMenuItem {
    expanded: boolean;
    keyboardTriggered: EventEmitter<KeyboardEvent>;
    triggerOpen: () => void;
    triggerClose: () => void;
    linkItem: MenuLinkDirective;
    allChildrenItems: MenuItemInterface[];
    hasChildren: boolean;
}

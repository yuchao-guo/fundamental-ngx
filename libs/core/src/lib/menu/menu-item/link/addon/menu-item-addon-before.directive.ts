import { Directive, HostBinding } from '@angular/core';

/**
 * The directive for menu item addon(for icons).
 */
@Directive({
    selector: '[fd-menu-item-addon-before], [fdMenuItemAddonBefore]'
})
export class MenuItemAddonBeforeDirective {
    /** @hidden */
    @HostBinding('class.fd-menu__addon-before')
    fdMenuItemAddonClass: boolean = true;
}

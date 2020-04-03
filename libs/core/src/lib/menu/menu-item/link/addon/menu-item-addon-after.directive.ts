import { Directive, HostBinding, Input } from '@angular/core';

/**
 * The directive for menu item addon(for icons).
 */
@Directive({
    selector: '[fd-menu-item-addon-after], [fdMenuItemAddonAfter]'
})
export class MenuItemAddonAfterDirective {
    /** @hidden */
    @HostBinding('class.fd-menu__addon-after')
    fdMenuItemAddonClass: boolean = true;

    @Input()
    @HostBinding('class.fd-menu__addon-after--submenu')
    submenuIcon: boolean = false;
}

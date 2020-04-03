import { Directive, HostBinding } from '@angular/core';

/**
 * The directive that represents a menu item.
 */
@Directive({
    // TODO to be discussed
    // tslint:disable-next-line:directive-selector
    selector: '[fd-menu-separator]'
})
export class MenuSeparatorDirective {
    /** The separator line for each menu item. When set to true, it adds a separator below each menu item in the list.
     * False by default. Leave empty for default. */
    @HostBinding('class.fd-menu__separator')
    fdMenuItemSeparatorClass: boolean = true;
}

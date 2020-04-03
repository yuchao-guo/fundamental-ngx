import { Directive, HostBinding, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { MenuListInterface } from '../../menu-list/menu-list.interface';
import { MenuItemDirective } from '../menu-item.directive';

/**
 * The directive that represents a listing structure of the menu.
 */
@Directive({
    // TODO to be discussed
    // tslint:disable-next-line:directive-selector
    selector: '[fd-menu-sublist]'
})
export class MenuSublistDirective implements MenuListInterface {
    /** @hidden */
    @HostBinding('class.fd-menu__sublist')
    @HostBinding('class.fd-popover__body--no-arrow')
    fdMenuSublistClass: boolean = true;
    /**
     * @hidden
     * This variable is mostly to keep track of this list's children. There is not usage of it inside this directive,
     * but it's used by services and NestedItemDirective by itself,
     */
    @ContentChildren(forwardRef(() => MenuItemDirective))
    items: QueryList<MenuItemDirective>;

    /** @hidden */
    @HostBinding('attr.aria-hidden')
    public hidden: boolean = true;
}

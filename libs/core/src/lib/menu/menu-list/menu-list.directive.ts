import { Directive, HostBinding, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { MenuItemDirective } from '../menu-item/menu-item.directive';
import { MenuListInterface } from './menu-list.interface';

/**
 * The directive that represents a listing structure of the menu.
 */
@Directive({
    // TODO to be discussed
    // tslint:disable-next-line:directive-selector
    selector: '[fd-menu-list]'
})
export class MenuListDirective implements MenuListInterface {
    /** @hidden */
    @HostBinding('class.fd-menu__list')
    fdMenuListClass: boolean = true;

    /**
     * @hidden
     * This variable is mostly to keep track of this list's children. There is not usage of it inside this directive,
     * but it's used by services and NestedItemDirective by itself,
     */
    @ContentChildren(forwardRef(() => MenuItemDirective))
    items: QueryList<MenuItemDirective>;

    /** @hidden */
    @HostBinding('attr.aria-hidden')
    public hidden: boolean = false;

    // /** @hidden */
    // constructor(
    //     private nestedListStateService: NestedListStateService,
    //     private elementRef: ElementRef
    // ) {}
    //    /** @hidden */
    //    ngAfterContentInit(): void {
    //     let nestedLevel: number = this.getNestedLevel();
    //     /** If there is condensed mode, maximum 2nd level class of nest can be added */
    //     if (this.nestedListStateService.condensed) {
    //         nestedLevel = Math.min(...[nestedLevel, 2]);
    //     }
    //     this.handleNestedLevel(nestedLevel);
    // }

    // /** @hidden */
    // private handleNestedLevel(level: number): void {
    //     /** Adding class with the nested level */
    //     this.elementRef.nativeElement.classList.add('level-' + level);
    // }

    // /**
    //  * @hidden
    //  * Method, that checks how deep is the list element
    //  */
    // private getNestedLevel(): number {
    //     let element = this.elementRef.nativeElement;
    //     const parentElements = [];

    //     /** Method that gathers all of the parentNode elements of current NestedListDirective element */
    //     while (element.parentNode) {
    //         parentElements.unshift(element);
    //         element = element.parentNode;
    //     }

    //     /** Filter only elements, that has `fd-nested-list` directive attribute */
    //     const filteredParentElements = parentElements.filter(_element => _element.hasAttribute('fd-nested-list'));
    //     return filteredParentElements.length;
    // }
}

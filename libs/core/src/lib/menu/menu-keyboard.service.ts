import { Subject } from 'rxjs';
import { Output, Injectable } from '@angular/core';
import { DefaultMenuItem } from './default-menu-item';
import { ListItemDirective } from '../list/list-item.directive';
import { MenuListInterface } from './menu-list/menu-list.interface';
import { MenuItemInterface } from './menu-item/menu-item.interface';
import { takeUntil } from 'rxjs/operators';
import { MenuItemDirective } from './menu-item/menu-item.directive';

@Injectable()
export class MenuKeyboardService {
    /** Event emitted when an item link is clicked.*/
    @Output()
    public readonly itemClicked: Subject<number> = new Subject<number>();

    /** Whether user wants to remove keyboard handling */
    disableKeydownHandling: boolean = false;

    /** Function that is supposed to be called, when focus escape before list */
    focusEscapeBeforeList: Function;

    /** Function that is supposed to be called, when focus escape after list */
    focusEscapeAfterList: Function;

    /**
     * Event, that is thrown always, when the open/close i being called on item components.
     * Also triggers changing of elements, to remove closed/hidden elements
     */
    readonly refresh$: Subject<void> = new Subject<void>();

    /** Function that should be called every time, keydown event is used on some menu item,
     * it provides whole functionality for handling
     * ArrowDown - focus, ArrowUp - focus, Space bar - simulate click, Enter key - simulate click.
     * @param event KeyboardEvent
     * @param index index of items starts from 0
     * @param menuItems array of menu item directives
     * */
    keyDownHandler(
        event: KeyboardEvent,
        index: number,
        menuItems: DefaultMenuItem[] | ListItemDirective[] | MenuItemDirective[]
    ): void {
        if (this.disableKeydownHandling) {
            return;
        }

        switch (event.key) {
            case 'ArrowDown': {
                if (menuItems.length > index + 1) {
                    menuItems[index + 1].focus();
                } else {
                    if (this.focusEscapeAfterList) {
                        this.focusEscapeAfterList();
                    } else {
                        menuItems[0].focus();
                    }
                }
                event.preventDefault();
                break;
            }
            case 'ArrowUp': {
                if (index > 0) {
                    menuItems[index - 1].focus();
                } else {
                    if (this.focusEscapeBeforeList) {
                        this.focusEscapeBeforeList();
                    } else {
                        menuItems[menuItems.length - 1].focus();
                    }
                }
                event.preventDefault();
                break;
            }
            case ' ': {
                if (menuItems[index]) {
                    menuItems[index].click();
                    event.preventDefault();
                }
                break;
            }
            case 'Enter': {
                if (menuItems[index]) {
                    menuItems[index].click();
                    event.preventDefault();
                }
                break;
            }
        }
    }

    /**
     * Function called after refresh$ event is triggered.
     * Refresh the list of NestedItems, that the keyboard support should be provided for
     */
    public refreshItems(lists: MenuListInterface[]): void {
        const items: MenuItemInterface[] = [];

        /** Gathering all of the items */
        lists.forEach(list => items.push(...this.getAllListItems(list)));

        /** Putting the keyboard support function to each of the items */
        items.forEach((item, index) => {
            item.keyboardTriggered.pipe(takeUntil(this.refresh$)).subscribe((keyboardEvent: KeyboardEvent) =>
                // this.keyDownHandler(keyboardEvent, index, items)
                this.handleKeyDownForMenu(keyboardEvent, index, items)
            );
        });
    }
    handleKeyDownForMenu(keyboardEvent: KeyboardEvent, index: number, items: MenuItemInterface[]): void {
        const item: MenuItemInterface = items[index];
        console.log(keyboardEvent.key);

        switch (keyboardEvent.key) {
            case 'ArrowRight': {
                if (!item.expanded && item.hasChildren) {
                    item.triggerOpen();
                    // items[index + 1].focus(); // focus on first element on expanding submenu: doesn't work
                } else {
                    if (items.length > index + 1) {
                        items[index + 1].focus();
                    } else {
                        items[0].focus();
                    }
                    keyboardEvent.preventDefault();
                }
                break;
            }

            case 'ArrowLeft': {
                if (item.expanded && item.hasChildren) {
                    item.triggerClose();
                } else {
                    if (index > 0) {
                        items[index - 1].focus();
                    } else {
                        items[items.length - 1].focus();
                    }
                    keyboardEvent.preventDefault();
                }
                break;
            }
            case 'Escape': {
                if (item.expanded && item.hasChildren) {
                    item.triggerClose();
                }
                break;
            }
            default: {
                this.keyDownHandler(keyboardEvent, index, items);
            }
        }
    }

    /** Method that calls the recursive function, getItems() and gathers all of the items in the NestedList */
    private getAllListItems(list: MenuListInterface): MenuItemInterface[] {
        const _items: MenuItemInterface[] = [];
        if (list && list.items) {
            list.items.toArray().forEach(item => {
                _items.push(...this.getItems(item));
            });
        }

        return _items;
    }

    /** Recursive function to get all of the NestedItem elements in correct order. */
    private getItems(item: MenuItemInterface): MenuItemInterface[] {
        const childrenItems = item.expanded ? item.allChildrenItems : [];
        return childrenItems.reduce(
            (actualArray: MenuItemInterface[], nextItem: MenuItemInterface) => [
                ...actualArray,
                ...this.getItems(nextItem)
            ],
            [item]
        );
    }
}

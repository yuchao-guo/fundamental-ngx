import {
    Component,
    HostBinding,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    OnInit,
    OnChanges,
    SimpleChanges,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { CssClassBuilder, applyCssClass } from '../utils/public_api';

/**
 * The component that represents a menu.
 */
@Component({
    selector: 'fd-menu',
    templateUrl: './menu.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit, OnChanges, CssClassBuilder {
    /** The separator line for each menu item. When set to true, it adds a separator below each menu item in the list.
     * False by default. Leave empty for default. */
    @Input()
    @HostBinding('class.fd-menu__list--separated')
    separator: boolean = false;

    @Input()
    compact: boolean = false;

    @ViewChild('menu')
    menuRef: ElementRef;

    class: string;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.buildComponentCssClass();
    }

    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** @hidden */
    buildComponentCssClass(): string {
        return ['fd-menu', this.compact ? 'fd-menu--compact' : ''].filter((x) => x !== '').join(' ');
    }

    elementRef(): ElementRef<any> {
        return this.menuRef;
    }
}

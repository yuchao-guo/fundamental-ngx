import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    forwardRef,
    Input,
    OnInit,
    QueryList,
    TemplateRef,
    ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import { OptionComponent, SelectComponent as FdSelect } from '@fundamental-ngx/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


/**
 * Interface SelectItem is used to deal with complex object in order to be able to format custom label that is
 * shown in the options.
 */
export interface SelectItem {
    /**
     * Item text shown in the popup
     */
    label: string;

    /**
     * References to the object instance
     */
    value: any;
    disabled?: boolean;

    /**
     * Trigger values is a text for selected item
     */
    triggerValue?: string;
}

/**
 * Renders a `<select ...>...[<option>...</option>]*...</select>` popup menu in the html. This component is
 * implemented on top of fd-select, to both:
 *
 * - to abstract implementation details from the developers
 *
 * - Adds "no selection" behavior. The string to be displayed in the popup which allows the user to
 *    make "no selection" from the available list. If the user chooses this option, then the
 *    selection binding will be pushed as null
 *
 * - Way to work with complex object is to:
 *     * using an Array<SelectItem> that application can implement
 *     * providing custom `ng-template` with name `optionValue` (`<ng-template #optionValue let-item>`)
 *
 *
 *  Todo: Revisit keyboard navigation once it start to work in core + this is good candidate to use cdk for this
 *
 */
@Component({
    selector: 'fdp-select',
    templateUrl: './select.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends FdSelect implements OnInit, AfterContentInit {
    /**
     * Form element ID.
     * Todo: This should be moved to higher class that will be common to all input fields
     */
    @Input()
    id: string;

    /**
     * Ordered list of items displayed in the popup menu. You can use strings, list of object directly but for this
     * you need to provide custom template or SelectItem[]
     */
    @Input()
    list: Array<any>;

    /**
     * String rendered as first value in the popup which let the user to make 'no selection' from
     * available list of values. When this option is active and use make this selection we save a
     * NULL value
     */
    @Input()
    noSelectionString: string;

    /**
     * Directly sets value to the component that at the ends up at writeValue as well fires
     * change detections
     *
     */
    @Input()
    get value(): any {
        return this._value;
    }

    set value(newValue: any) {
        if (newValue !== this._value) {
            this._value = newValue;
            this.onChange(newValue);
            this.onTouched();
            this.valueChange.emit(newValue);
            this.cd.markForCheck();
        }
    }

    /**
     * custom option popup item template defined by app.
     *
     */
    @ContentChild('optionValue', { static: false })
    optionValueTemplate: TemplateRef<any>;


    /**
     * custom option item template defined by app.
     *
     */
    @ContentChild('triggerValue', { static: false })
    triggerValueTemplate: TemplateRef<any>;


    /**
     * Keyboard handling needs to have an options and since we dont have them on app level and have them inside
     * we need to query them by View query.
     *
     * todo: use cdk for keyboard events on core side
     */
    @ViewChildren(OptionComponent)
    options: QueryList<OptionComponent> = new QueryList<OptionComponent>();

    /**
     * @internal
     */
    private _value: any;


    constructor(private cd: ChangeDetectorRef) {
        super(cd);

        // remove fd-dropdown from this host element
        this.fdDropdownClass = false;
    }

    ngOnInit(): void {
    }


    onSelection(event: OptionComponent): void {
        this.value = event.value;
        this.onChange(this.value);
        this.onTouched();
        this.cd.markForCheck();
    }


    /**
     * Dirty assignment is to disable resetOption logic.
     */
    ngAfterContentInit(): void {
        this['unselectOptions'] = () => {
        };
    }

    writeValue(newValue: any): void {
        if (newValue && newValue !== this._value) {
            this._value = newValue;
            this.onChange(this._value);
            this.onTouched();
            this.cd.markForCheck();
        }
    }
}


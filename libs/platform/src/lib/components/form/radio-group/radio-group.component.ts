import {
    EventEmitter,
    Component,
    ContentChildren,
    ViewChildren,
    QueryList,
    Input,
    ChangeDetectorRef,
    forwardRef,
    ChangeDetectionStrategy,
    AfterViewInit,
    AfterViewChecked,
    Output,
    Self,
    Optional
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { stateType } from '@fundamental-ngx/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PlatformRadioButtonComponent } from '../radio/radio.component';
import { SelectItem } from '../data-model';
import { FormFieldControl, InputSize } from '../form-control';

// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;

@Component({
    selector: 'fdp-radio-group',
    templateUrl: './radio-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: FormFieldControl,
            useExisting: forwardRef(() => RadioGroupComponent),
            multi: true
        }
    ]
})
export class RadioGroupComponent implements ControlValueAccessor, AfterViewInit, AfterViewChecked {
    @Input()
    id: string = `radio-group-${nextUniqueId++}`;

    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    @Input()
    name: string = `radio-group-${nextUniqueId++}`;

    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value.
     */
    @Input()
    value: any;

    /**
     * values of radio buttons. type will be of SelectItem or String
     */
    @Input()
    list: Array<SelectItem | string>;

    /**
     * size of radio buttons. compact|cozy
     */
    @Input()
    size: InputSize;

    /**
     * Type of Radio buttons.
     */
    @Input()
    state: stateType = 'default';

    /** Whether the radio group is disabled */
    @Input()
    get disabled(): boolean {
        return this._disabled;
    }
    set disabled(isdisabled: boolean) {
        this._disabled = isdisabled;
    }

    /**
     * To Dispaly Radio buttons in a line
     */
    @Input()
    isInline: boolean = false;

    /**
     * When the radio is required show None value to let user know to select something
     */
    @Input()
    hasNoValue: boolean = false;

    @Input()
    noValueLabel: string = 'None';

    /** Child radio buttons <fdp-radio-buttons> passed as contents*/
    @ContentChildren(PlatformRadioButtonComponent)
    radioButtons: QueryList<PlatformRadioButtonComponent>;

    /** radio buttons passed as list of values ['button1', 'button2'] */
    @ViewChildren(PlatformRadioButtonComponent)
    viewradioButtons: QueryList<PlatformRadioButtonComponent>;

    /** Value change event for outer element */
    @Output()
    change: EventEmitter<PlatformRadioButtonComponent> = new EventEmitter<PlatformRadioButtonComponent>();

    /** The currently selected radio button. Should match value. */
    private _selected: PlatformRadioButtonComponent | null = null;

    private _disabled: boolean = false;

    /** if view is ready with child */
    _isInitialized: boolean = false;

    private destroy$ = new Subject<boolean>();

    constructor(private _changeDetector: ChangeDetectorRef, @Optional() @Self() public ngControl: NgControl) {
        if (ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    /** controlvalueaccessor */
    onChange = (_: any) => {};
    onTouched = () => {};

    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentChecked(): void {
        if (!this.validateRadioButtons()) {
            throw new Error('fdp-radio-button-group must contain a fdp-radio-button');
        }

        if (this.radioButtons && this.radioButtons.length > 0) {
            this.selectGivenValue(this.radioButtons);
        }
    }

    /**
     * Make sure we have expected childs.
     */
    private validateRadioButtons(): boolean {
        return (
            this.radioButtons.filter(item => !(item instanceof PlatformRadioButtonComponent || item['renderer']))
                .length === 0
        );
    }

    ngAfterViewInit() {
        // Mark this component as initialized in AfterViewInit
        // because all views with contents will be initialised After this
        setTimeout(() => {
            this._initRadioButtons(this.value);
        });
    }

    ngAfterViewChecked() {
        // if value of group radio provided already in template,
        // then select the given value radio button
        if (this.viewradioButtons && this.viewradioButtons.length > 0) {
            this.selectGivenValue(this.viewradioButtons);
        }
    }
    /** selects the radio button with initial supplied value */
    private selectGivenValue(buttons: QueryList<PlatformRadioButtonComponent>) {
        buttons.forEach(button => {
            if (button.value === this.value) {
                button.checkRadioButton();
                this._selected = button;
            }
        });
    }
    /**
     * Initializing all content radio buttons with given properties and
     * subscribing to radio button radiobuttonclicked event
     */
    private _initRadioButtons(value: any) {
        if (this.radioButtons) {
            this.radioButtons.forEach(button => {
                this._setButtonProperties(button);
                if (button.value === this.value) {
                    button.checkRadioButton();
                    this._selected = button;
                }
                button.radiobuttonclicked
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(ev => this._selectedRadioButtonChanged(ev));
            });
            this._changeDetector.detectChanges();

            if (this._disabled) {
                this.setDisabledState(this._disabled);
            }
        }
        this._isInitialized = true;
    }

    private _setButtonProperties(button: PlatformRadioButtonComponent) {
        button.name = this.name;
        button.disabled = this.disabled;
        button.size = this.size;
        button.state = this.state;
    }

    /** Called everytime a radio button is clicked, In content child as well as viewchild */
    private _selectedRadioButtonChanged(radiobutton: PlatformRadioButtonComponent) {
        if (this._selected !== radiobutton) {
            if (this._selected) {
                this._selected.uncheckRadioButton();
            }
            this._selected = radiobutton;
        }
        this.value = radiobutton.value;
        this.change.emit(radiobutton);
        this.onChange(this.value);
        this._changeDetector.markForCheck();
    }

    viewRadioButtonSelected(event: PlatformRadioButtonComponent) {
        this._selectedRadioButtonChanged(event);
    }
    /** ControlValueAccessor implementation*/
    writeValue(value: any): void {
        if (value) {
            this.value = value;
            this._changeDetector.detectChanges();
            this.onChange(value);
        }
    }

    /** ControlValueAccessor implementation*/
    setDisabledState(isDisabled: boolean) {
        this._disabled = isDisabled;
        if (this.radioButtons) {
            this.radioButtons.forEach(button => {
                button.disabled = isDisabled;
            });
            this._changeDetector.detectChanges();
        }
    }

    /** ControlValueAccessor implementation*/
    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    /** ControlValueAccessor implementation*/
    registerOnTouched(fn: () => void): void {
        if (this.radioButtons) {
            this.radioButtons.forEach(button => {
                button.registerOnTouched(fn);
            });
        }
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}

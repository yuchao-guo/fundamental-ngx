import {
    Component,
    ChangeDetectorRef,
    EventEmitter,
    Input,
    Output,
    Optional,
    Self,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy
} from '@angular/core';
import { RadioButtonComponent, stateType } from '@fundamental-ngx/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormFieldControl, InputSize } from '../form-control';

@Component({
    selector: 'fdp-radio-button',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: FormFieldControl, useExisting: PlatformRadioButtonComponent, multi: true }]
})
export class PlatformRadioButtonComponent implements ControlValueAccessor {
    /** name of radio button, will be set from radio button group name */
    @Input()
    get name(): any {
        return this._name;
    }
    set name(newName: any) {
        if (this._name !== newName) {
            this._name = newName;
            this._cd.markForCheck();
        }
    }

    /**
     * Type of Radio buttons.
     */
    @Input()
    get state(): any {
        return this._state;
    }
    set state(newState: any) {
        if (this._state !== newState) {
            this._state = newState;
            this._cd.markForCheck();
        }
    }
    /**
     * Size of Radio buttons.
     */
    @Input()
    get size(): any {
        return this._size;
    }
    set size(newSize: any) {
        if (this._size !== newSize) {
            this._size = newSize;
            this.iscompact = this.size === 'compact' ? true : false;
            this._cd.markForCheck();
        }
    }

    @Input()
    get disabled(): any {
        return this._disabled;
    }
    set disabled(newValue: any) {
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this._cd.markForCheck();
        }
    }

    @Input()
    get value(): any {
        return this._value;
    }
    set value(newValue: any) {
        if (this._value !== newValue) {
            this.writeValue(this._value);
            this._value = newValue;
        }
    }

    @Output()
    readonly radiobuttonclicked: EventEmitter<PlatformRadioButtonComponent> = new EventEmitter();

    /** Access child elemen*/
    @ViewChild(RadioButtonComponent, { static: false })
    coreRadioButton: RadioButtonComponent;

    @ViewChild('renderer', { static: false })
    renderer: ElementRef;

    iscompact: boolean = false;

    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value.
     */
    protected _value: any = null;
    protected _name: string;
    protected _state: stateType = 'default';
    protected _size: InputSize = 'cozy';
    protected _disabled: boolean = false;

    /**
     * ControlValueAccessor implementations
     */
    onChange = (_: any) => {};
    onTouched = (_: any) => {};

    constructor(private _cd: ChangeDetectorRef, @Optional() @Self() public ngControl: NgControl) {
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    /**
     * ControlValueAccessor implementations
     */
    writeValue(newValue: string) {
        if (newValue) {
            this._value = newValue;
            this._cd.detectChanges();
            this.onChange(this._value);
        }
    }

    /**
     * ControlValueAccessor implementations
     */
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this._cd.detectChanges();
    }

    /**
     * ControlValueAccessor implementations
     */
    registerOnChange(fn: (_: any) => void) {
        this.onChange = fn;
    }

    /**
     * ControlValueAccessor implementations
     */
    registerOnTouched(fn: (_: any) => void) {
        this.onTouched = fn;
    }

    onRadioClick(event: KeyboardEvent | MouseEvent) {
        event.stopPropagation();
        if (!this.disabled) {
            this.onChange(this._value);
            this.radiobuttonclicked.emit(this);
        }
    }

    /** method to check radio button on click */
    checkRadioButton() {
        if (this.coreRadioButton) {
            this.coreRadioButton.inputElement.nativeElement.checked = true;
        }
    }

    /** method to uncheck all other radio button */
    uncheckRadioButton() {
        if (this.coreRadioButton) {
            this.coreRadioButton.inputElement.nativeElement.checked = false;
        }
    }
}

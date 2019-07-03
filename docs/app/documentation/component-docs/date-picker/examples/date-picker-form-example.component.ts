import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fd-date-picker-form-example',
    template: `
        <form [formGroup]="customForm">
            <fd-date-picker [allowNull]="false" formControlName="date"></fd-date-picker>
        </form>
        
        Touched: {{customForm.controls.date.touched}}<br/>
        Dirty: {{customForm.controls.date.dirty}}<br/>
        Form Valid: {{customForm.valid}}<br/>
        FormControl Valid: {{customForm.controls.date.valid}}<br/>

        Selected Date: {{ customForm.controls.date.value.date ? customForm.controls.date.value.date.toDateString() : 'null' }}
    `
})
export class DatePickerFormExampleComponent {
    customForm = new FormGroup({
        date: new FormControl({ date: null })
    });
};

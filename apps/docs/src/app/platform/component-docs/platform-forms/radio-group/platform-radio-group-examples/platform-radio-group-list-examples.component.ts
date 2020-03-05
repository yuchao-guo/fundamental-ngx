import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-radio-group-list-example',
    templateUrl: './platform-radio-group-list-example.component.html'
})
export class PlatformRadioGroupListExampleComponent {
    options = ['Option 1', 'Option 2', 'Option 3'];
    name = 'option';
    compact = 'true';
    disabled = 'false';
    state = 'valid';
    hasNoValue = 'true';
    noValueLabel = '(No selection)';

    customForm = new FormGroup({
        example8: new FormControl({ value: '', disabled: false }),
        example9: new FormControl({ value: '', disabled: false })
    });
}

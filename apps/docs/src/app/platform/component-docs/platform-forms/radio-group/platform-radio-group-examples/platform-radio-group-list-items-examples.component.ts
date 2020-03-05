import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-radio-group-list-items-example',
    templateUrl: './platform-radio-group-list-items-example.component.html'
})
export class PlatformRadioGroupListItemsExampleComponent {
    customForm = new FormGroup({
        example4: new FormControl(''),
        example5: new FormControl(''),
        example6: new FormControl(''),
        example7: new FormControl('')
    });
    compact: string = '';

    items = [
        {
            label: 'Option 1',
            value: 'Option 1',
            state: 'default',
            disabled: false
        },
        {
            label: 'Option 2',
            value: 'Option 2',
            state: 'valid',
            disabled: false
        },
        {
            label: 'Option 3',
            value: 'Option 3',
            state: 'invalid',
            disabled: false
        },
        {
            label: 'Option 4',
            value: 'Option 4',
            state: 'warning',
            disabled: false
        },
        {
            label: 'Option 5',
            value: 'Option 5',
            state: 'information',
            disabled: false
        }
    ];

    itemsDisabled = [
        {
            label: 'Option 1 Disabled',
            value: 'Option 1 Disabled',
            state: 'default',
            disabled: true
        },
        {
            label: 'Option 2 Disabled',
            value: 'Option 2 Disabled',
            state: 'valid',
            disabled: true
        },
        {
            label: 'Option 3 Disabled',
            value: 'Option 3 Disabled',
            state: 'invalid',
            disabled: true
        },
        {
            label: 'Option 4 Disabled',
            value: 'Option 4 Disabled',
            state: 'warning',
            disabled: true
        },
        {
            label: 'Option 5 Disabled',
            value: 'Option 5 Disabled',
            state: 'information',
            disabled: true
        }
    ];

    itemsCompact = [
        {
            label: 'Option 1',
            value: 'Option 1',
            state: 'default',
            disabled: false
        },
        {
            label: 'Option 2',
            value: 'Option 2',
            state: 'valid',
            disabled: false
        },
        {
            label: 'Option 3',
            value: 'Option 3',
            state: 'invalid',
            disabled: false
        },
        {
            label: 'Option 4',
            value: 'Option 4',
            state: 'warning',
            disabled: false
        },
        {
            label: 'Option 5',
            value: 'Option 5',
            state: 'information',
            disabled: false
        }
    ];
}

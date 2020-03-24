import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-radio-group-list-example',
    templateUrl: './platform-radio-group-list-example.component.html',
})
export class PlatformRadioGroupListExampleComponent {
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

    favoriteOption: string = '';
    favoriteOption2: string = '';
    customForm = new FormGroup({
        example1: new FormControl({ value: '', disabled: false }),
        example2: new FormControl({ value: '', disabled: false }),
    });
}

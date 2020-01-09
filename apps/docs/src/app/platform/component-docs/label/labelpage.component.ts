import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'fd-label',
    templateUrl: './labelpage.component.html'
})
export class LabelPageComponent implements OnInit {
    form: FormGroup;
    id: string = 'firstName';
    label: string =
        'Labels are used as titles [long] testwordforsinglecontrolsorgroupsofcontrols. Label appearance can be influenced by properties';
    data: Object;
    constructor() {}

    ngOnInit() {
        this.form = new FormGroup({});
        this.data = new SomeObject('input data');
    }
}

class SomeObject {
    constructor(public inputText: string) {}
}

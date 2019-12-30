import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fdp-label',
    template: `
        <label fd-form-label for="id"
            >{{ label }}
            <span>:</span>
            <span [ngClass]="{ 'fdp-required-mark': required }"></span>
        </label>
    `,
    styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
    @Input()
    id: string;

    @Input()
    label: string;

    @Input()
    required: boolean;

    constructor() {}

    ngOnInit() {}
}

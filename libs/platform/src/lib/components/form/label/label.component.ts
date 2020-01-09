import { Component, OnInit, Input } from '@angular/core';

export type labelAlign = 'left' | 'right';
export type asteriskSide = 'left' | 'right';

@Component({
    selector: 'fdp-label',
    template: `
        <span [ngStyle]="{ 'text-align': labelTextAlign }">
            <span class="fdp-required-mark" *ngIf="editable && required && !asteriskOnRight"></span>
            <label [attr.for]="id">
                <span
                    *ngIf="!noLabelLayout"
                    class="set-label-max-width"
                    [ngClass]="{
                        'overflow-truncate-text': !wrap,
                        'overflow-truncate-text-wrap': wrap,
                        'hyphenation-label': wrap && hyphenation
                    }"
                    >{{ label }}</span
                ><span>:</span>
            </label>
            <span class="fdp-required-mark" *ngIf="editable && required && asteriskOnRight"></span>
        </span>
    `,
    styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
    @Input()
    id: string;

    @Input()
    label: string;

    @Input()
    editable?: boolean;

    @Input()
    required?: boolean;

    @Input()
    noLabelLayout?: boolean;

    @Input()
    labelTextAlign?: labelAlign = 'right';

    @Input()
    wrap?: boolean = false;

    @Input()
    asteriskOnRight?: boolean = true;

    @Input()
    hyphenation: boolean = false;

    constructor() {}

    ngOnInit() {
        console.log('value of label:' + this.label);
    }
}

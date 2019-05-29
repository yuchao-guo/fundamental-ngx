import { Component } from '@angular/core';

@Component({
    selector: 'fd-table-fixed-example',
    templateUrl: './table-fixed-example.component.html'
})
export class TableFixedExampleComponent {
    tableRows = [
        {
            column1: 'Row 1',
            column2: 'Row 1',
            column3: 'Row 1'
        },
        {
            column1: 'Row 2',
            column2: 'Row 2',
            column3: 'Row 2'
        },
        {
            column1: 'Row 3',
            column2: 'Row 3',
            column3: 'Row 3'
        },
        {
            column1: 'Row 4',
            column2: 'Row 4',
            column3: 'Row 4'
        },
        {
            column1: 'Row 5',
            column2: 'Row 5',
            column3: 'Row 5'
        }
    ];
}

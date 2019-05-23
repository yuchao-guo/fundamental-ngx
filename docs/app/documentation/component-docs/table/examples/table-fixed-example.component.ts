import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fd-table-fixed-example',
    templateUrl: './table-fixed-example.component.html'
})
export class TableFixedExampleComponent implements OnInit {
    tableRows;

    ngOnInit() {
        this.tableRows = [
            {
                column1: 'Row 1',
                column2: 'Row 1',
                column3: 'Row 1',
                column4: 'Row 1',
                column5: 'Row 1',
                date: '09-07-18',
                type: 'search'
            },
            {
                column1: 'Row 2',
                column2: 'Row 2',
                column3: 'Row 2',
                column4: 'Row 2',
                column5: 'Row 2',
                date: '09-07-18',
                type: 'cart'
            },
            {
                column1: 'Row 3',
                column2: 'Row 3',
                column3: 'Row 3',
                column4: 'Row 3',
                column5: 'Row 3',
                date: '09-07-18',
                type: 'calendar'
            },
            {
                column1: 'Row 4',
                column2: 'Row 4',
                column3: 'Row 4',
                column4: 'Row 4',
                column5: 'Row 4',
                date: '09-07-18',
                type: 'search'
            },
            {
                column1: 'Row 5',
                column2: 'Row 5',
                column3: 'Row 5',
                column4: 'Row 5',
                column5: 'Row 5',
                date: '09-07-18',
                type: 'search'
            }
        ];
    }
}

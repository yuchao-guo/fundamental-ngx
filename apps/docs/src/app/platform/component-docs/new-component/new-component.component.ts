import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './new-component.component.html'
})
export class NewComponentComponent implements OnInit {
    multiLayout: boolean = false;
    editable: boolean = false;
    id: string;
    noLabelLayout: boolean = false;
    fluid: boolean = true;

    constructor() {}

    ngOnInit() {
        console.log('Coming here!');
    }

    onLoad(event) {}
    onError(event) {}
}

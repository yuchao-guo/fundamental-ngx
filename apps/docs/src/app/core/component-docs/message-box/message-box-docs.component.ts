import { Component } from '@angular/core';

import * as messageBoxHtml from '!raw-loader!./examples/message-box-example.component.ts';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box-docs.component.html'
})
export class MessageBoxDocsComponent {

    messageBoxHtml = messageBoxHtml;

}

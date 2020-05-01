import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';
import { MessageBoxDocsComponent } from './message-box-docs.component';
import { MessageBoxExampleComponent } from './examples/message-box-example.component';
import { MessageBoxHeaderComponent } from './message-box-header/message-box-header.component';
import { MessageBoxModule } from '@fundamental-ngx/core';

const routes: Routes = [
    {
        path: '',
        component: MessageBoxHeaderComponent,
        children: [
            { path: '', component: MessageBoxDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.messageBox } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationModule, MessageBoxModule],
    exports: [RouterModule],
    declarations: [
        MessageBoxHeaderComponent,
        MessageBoxDocsComponent,
        MessageBoxExampleComponent
    ]
})
export class MessageBoxDocsModule {}

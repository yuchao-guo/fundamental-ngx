import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';
import { API_FILES } from '../../api-files';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuDocsComponent } from './menu-docs.component';
import {
    MenuExampleComponent,
    MenuSeparatorExampleComponent,
    MenuSizeExampleComponent,
    MenuSubmenuExampleComponent,
    ContextualMenuExampleComponent
} from './examples/menu-examples.component';
import { MenuAddonExampleComponent } from './examples/menu-addon-examples.component';
import { MenuKeyboardSupportExampleComponent } from './examples/menu-keyboard-support-example.component';
import { MenuModule, ButtonModule } from '@fundamental-ngx/core';
import { MenuObjectExampleComponent } from './examples/menu-object-example.component';

const routes: Routes = [
    {
        path: '',
        component: MenuHeaderComponent,
        children: [
            { path: '', component: MenuDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.menu } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationModule, MenuModule, ButtonModule],
    exports: [RouterModule],
    declarations: [
        MenuDocsComponent,
        MenuHeaderComponent,
        MenuExampleComponent,
        MenuAddonExampleComponent,
        MenuSeparatorExampleComponent,
        MenuKeyboardSupportExampleComponent,
        MenuSizeExampleComponent,
        MenuSubmenuExampleComponent,
        ContextualMenuExampleComponent,
        MenuObjectExampleComponent
    ]
})
export class MenuDocsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { SelectModule } from '@fundamental-ngx/core';

@NgModule({
    declarations: [
        SelectComponent
    ],
    imports: [
        CommonModule,
        SelectModule
    ],
    exports: [SelectComponent]
})
export class FdpSelectModule {
}

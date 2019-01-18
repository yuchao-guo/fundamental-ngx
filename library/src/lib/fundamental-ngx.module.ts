import { NgModule, Injector } from '@angular/core';
import { FundamentalNgxComponent } from './fundamental-ngx.component';
import { ActionBarModule } from './action-bar/action-bar.module';
import { AlertModule } from './alert/alert.module';
import { BadgeLabelModule } from './badge-label/badge-label.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ButtonModule } from './button/button.module';
import { ButtonGroupModule } from './button-group/button-group.module';
import { CalendarModule } from './calendar/calendar.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { FormModule } from './form/form.module';
import { IconModule } from './icon/icon.module';
import { IdentifierModule } from './identifier/identifier.module';
import { ImageModule } from './image/image.module';
import { InlineHelpModule } from './inline-help/inline-help.module';
import { InputGroupModule } from './input-group/input-group.module';
import { ListModule } from './list/list.module';
import { MenuModule } from './menu/menu.module';
import { ModalModule } from './modal/modal.module';
import { PaginationModule } from './pagination/pagination.module';
import { PanelModule } from './panel/panel.module';
import { PopoverModule } from './popover/popover.module';
import { SearchInputModule } from './search-input/search-input.module';
import { ShellbarModule } from './shellbar/shellbar.module';
import { SideNavigationModule } from './side-navigation/side-navigation.module';
import { TableModule } from './table/table.module';
import { TabsModule } from './tabs/tabs.module';
import { TileModule } from './tile/tile.module';
import { TreeModule } from './tree/tree.module';
import { TimeModule } from './time/time.module';
import { TimePickerModule } from './time-picker/time-picker.module';

//for ng elements
import { createCustomElement } from '@angular/elements';
import { BadgeComponent } from './badge-label/badge.component';
import { LabelComponent } from './badge-label/label.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { APP_BASE_HREF } from '@angular/common';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalService } from './modal/modal.service';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [FundamentalNgxComponent],
    exports: [
        FundamentalNgxComponent,
        ActionBarModule,
        AlertModule,
        BadgeLabelModule,
        BreadcrumbModule,
        ButtonModule,
        ButtonGroupModule,
        CalendarModule,
        DatePickerModule,
        FormModule,
        IconModule,
        IdentifierModule,
        ImageModule,
        InlineHelpModule,
        IdentifierModule,
        InputGroupModule,
        ListModule,
        MenuModule,
        ModalModule,
        PaginationModule,
        PanelModule,
        PopoverModule,
        SearchInputModule,
        ShellbarModule,
        SideNavigationModule,
        TableModule,
        TabsModule,
        TileModule,
        TimeModule,
        TimePickerModule,
        TreeModule
    ],
    entryComponents: [BadgeComponent, LabelComponent, DatePickerComponent],
    providers: [ModalService, { provide: APP_BASE_HREF, useValue: '/' }]
})
export class FundamentalNgxModule {
    constructor(private injector: Injector) {
        const badge = createCustomElement(BadgeComponent, { injector });
        customElements.define('made-for-badge', badge);

        const label = createCustomElement(LabelComponent, { injector });
        customElements.define('made-for-label', label);

        const datePicker = createCustomElement(DatePickerComponent, { injector });
        customElements.define('made-for-datepicker', datePicker);
    }

    ngDoBootstrap() {}
}

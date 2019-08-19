import { NgModule } from '@angular/core';
import { ColorPaletteComponent } from './color-palette.component';
import { CommonModule } from '@angular/common';
import { ColorPaletteDefaultComponent } from './color-palette-default/color-palette-default.component';
import { ColorPaletteColorsComponent } from './color-palette-colors/color-palette-colors.component';
import { ColorPaletteMoreColorsComponent } from './color-palette-more-colors/color-palette-more-colors.component';
import { ColorPaletteFooterComponent } from './color-palette-footer/color-palette-footer.component';

import { SplitButtonModule } from '../split-button/split-button.module';
import { PopoverModule } from '../popover/popover.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
    declarations: [ColorPaletteComponent, ColorPaletteDefaultComponent,
        ColorPaletteColorsComponent, ColorPaletteMoreColorsComponent, ColorPaletteFooterComponent],
    imports: [CommonModule, PopoverModule, ButtonModule, SplitButtonModule],
    exports: [ColorPaletteComponent]
})
export class ColorPaletteModule { }

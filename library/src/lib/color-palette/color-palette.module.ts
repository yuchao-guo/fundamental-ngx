import { NgModule } from '@angular/core';
import { ColorPaletteComponent } from './color-palette.component';
import { CommonModule } from '@angular/common';
import { ColorPaletteHeaderComponent } from './color-palette-header/color-palette-header.component';
import { ColorPaletteColorsComponent } from './color-palette-colors/color-palette-colors.component';
import { ColorPaletteMoreColorsComponent } from './color-palette-more-colors/color-palette-more-colors.component';
import { ColorPaletteFooterComponent } from './color-palette-footer/color-palette-footer.component';

import { PopoverModule } from '../popover/popover.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
    declarations: [ColorPaletteComponent, ColorPaletteHeaderComponent,
        ColorPaletteColorsComponent, ColorPaletteMoreColorsComponent, ColorPaletteFooterComponent],
    imports: [CommonModule, PopoverModule, ButtonModule],
    exports: [ColorPaletteComponent]
})
export class ColorPaletteModule { }

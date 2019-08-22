import { NgModule } from '@angular/core';
import { ColorPaletteComponent } from './color-palette.component';
import { CommonModule } from '@angular/common';
import { ColorPaletteDefaultColorComponent } from './color-palette-default-color/color-palette-default-color.component';
import { ColorPaletteSwatchContainerComponent } from './color-palette-swatch-container/color-palette-swatch-container.component';
import { ColorPaletteMoreColorsComponent } from './color-palette-more-colors/color-palette-more-colors.component';
import { ColorPaletteRecentColorsComponent } from './color-palette-recent-colors/color-palette-recent-colors.component';

import { SplitButtonModule } from '../split-button/split-button.module';
import { PopoverModule } from '../popover/popover.module';
import { ButtonModule } from '../button/button.module';
import { InputGroupModule } from '../input-group/input-group.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ColorPaletteComponent, ColorPaletteDefaultColorComponent,
        ColorPaletteSwatchContainerComponent, ColorPaletteMoreColorsComponent, ColorPaletteRecentColorsComponent],
    imports: [CommonModule, PopoverModule, ButtonModule, SplitButtonModule, InputGroupModule, FormsModule],
    exports: [ColorPaletteComponent]
})
export class ColorPaletteModule { }

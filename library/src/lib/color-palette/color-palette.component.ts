import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { VariantConfiguration } from './models/variant-configuration';

@Component({
  selector: 'fd-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {

  /** Used to determine which variant of the color-palette needs to be displayed */
  @Input()
  variant: string;

  /** Varible storing the color the user has clicked on */
  @Output()
  chosenColor: EventEmitter<string> = new EventEmitter<string>();

  /** Object used to hide/show various sub-components of the color-palette based on the desired variant */
  variantConfiguration: VariantConfiguration;

  /** Variable that holds the color that is used if user selects 'default color' */
  defaultColor: string = 'Black';

  constructor() { }

  ngOnInit() {
    console.log(`we tried to render a ${this.variant} variant of the color-palette component`);
    this.configureVariant(this.variant);
  }

  /** Method used to make color selection */
  public selectedColor(color: string): void {
    this.chosenColor.emit(color);
    // this.chosenColor = color;
    console.log(`Selected color ${color}`);
  }

  /** Method that configures the object that is used to determine which variant is displayed */
  public configureVariant(variant: string): void {
    if (variant === 'full-featured') {
      this.variantConfiguration = this.getConfigurationObject(true, true, true, true);
    } else if (variant === 'complex') {
      this.variantConfiguration = this.getConfigurationObject(true, true, true, false);
    } else if (variant === 'simple') {
      this.variantConfiguration = this.getConfigurationObject(false, true, false, false);
    }
  }

  private getConfigurationObject(
    defaultColor: boolean,
    swatchContainer: boolean,
    moreColors: boolean,
    recentColors: boolean
  ): VariantConfiguration {
    return {
      defaultColor: defaultColor,
      swatchContainer: swatchContainer,
      moreColors: moreColors,
      recentColors: recentColors
    }
  }
}

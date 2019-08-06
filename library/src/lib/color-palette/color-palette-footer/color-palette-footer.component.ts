import { Component } from '@angular/core';

@Component({
  selector: 'fd-color-palette-footer',
  templateUrl: './color-palette-footer.component.html',
  styleUrls: ['./color-palette-footer.component.scss']
})
export class ColorPaletteFooterComponent {

  customColors: string[] = ['white', 'white', 'white', 'white', 'white'];

  constructor() { }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-color-palette-more-colors',
  templateUrl: './color-palette-more-colors.component.html',
  styleUrls: ['./color-palette-more-colors.component.scss']
})
export class ColorPaletteMoreColorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openColorPicker(): void {
    console.log('Open color picker (not yet implemented)')
  }

}

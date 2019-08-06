import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fd-color-palette-colors',
  templateUrl: './color-palette-colors.component.html',
  styleUrls: ['./color-palette-colors.component.scss']
})
export class ColorPaletteColorsComponent {

  colors: string[] = ['red', 'blue', 'orange', 'lawngreen', 'Crimson',
    'deeppink', 'rosybrown', 'maroon', 'olive', 'linen', 'orchid', 'royalblue', 'cornsilk',
    'cadetblue', 'darkorange'];

  color: string;

  @Output()
  readonly selectedColor: EventEmitter<String> = new EventEmitter<string>();

  constructor() { }

  selectColor(color: string): void {
    this.color = color;
    this.selectedColor.emit(this.color);
  }




}

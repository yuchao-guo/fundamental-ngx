import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fd-color-palette-swatch-container',
  templateUrl: './color-palette-swatch-container.component.html',
  styleUrls: ['./color-palette-swatch-container.component.scss']
})
export class ColorPaletteSwatchContainerComponent {

  colors: string[] = ['#ffd700', '#F08080', '#FF1493', '#c71585', '#7B68EE',
    '#6495ed', '#20b2aa', '#6B8E23', '#4169E1', '#E0FFFF', '#FFFFFF', '#D3D3D3', '#A9A9A9',
    '#696969', '#000000'];

  color: string;

  @Output()
  readonly selectedColor: EventEmitter<String> = new EventEmitter<string>();

  constructor() { }

  selectColor(color: string): void {
    this.color = color;
    this.selectedColor.emit(this.color);
  }
}

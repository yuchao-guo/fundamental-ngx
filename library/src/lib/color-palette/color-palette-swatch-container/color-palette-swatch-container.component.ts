import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'fd-color-palette-swatch-container',
  templateUrl: './color-palette-swatch-container.component.html',
  styleUrls: ['./color-palette-swatch-container.component.scss']
})
export class ColorPaletteSwatchContainerComponent {

  @Input()
  defaultColors: string[];

  color: string;

  @Output()
  readonly selectedColor: EventEmitter<String> = new EventEmitter<string>();

  constructor() { }

  selectColor(color: string): void {
    this.color = color;
    this.selectedColor.emit(this.color);
  }
}

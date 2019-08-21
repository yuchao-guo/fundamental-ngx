import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'fd-color-palette-recent-colors',
  templateUrl: './color-palette-recent-colors.component.html',
  styleUrls: ['./color-palette-recent-colors.component.scss']
})
export class ColorPaletteRecentColorsComponent {

  customColors: string[] = ['White', 'White', 'White', 'White', 'White'];

  color: string;

  @Output()
  readonly selectedColor: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  selectColor(color: string): void {
    this.color = color;
    this.selectedColor.emit(this.color);
  }
}

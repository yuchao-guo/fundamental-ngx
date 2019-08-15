import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'fd-color-palette-footer',
  templateUrl: './color-palette-footer.component.html',
  styleUrls: ['./color-palette-footer.component.scss']
})
export class ColorPaletteFooterComponent {

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

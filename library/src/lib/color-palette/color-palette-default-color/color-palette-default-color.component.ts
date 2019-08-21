import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'fd-color-palette-default-color',
  templateUrl: './color-palette-default-color.component.html',
  styleUrls: ['./color-palette-default-color.component.scss']
})
export class ColorPaletteDefaultColorComponent implements OnInit {

  @Input()
  defaultColor: string;

  @Output()
  selectedDefaultColor: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectDefaultColor(): void {
    this.selectedDefaultColor.emit(this.defaultColor);
  }

}

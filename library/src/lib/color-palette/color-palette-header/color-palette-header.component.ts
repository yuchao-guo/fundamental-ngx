import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'fd-color-palette-header',
  templateUrl: './color-palette-header.component.html',
  styleUrls: ['./color-palette-header.component.scss']
})
export class ColorPaletteHeaderComponent implements OnInit {

  @Input()
  defaultColor: string = 'black';

  @Output()
  selectedDefaultColor: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectDefaultColor(): void {
    console.log('default clicked. in child component!');
    this.selectedDefaultColor.emit(this.defaultColor);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {

  chosenColor: string;

  defaultColor: string = 'black';

  constructor() { }

  ngOnInit() {
  }

  public selectedColor(color: string): void {
    this.chosenColor = color;
  }

  public selectedDefaultColor(color: string): void {
    this.selectedColor(color);
    console.log('selectedDefaultColor was called in the parent component');
  }

}

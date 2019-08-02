import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteColorsComponent } from './color-palette-colors.component';

describe('ColorPaletteColorsComponent', () => {
  let component: ColorPaletteColorsComponent;
  let fixture: ComponentFixture<ColorPaletteColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPaletteColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

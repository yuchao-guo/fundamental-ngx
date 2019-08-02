import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteMoreColorsComponent } from './color-palette-more-colors.component';

describe('ColorPaletteMoreColorsComponent', () => {
  let component: ColorPaletteMoreColorsComponent;
  let fixture: ComponentFixture<ColorPaletteMoreColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPaletteMoreColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteMoreColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

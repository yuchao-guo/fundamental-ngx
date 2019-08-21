import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteSwatchContainerComponent } from './color-palette-swatch-container.component';

describe('ColorPaletteSwatchContainerComponent', () => {
  let component: ColorPaletteSwatchContainerComponent;
  let fixture: ComponentFixture<ColorPaletteSwatchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPaletteSwatchContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteSwatchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

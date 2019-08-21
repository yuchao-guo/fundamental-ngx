import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteDefaultColorComponent } from './color-palette-default-color.component';

describe('ColorPaletteDefaultColorComponent', () => {
  let component: ColorPaletteDefaultColorComponent;
  let fixture: ComponentFixture<ColorPaletteDefaultColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPaletteDefaultColorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteDefaultColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

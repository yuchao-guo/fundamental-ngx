import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteDefaultComponent } from './color-palette-default.component';

describe('ColorPaletteDefaultComponent', () => {
  let component: ColorPaletteDefaultComponent;
  let fixture: ComponentFixture<ColorPaletteDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPaletteDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

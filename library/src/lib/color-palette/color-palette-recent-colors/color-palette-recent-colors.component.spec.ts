import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteRecentColorsComponent } from './color-palette-recent-colors.component';

describe('ColorPaletteRecentColorsComponent', () => {
  let component: ColorPaletteRecentColorsComponent;
  let fixture: ComponentFixture<ColorPaletteRecentColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPaletteRecentColorsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteRecentColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

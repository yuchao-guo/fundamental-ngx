import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteHeaderComponent } from './color-palette-header.component';

describe('ColorPaletteHeaderComponent', () => {
  let component: ColorPaletteHeaderComponent;
  let fixture: ComponentFixture<ColorPaletteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPaletteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

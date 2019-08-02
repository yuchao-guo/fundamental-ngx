import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteFooterComponent } from './color-palette-footer.component';

describe('ColorPaletteFooterComponent', () => {
  let component: ColorPaletteFooterComponent;
  let fixture: ComponentFixture<ColorPaletteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPaletteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

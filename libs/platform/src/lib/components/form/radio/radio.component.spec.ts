import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformRadioButtonComponent } from './radio.component';

describe('RadioComponent', () => {
    let component: PlatformRadioButtonComponent;
    let fixture: ComponentFixture<PlatformRadioButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlatformRadioButtonComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlatformRadioButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

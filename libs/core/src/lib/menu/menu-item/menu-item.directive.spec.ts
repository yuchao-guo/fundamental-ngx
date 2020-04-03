import { MenuItemDirective } from './menu-item.directive';
import { ElementRef } from '@angular/core';
import { MenuKeyboardService } from '../menu-keyboard.service';

export class MockElementRef extends ElementRef {
    constructor() {
        super('');
    }
}
export class MockKeyboardService extends MenuKeyboardService {
    constructor() {
        super();
    }
}
describe('MenuItemDirective', () => {
    it('should create an instance', () => {
        const directive = new MenuItemDirective(new MockElementRef(), new MockKeyboardService());
        expect(directive).toBeTruthy();
    });
});

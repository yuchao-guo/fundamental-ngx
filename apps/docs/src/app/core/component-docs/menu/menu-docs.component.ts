import { Component } from '@angular/core';

import * as menuSrc from '!raw-loader!./examples/menu-example.component.html';
import * as menuAddon from '!raw-loader!./examples/menu-addon-example.component.html';
import * as menuAddonTsCode from '!raw-loader!./examples/menu-addon-examples.component.ts';
import * as menuKeyboardSrcH from '!raw-loader!./examples/menu-keyboard-support-example.component.html';
import * as menuKeyboardSrcT from '!raw-loader!./examples/menu-keyboard-support-example.component.ts';
import * as menuSeparatorSrc from '!raw-loader!./examples/menu-separator-example.component.html';
import * as menuSizeSrc from '!raw-loader!./examples/menu-size-example.component.html';
import * as menuSubmenuSrc from '!raw-loader!./examples/menu-submenu-example.component.html';
import * as menuContextualSrc from '!raw-loader!./examples/contextual-menu-example.component.html';
import * as menuObjectSrc from '!raw-loader!./examples/menu-object-example.component.html';
import * as menuObjectTsCode from '!raw-loader!./examples/menu-object-example.component.ts';

import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-menu',
    templateUrl: './menu-docs.component.html'
})
export class MenuDocsComponent {
    menuBasic: ExampleFile[] = [
        {
            language: 'html',
            code: menuSrc,
            fileName: 'menu-example'
        }
    ];
    menuAddon: ExampleFile[] = [
        {
            language: 'html',
            code: menuAddon,
            fileName: 'menu-addon-example',
            typescriptFileCode: menuAddonTsCode,
            component: 'MenuExampleComponent'
        }
    ];

    menuKeyboard: ExampleFile[] = [
        {
            language: 'html',
            code: menuKeyboardSrcH,
            fileName: 'menu-keyboard-support-example'
        },
        {
            language: 'typescript',
            code: menuKeyboardSrcT,
            fileName: 'menu-keyboard-support-example',
            component: 'MenuKeyboardSupportExampleComponent'
        }
    ];

    menuSeparator: ExampleFile[] = [
        {
            language: 'html',
            code: menuSeparatorSrc,
            fileName: 'menu-separator-example'
        }
    ];

    menuSize: ExampleFile[] = [
        {
            language: 'html',
            code: menuSizeSrc,
            fileName: 'menu-size-example'
        }
    ];

    menuSubmenu: ExampleFile[] = [
        {
            language: 'html',
            code: menuSubmenuSrc,
            fileName: 'menu-submenu-example'
        }
    ];

    contextualMenu: ExampleFile[] = [
        {
            language: 'html',
            code: menuContextualSrc,
            fileName: 'contextual-menu-example'
        }
    ];
    menuObject: ExampleFile[] = [
        {
            language: 'html',
            code: menuObjectSrc,
            fileName: 'menu-object-example'
        },
        {
            language: 'typescript',
            code: menuObjectTsCode,
            fileName: 'menu-object-example',
            component: 'MenuObjectExampleComponent'
        }
    ];
}

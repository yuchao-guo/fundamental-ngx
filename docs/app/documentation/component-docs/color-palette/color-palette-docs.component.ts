import { Component } from '@angular/core';

import { ExampleFile } from '../../core-helpers/code-example/example-file';
import * as colorPaletteFullFeaturedExample from '!raw-loader!./examples/color-palette-full-featured-example.component.html';
import * as colorPaletteComplexExample from '!raw-loader!./examples/color-palette-complex-example.component.html';
import * as colorPaletteSimpleExample from '!raw-loader!./examples/color-palette-simple-example.component.html';

@Component({
    selector: 'app-color-palette',
    templateUrl: './color-palette-docs.component.html'
})
export class ColorPaletteDocsComponent {

    colorPaletteFullFeaturedExampleHtml: ExampleFile[] = [{
        language: 'html',
        code: colorPaletteFullFeaturedExample
    }];

    colorPaletteComplexExampleHtml: ExampleFile[] = [{
        language: 'html',
        code: colorPaletteComplexExample
    }];

    colorPaletteSimpleExampleHtml: ExampleFile[] = [{
        language: 'html',
        code: colorPaletteSimpleExample
    }];
}

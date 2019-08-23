import { Component } from '@angular/core';

@Component({
    selector: 'fd-color-palette-full-featured-example',
    templateUrl: './color-palette-full-featured-example.component.html'
})
export class ColorPaletteFullFeaturedExampleComponent {

    selectedColor: string = 'some-selected-color';
}

@Component({
    selector: 'fd-color-palette-complex-example',
    templateUrl: './color-palette-complex-example.component.html'
})
export class ColorPaletteComplexExampleComponent {

    selectedColor: string = 'some-selected-color';
}

@Component({
    selector: 'fd-color-palette-simple-example',
    templateUrl: './color-palette-simple-example.component.html'
})
export class ColorPaletteSimpleExampleComponent {

    selectedColor: string = 'some-selected-color';
}

@Component({
    selector: 'fd-color-palette-full-featured-input-example',
    templateUrl: './color-palette-full-featured-input-example.component.html'
})
export class ColorPaletteFullFeaturedInputExampleComponent {

    selectedColor: string = 'some-selected-color';
}

@Component({
    selector: 'fd-color-palette-complex-input-example',
    templateUrl: './color-palette-complex-input-example.component.html'
})
export class ColorPaletteComplexInputExampleComponent {

    selectedColor: string = 'some-selected-color';
}

@Component({
    selector: 'fd-color-palette-simple-input-example',
    templateUrl: './color-palette-simple-input-example.component.html'
})
export class ColorPaletteSimpleInputExampleComponent {

    selectedColor: string = 'some-selected-color';
}

@Component({
    selector: 'fd-color-palette-custom-default-colors-example',
    templateUrl: './color-palette-custom-default-colors-example.component.html'
})
export class ColorPaletteCustomDefaultColorsExampleComponent {

    selectedColor: string = 'some-selected-color';
    alternateDefaultColors: string[] = ['#c84a05', '#32b4d1', '#a3e014', '#fb2d14', '#b962f2'];
}


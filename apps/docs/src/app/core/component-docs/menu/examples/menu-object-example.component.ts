import { MenuConfigurationModel } from '@fundamental-ngx/core';
import { Component } from '@angular/core';

@Component({
    selector: 'fd-menu-object-example',
    templateUrl: './menu-object-example.component.html'
})
export class MenuObjectExampleComponent {
    menuConfiguration: MenuConfigurationModel = {
        items: [
            {
                link: {
                    callback: () => this.callbackFunction('First Item'),
                    icon: 'menu',
                    title: 'Link 1'
                }
            },
            {
                link: {
                    icon: 'menu',
                    title: 'Link 2'
                }
            },
            {
                link: {
                    icon: 'menu',
                    title: 'Link 3'
                },
                list: {
                    items: [
                        {
                            link: {
                                title: 'sub Link 1',
                                callback: () => this.callbackFunction('sub link 1 Item')
                            }
                        },
                        {
                            link: {
                                title: 'sub Link 2',
                                selected: true
                            }
                        },
                        {
                            link: {
                                title: 'sub Link 3'
                            },
                            list: {
                                items: [
                                    {
                                        link: {
                                            title: 'one more level!',
                                            icon: 'grid',
                                            href: 'www.google.com'
                                        }
                                    },
                                    {
                                        link: {
                                            title: 'anohterrr'
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            link: {
                                title: 'sub Link 4'
                            }
                        }
                    ]
                }
            },
            {
                link: {
                    icon: 'menu',
                    title: 'Link 4'
                }
            }
        ]
    };

    callbackFunction(message: string): void {
        alert('Link Clicked ' + message);
    }
}

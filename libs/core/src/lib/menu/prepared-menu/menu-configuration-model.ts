export interface MenuItem {
    // headerTitle?: string;
    list?: MenuConfigurationModel;
    link?: MenuItemLink;
    expanded?: boolean;
}

export interface MenuConfigurationModel {
    // textOnly?: boolean;
    items: MenuItem[];
}

export interface MenuItemLink {
    icon?: string;
    secondaryIcon?: string;
    title: string;
    callback?: Function;
    href?: string;
    routerLink?: string;
    selected?: boolean;
}

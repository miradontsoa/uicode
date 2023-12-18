##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `navigationItems` (Array of NavigationItemType): Specifies the navigation buttons.
- `footerNavigationItems` (Array of NavigationItemType): Specifies the footer navigation buttons.
- `defaultActive` ( string): Specifies the slug of the default active navigation item.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.

- `variant` ("default" | "style-a" | "style-b" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onClick` (function): Fires when the button is clicked.

##### NavigationItemType item arguments

- `icon` (ReactElement): Specifies the icon element.
- `title` (string): Specifies the title text.
- `slug` (string): Specifies the reference slug text.
- `showTitle` (boolean): Show or hide title.
- `href` (string): Specifies the url if the item is a link.
- `onClick` (function): Fires when the button is clicked.

##### Sample CSS customization

```css
.variant-style-b {
    --fg-color: #707070;
    --active-color: #5325ff;
    --active-icon-color: #5325ff;
    --icon-wrapper-radius: 1rem;
}

.variant-style-b .nav-icon-wrapper::before {
    border: 2px solid var(--active-color);
    background-color: transparent;
}

```

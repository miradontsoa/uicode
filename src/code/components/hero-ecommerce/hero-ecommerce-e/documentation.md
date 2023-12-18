##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `variant` ("default" | "style-a" | "style-b" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### Sample CSS customization
```css
.variant-style-a.section {
    --bg-color: #f10c34;
    --fg-color: #FFFFFF;
    --btn-fg-color: #303030;
    --btn-bg-color: #FFFFFF;
    align-items: flex-start;
    justify-content: flex-start;
}
.variant-style-a .part-image{
    order: 2;
}
.variant-style-a .part-content{
    order: 1;
}
```

##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `variant` ("default" | "style-a" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### Sample CSS customization
```css
.variant-style-b.section {
    --bg-color: #000000;
    --fg-color: #FFFFFF;
    --btn-fg-color: #303030;
    --btn-bg-color: #FFFFFF;
    --content-bg-color: rgba(0,0,0,0.5);
    align-items: flex-end;
    justify-content: flex-start;
}
```

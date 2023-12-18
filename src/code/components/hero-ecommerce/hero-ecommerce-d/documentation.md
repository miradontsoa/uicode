##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `variant` ("default" | "style-a" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### Sample CSS customization
```css
.variant-style-a.section {
    --bg-color: rgba(255, 255, 255, 0.75);
    align-items: flex-end;
}
.variant-style-a .content{
    border: 2px solid var(--fg-color);
    border-bottom: 0;
}
```

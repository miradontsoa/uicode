##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode such as text placed inside the component.
- `value` (number | string): Specifies the progression (in percentage) which will be the width of the progress bar.
- `padding` ("none" | "small" | "medium" | "large"): Specifies the padding of the block.
- `size` ( "small" | "medium" | "large"): Specifies the size of the component.
- `rounded` ("none" | "small" | "medium" | "full"): Specifies the border radius of the component.
- `border` ("none" | "thin" | "medium"): Specifies the border size of the component.
- `variant` ("default" | "blue-gradient" | "blue-outline" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

##### Sample CSS customization

```css
/* color="blue-gradient" */
.variant-blue-gradient {
    --bg-color: #D1D9F0;
    --bar-color: #567FEF;
    box-shadow: inset 2px 2px 4px rgba(0,0,0,0.17);
}
.variant-blue-gradient .bar {
    background: linear-gradient(to bottom,#567FEF, #2C4CA5 );
}
```

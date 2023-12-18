##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.
- `size` ("x-small" | "small" | "medium" | "large"): Specifies the size of the frame.
- `spinner1Border` ("none" | "thin" | "medium" | "thick"): Specifies the border size of outer spinner.
- `spinner2Border` ("none" | "thin" | "medium" | "thick"): Specifies the border size of inner spinner.
- `alignContent`("vertical" | "center"): Places the children component vertically after to the spinner or aligns center it.
- `variant` ("default" | "blue" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onClick` (function): Fires when the button is clicked.
- `onClickClose` (function): Fires when the close button is clicked.

##### Sample CSS customization

```css
/* color="blue" */
.variant-blue {
    --spinner-1-color: #567FEF;
    --spinner-2-color: rgba(86, 127, 239, 0.5);
}
```

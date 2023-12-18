##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.
- `size` ("x-small" | "small" | "medium" | "large"): Specifies the size of the frame.
- `variant` ("default" | "blue" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onClick` (function): Fires when the button is clicked.
- `onClickClose` (function): Fires when the close button is clicked.

##### Sample CSS customization

```css
/* color="blue" */
.variant-blue {
    --circle-1-color: #567FEF;
    --circle-2-color: rgba(86, 127, 239, 0.5);
}

```

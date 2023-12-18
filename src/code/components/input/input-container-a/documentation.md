##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode (such as an input or textarea element) placed inside the component.
- `label` (React.ReactNode): Specifies the input label.
- `beforeElement` (ReactNode): Specifies the component placed before the input field.
- `afterElement` (ReactNode): Specifies the component placed after the input field.
- `size` ( medium" | "large"): Specifies the size of the input container.
- `width` ("auto" | "full"): Specifies the width of the button. "full" will make the input container occupy 100% of the width of the parent and "auto" will set the width of the input container to the width of the content.
- `height` ("medium" | "large"): Specifies the height of the input container.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.
- `border` ("none" | "thin" | "medium" | "thick"): Specifies the border size of the frame.
- `shadow` ("none" | "medium" | "flat"): Specifies the shadow of the frame.

- `variant` ("default" | "blue" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onClick` (function): Fires when the button is clicked.

##### Sample CSS customization

```css
.variant-blue {
    --fg-color: #4d77ff;
    --border-color: #4d77ff;
    --shadow-color: #4d77ff5b;
}
```

##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.
- `beforeElement` (ReactNode): Specifies the component placed before the content.
- `afterElement` (ReactNode): Specifies the component placed after the content.
- `closable` (boolean): Specifies if the close button will be visible.
- `closeIcon` (ReactNode): Specifies Specifies the component representing the close icon.
- `size` ("x-small" | "small" | "medium" | "large"): Specifies the size of the frame.
- `rounded` ("none" | "small" | "medium" | "full"): Specifies the border radius of the frame.
- `border` ("none" | "thin" | "medium"): Specifies the border size of the frame.
- `variant` ("default" | "blue" | "red" | "blue-outline" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onClick` (function): Fires when the button is clicked.
- `onClickClose` (function): Fires when the close button is clicked.

##### Sample CSS customization

```css
.variant-blue-translucent {
    --fg-color: #567FEF;
    --bg-color: rgba(86, 127, 239, 0.2);
    --close-bg-color: rgba(86, 127, 239, 0.2);
    --border-color: rgba(86, 127, 239, 0.5);
}
```

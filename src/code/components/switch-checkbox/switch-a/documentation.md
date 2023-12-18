##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed as label of the component.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.
- `initialChecked` (boolean): Specifies if it is initially checked.

- `variant` ("default" | "m3" | "blue" | "green" | "ios" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onToggle` (function (checked: boolean) => void ): Fires when the component checked status change.

##### Sample CSS customization

```css
.variant-ios {
    --width: 3.25rem;
    --height: 2rem;
    --switch-width: 1.75rem;
    --on-bg-color: #00d85b;
}
```

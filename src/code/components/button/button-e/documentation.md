##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.
- `type` ("button" | "submit" | "reset" | "link"): Specifies the type of the button.
- `iconElement` (ReactNode): Specifies the icon component.
- `iconPosition` ("left" | "right"): Specifies the position of the icon relative to the text.
- `size` ("x-small" | "small" | "medium" | "large"): Specifies the size of the button.
- `width` ("auto" | "full"): Specifies the width of the button. "full" will make the button occupy 100% of the width of the parent and "auto" will set the width of the button to the width of the content.
- `height` ("auto" | "medium" | "large"): Specifies the height of the button.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.
- `shadow` ("none" | "medium"): Specifies the size of the shadow of the frame.

- `variant` ("default" | "purple" | "light-blue" | "red" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onClick` (function): Fires when the button is clicked.

##### Sample CSS customization

```css
.variant-red {
    --fg-color: white;
    --bg-color: rgb(240, 13, 62);
    --shadow-color: rgb(252, 57, 99);
}
```

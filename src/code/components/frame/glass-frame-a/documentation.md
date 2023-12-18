##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `title` (string or ReactNode): Specifies the text that will be used as the title.
- `shadow` ("default" | "small" | "medium"): Specifies the size of the shadow of the frame.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `hoverAnimation` ("none" | "shadow" ): animation on hoverA.
- `variant` ("default" | "flat" | "dark" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### Sample CSS customization
```css
.variant-dark {
    --bg-color: rgba(0, 0, 0, 0.2);
    --border-color: rgba(0, 0, 0, 0.1);
}
```

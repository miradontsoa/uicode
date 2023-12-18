##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.

- `imageSrc` (string): Specifies the URL of the image.
- `title` (string or ReactNode): Specifies the text or element that will be used as the title.
- `size` ("x-small" | "small" | "medium" | "large" | "x-large" | "full"): Specifies the size of the component.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.
- `borderSize` ("none" | "small" | "medium"): Specifies the border stroke.
- `borderColor` ("white" | "black" | "green" | "gradient" or a customized value): Specifies the border color.
- `imageRounded` ("default" | "none" | "small" | "medium" | "large"): Specifies the border radius of the image. 

- `labelColor` ("none" | "green" | "red"): Specifies the color of the label.
- `labelElement` (ReactNode): Specifies the child element of the label.
- `labelPosition` ("top-right" | "top-left" | "bottom-right" | "bottom-left"): Specifies position of the label, placed at the bottom right by default.
- `labelSize` ("xx-small" | "x-small" | "small" | "medium" | "large"): Specifies size of the label.

- `variant` ("default" | "blue" | "orange" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

##### Sample CSS customization

```css
.c-blue {
    --bg-color: #95beff;
    --fg-color: #2962b8;
}
```

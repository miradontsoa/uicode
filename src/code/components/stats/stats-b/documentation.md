##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.
- `imageSrc` (string): Specifies the URL of the image.
- `aspect` ("auto" | "square"): Specifies the aspect ratio of the frame.
- `horizontalAlign` ("left" | "start" | "center" | "right" | "end"): Specifies the horizontal alignment of the content.
- `verticalAlign` ("top" | "center" | "bottom"): Specifies the vertical alignment of the content.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `variant` ("default" | "gradient-orange" | "gradient-blue" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `actions` (Array of ActionType): Specifies the action buttons placed on the top of the component.

##### ActionType item arguments

- `icon` (ReactNode): Specifies the action icon component.
- `title` (string): Specifies the action title text.
- `showTitle` (boolean): Show of hide title.
- `onClick` (function): Fires when the action button is clicked.

##### Sample CSS customization

```css
.variant-gradient-blue {
    --fg-color: #ffffff;
    --bg-color: #2a57fa;
}

.variant-gradient-blue  {
    background: linear-gradient(to top right, #2a57fa, #5ab8ff);
}
```

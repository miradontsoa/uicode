##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `href` (string): Specifies the URL if the component is a link.
- `icon` (ReactNode): Specifies the icon component.
- `viewText` (string): Specifies the text of the view button.
- `viewIcon` (ReactNode): Specifies the icon of the view button.
- `type` ("button" | "link"): Specifies the type of the component.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `horizontalAlign` ("left" | "start" | "center" | "right" | "end"): Specifies the horizontal alignment.
- `verticalAlign` ("top" | "center" | "bottom"): Specifies the vertical alignment.
- `variant` ("default" | "gradient-orange" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onClick` (function): Fires when component is clicked.

##### Sample CSS customization

```css
.variant-gradient-orange {
  --fg-color: #ffffff;
  --bg-color: #fa7d2a;
}

.variant-gradient-orange .content {
  background: linear-gradient(to top right, #e64441, #fece36);
}
```

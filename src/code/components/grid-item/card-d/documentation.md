##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `href` (string): Specifies the URL if the component is a link.
- `viewIcon` (ReactNode): Specifies the view icon component.
- `actionIcon` (ReactNode): Specifies the action icon component placed on top.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `variant` ("default" | "dark" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onClickAction` (function): Fires when the action button is clicked.

##### Sample CSS customization

```css
.variant-dark{
    --fg-color: #ffffff;
    --bg-color: rgba(56, 56, 56, 0.5);
}
```

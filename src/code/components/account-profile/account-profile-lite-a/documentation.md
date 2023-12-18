##### Properties
Props of the component:
- `className` (string): Specifies the CSS class of the element.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string or ReactNode): Specifies the text or element that will be used as the title.
- `description` (string or ReactNode): Specifies the text or element that will be used as the description.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `actionIcon` (ReactNode): Specifies the action icon element.
- `imageRounded` ("default"  | "none" | "small" | "medium" | "large"): Specifies the border radius of the image.
- `variant` ("default" | "card" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.
- `onClickAction` (function): Fires when the action button is clicked.

##### Sample CSS customization

```css
.variant-card {
    --bg-color: white;
    --padding: 0.5rem;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
        0px 2px 4px -1px rgba(0, 0, 0, 0.2);
}
```
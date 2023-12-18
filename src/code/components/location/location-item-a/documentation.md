##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `href` (string): Specifies the URL if the component is a link.
- `details` (array of DetailType): Specifies detail information about the location.
- `actionIcon` (ReactNode): Specifies the icon component of the action button.
- `type` ("button" | "link"): Specifies the type of the component.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `imageRounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the image.
- `variant` ("default" | "simple" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onClickAction` (function): Fires when the action button is clicked.

##### ActionType item arguments

- `title` (string): Specifies the title text.
- `icon` (string): Specifies the icon component.
- `onClick` (function): Fires when the item is clicked.

##### Sample CSS customization

```css
.variant-simple {
    --bg-color: transparent;
    --padding: 0px;
    --primary: #d8571b;
    --detail-button-color: var(--primary);
    box-shadow: none;
}
.variant-simple .title{
    color: var(--primary);
}
```

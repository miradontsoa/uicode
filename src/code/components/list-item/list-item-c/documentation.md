##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string): Specifies the text that will be used as the title.
- `subTitle` (string or ReactNode): Specifies the text or component that will be used as the subtitle.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `href` (string): Specifies the URL if the component is a link.
- `actionIcon` (ReactNode): Specifies the action icon component placed on top.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `imageRounded` ("default" | "none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the image.
- `variant` ("default" | "simple" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `footerLeftActions` (Array of ActionType): Specifies the action buttons placed on the left side of the component's footer.
- `footerRightActions` (Array of ActionType): Specifies the action buttons placed on the right side of the component's footer.
- `onClickAction` (function): Fires when the action button is clicked.

##### ActionType item arguments

- `icon` (ReactNode): Specifies the action icon component.
- `title` (string): Specifies the action title text.
- `showTitle` (boolean): Show or hide title.
- `onClick` (function): Fires when the action button is clicked.

##### Sample CSS customization

```css
.variant-simple {
    --bg-color: transparent;
    box-shadow: none;
    --padding: 0px;
}
.variant-simple .text-content{
    margin-top: 0.125rem;
}
```

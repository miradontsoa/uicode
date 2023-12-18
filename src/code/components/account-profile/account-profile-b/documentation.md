##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `actionTopIcon` (ReactNode): Specifies the action icon component placed on top.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `imageRounded` ("default" | "none" | "small" | "medium" | "large"): Specifies the border radius of the image.
- `footerLeftActions` (Array of ActionType): Specifies the action buttons placed on the left side of the component's footer.
- `footerRightActions` (Array of ActionType): Specifies the action buttons placed on the right side of the component's footer.
- `variant` ("default" | "simple" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onClickActionTop` (function): Fires when the action button is clicked.

##### ActionType item arguments

- `icon` (ReactElement): Specifies the action icon element.
- `title` (string): Specifies the action title text.
- `showTitle` (boolean): Show or hide title.
- `onClick` (function): Fires when the action button is clicked.

##### Sample CSS customization

```css
.variant-simple {
  --bg-color: transparent;
  --padding: 0px;
  --action-button-size: 1.25rem;
  --footer-padding-y: 0.5rem;
  --footer-padding-x: 0rem;
  box-shadow: none;
}

.variant-simple .body-content {
  margin-top: 0.5rem;
}

.variant-simple .footer {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
}
```

##### Properties

Props of the component:

- `buttons` (Array of ButtonItemType): Specifies the buttons of the group. A button item is a ButtonItemType (see below).
- `className` (string): Specifies the CSS class of the component.
- `size` ("x-small" | "small" | "medium" | "large"): Specifies the size of the buttons.
- `width` ("fit" | "full"): Specifies the width of the button group. "full" will make the button occupy 100% of the width of the parent and "fit" will set the width of the button group to the width of the content.
- `gap` ("none" | "small" | "medium"): Specifies the gap between buttons.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.

- `variant` ("default" | "light" | "dark" | "blue" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

##### ButtonItemType item arguments

- `className` (string): Specifies the CSS class of the button.
- `style` (CSSProperties): Specifies the CSS properties of the button.
- `type` ("button" | "submit" | "reset" | "link" | "static"): Specifies the type of the button. "button", "submit" and "reset" will render a `button` HTML element, "link" will render `a` HTML element, and "static" will render it a `span`.
- `href` (string): Specifies the url of the button if it is a link.
- `icon` (ReactNode): Specifies the icon component.
- `content` (string): Specifies the title text.
- `iconOnly` (boolean): Show only the icon.
- `iconPosition` ("before-text" | "after-text"): Specifies if the icon will be placed after of before the text content.
- `variant` ("default" | "light" | "dark" | "blue" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.
- `onClick` (function): Fires when the button is clicked.

##### Sample CSS customization

Sample customization for color="blue" or button item color:"blue".

```css
.btn-color-blue {
    --btn-fg-color: #567FEF;
    --btn-bg-color: transparent;
    --btn-hover-fg-color: #567FEF;
    --btn-hover-bg-color: rgba(86, 127, 239, 0.17);
}
```

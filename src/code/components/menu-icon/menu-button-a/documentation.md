##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `initialIsOpen` (boolean): Specified if the icon is in the open state by default.
- `size` ("small" | "medium" | "large"): Specifies the size of the icon.
- `variant` ("default" | "style-a" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onIsOpen` (function): Fires when the button is in the open state.

##### Sample CSS customization

```css
.c-style-a{
    --bar-height: 4px;
    --fg-color: #2e35ee;
    --border-color: transparent;
}
```

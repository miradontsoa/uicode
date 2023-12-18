##### Properties

Props of the component:

- `items` (Array of ItemType): Specifies the items of the breadcrumbs component.
- `className` (string): Specifies the CSS class of the component.
- `separator` ("bar" | "arrow" | "circle"): Specifies the appearance separator.
- `separatorElement` (ReactNode): Specifies the component for the separator. It overwrites the `separator` prop.
- `highlightLastItem` (boolean): Highlight the last item.
- `size` ("small" | "medium" | "large"): Specifies the text size.
- `variant` ("default" | "blue" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

##### ItemType item arguments

- `slug` (string): Specifies the slug of the item.
- `icon` (ReactNode): Specifies the icon component.
- `title` (ReactNode): Specifies the title text.
- `href` (string): Specifies the url of the item.
- `iconOnly` (boolean): Show only the icon.
- `active` (boolean): Set item as active.

##### Notes

You may need to replace the `<a ...>` element with a `Link` if you use Next or Remix.

##### Sample CSS customization

```css
.variant-blue {
    --fg-color: #567FEF;
    --separator-color: #303030;
    --hover-fg-color: rgba(86, 127, 239, 0.5);
}
```

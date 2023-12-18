##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `categories` (Array of CategoryType): Specifies the categories to select.
- `initialCategorySlug` (string): Specifies the default selected item slug.
- `size` ("small" | "medium" | "large"): Specifies the size of the component.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of each item frame.
- `variant` ( "default" | "black" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onSelectCategory` (function): Fires when an item is clicked.

##### CategoryType item arguments

- `slug` (string): Specifies the reference slug text.
- `title` (string or ReactNode): Specifies the item title text.

##### Sample CSS customization

```css
.variant-black {
  --active-bg-color: #1d1d1d;
}
```

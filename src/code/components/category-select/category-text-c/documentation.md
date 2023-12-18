##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `categories` (Array of CategoryType): Specifies the categories to select.
- `initialCategorySlug` (string): Specifies the default selected item slug.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of each item frame.
- `variant` ("default" | "style-2" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onSelectCategory` (function): Fires when an item is clicked.

##### CategoryType item arguments

- `slug` (string): Specifies the reference slug text.
- `title` (string or ReactNode): Specifies the item title text.
- `imageSrc` (string): Specifies the URL of the image.

##### Sample CSS customization

```css
.variant-style-2 {
    --active-bg-color: #b0a5f7;
    --fg-color: #313131;
    --bg-color: transparent;
}

.variant-style-2 .category-item {
    box-shadow: none;
}
.variant-style-2 .category-item.active,
.variant-style-2 .category-item:active,
.variant-style-2 .category-item:hover {
    --fg-color: #2c1e88;
}
```

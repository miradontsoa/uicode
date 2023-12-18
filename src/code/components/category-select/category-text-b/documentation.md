##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `categories` (Array of CategoryType): Specifies the categories to select.
- `initialCategorySlug` (string): Specifies the default selected item slug.
- `size` ("small" | "medium" | "large"): Specifies the size of the component.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of each item frame.
- `variant` ("default" | "red" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

- `onSelectCategory` (function): Fires when an item is clicked.

##### CategoryType item arguments

- `slug` (string): Specifies the reference slug text.
- `title` (string or ReactNode): Specifies the item title text.
- `imageSrc` (string): Specifies the URL of the image.

##### Sample CSS customization

```css
.variant-red {
    --active-bg-color: #f01a50;
    --bg-color: transparent;
}

.variant-red .category-item {
    box-shadow: 0px 0px 0px 1px rgba(29, 29, 29, 0.31);
}

.variant-red .category-item.active,
.variant-red .category-item:active,
.variant-red .category-item:hover {
    box-shadow: 0px 0px 0px 1px var(--active-bg-color);
}
```

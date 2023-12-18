##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string): Specifies the text that will be used as the title.
- `category` (string): Specifies the text that will be used as the category.
- `price` (string): Specifies the text that will be used as the price.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `href` (string): Specifies the URL if the component is a link.
- `align` ("start" | "center"): Specifies the horizontal alignment of the text.
- `variant` ("default" | "green" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onClickAddToCart` (function): Fires when the add to cart button is clicked.

##### Sample CSS customization

```css
.variant-green {
  --fg-color: #08a087;
}

.variant-green .btn {
  background-color: var(--fg-color);
  color: #ffffff;
}
```

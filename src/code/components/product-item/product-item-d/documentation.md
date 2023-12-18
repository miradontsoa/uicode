##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string): Specifies the text that will be used as the title.
- `category` (string): Specifies the text that will be used as the category.
- `price` (string): Specifies the text that will be used as the price.
- `rating` (string): Specifies the text that will be used as the string.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `tags` (array of string): Specifies text tags.
- `href` (string): Specifies the URL if the component is a link.
- `detailButtonText` (string): Specifies the "details" button.
- `addToCartButtonText` (string): Specifies the "add to cart" button.
- `isFavorite` (boolean): Specifies the item is marked as favorite.
- `iconFavoriteOn` (ReactNode): Specifies the "favorite on" icon component.
- `iconFavoriteOff` (ReactNode): Specifies the "favorite off" icon component.
- `variant` ("default" | "light" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onClickAddToCart` (function): Fires when the add to cart button is clicked.
- `onClickFavorite` (function): Fires when the favorite button is clicked.

##### Sample CSS customization

```css
.variant-light {
  --fg-color: white;
  --image-border-radius: 1rem;
  --button-fg-color: rgb(56, 56, 56);
  --button-bg-color: rgb(255, 255, 255);
  --button-hover-bg-color: rgb(228, 228, 228);
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
}
.variant-light .btn-text{
  text-shadow: none;
}
```

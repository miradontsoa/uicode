##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string): Specifies the text that will be used as the title.
- `category` (string): Specifies the text that will be used as the category.
- `price` (string): Specifies the text that will be used as the price.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `tags` (array of string): Specifies text tags.
- `categorySelectElement` (ReactNode): Specifies the category select component.
- `href` (string): Specifies the URL if the component is a link.

- `buyButtonText` (string): Specifies the "buy" button.
- `addToCartButtonText` (string): Specifies the "add to cart" button.
- `isFavorite` (boolean): Specifies the item is marked as favorite.
- `iconFavoriteOn` (ReactNode): Specifies the "favorite on" icon component.
- `iconFavoriteOff` (ReactNode): Specifies the "favorite off" icon component.
- `variant` ("default" | "dark" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onClickAddToCart` (function): Fires when the add to cart button is clicked.
- `onClickFavorite` (function): Fires when the favorite button is clicked.

##### Sample CSS customization

```css
.variant-dark {
  --bg-color: rgba(56,56,56);
  --fg-color: rgb(255, 255, 255);
  --button-bg-color: rgb(255, 255, 255);
  --button-fg-color: rgb(56, 56, 56);
  --button-hover-bg-color: rgb(200, 200, 200);
}
```

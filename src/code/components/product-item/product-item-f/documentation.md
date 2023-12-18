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
- `buyButtonText` (string): Specifies the "buy" button.
- `isFavorite` (boolean): Specifies the item is marked as favorite.
- `iconFavoriteOn` (ReactNode): Specifies the "favorite on" icon component.
- `iconFavoriteOff` (ReactNode): Specifies the "favorite off" icon component.
- `withItemCount` (boolean): Show or hide the item count number and related control buttons.
- `iconAdd` (ReactNode): Specifies the add icon component.
- `iconMinus` (ReactNode): Specifies the minus icon component.
- `iconRemove` (ReactNode): Specifies the remove icon component.
- `variant` ("default" | "simple" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onClickBuy` (function): Fires when the buy button is clicked.
- `onClickFavorite` (function): Fires when the favorite button is clicked.

##### Sample CSS customization

```css
.variant-simple {
  --padding: 0px;
  --bg-color: transparent;
  --image-border-radius: 1rem;
  box-shadow: none;
}
.variant-simple:hover .image{
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 8px 16px -4px rgba(0, 0, 0, 0.2);
}
```

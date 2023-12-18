##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string): Specifies the text that will be used as the title.
- `category` (string or ReactNode): Specifies the text that will be used as the category.
- `price` (string or ReactNode): Specifies the text that will be used as the price.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `align` ("start" | "center"): Specifies the horizontal alignment of the text.
- `variant` ("default" | "fashion" | "tech" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it. 

##### Sample CSS customization

```css
.variant-fashion{
  --label-bg-color: #9c7114;
}
.variant-fashion .title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.5rem;
}

.variant-fashion .price {
  color: #9c7114;
}
```

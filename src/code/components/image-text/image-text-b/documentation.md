##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `imageClassName` (string): Specifies the CSS class of the image.
- `imageSize` ("small" | "medium" | "large"): Specifies the size of the image.
- `alt` (string): Specifies the text that will be used as the alt attribute of the image.
- `textContent` (string or ReactNode): Specifies the text content.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the images.
- `variant` ("default" | "dark" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.


##### Sample CSS customization

```css
.variant-dark{
    --fg-color: #424242;
}
.variant-dark .text-wrapper{
    width: 100%;
    text-shadow: 0px 0.25rem 0.5rem rgba(255, 255, 255, 0.2) ;
}
```

##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `title` (string or ReactNode): Specifies the text that will be used as the title.
- `alt` (string): Specifies the text that will be used as the alt attribute of the image.
- `src` (string): Specifies the URL of the image.
- `aspect` ("default" | "square" | "portrait" | "landscape"): Specifies the aspect ratio of the frame.
- `imageAspect` ("square" | "portrait" | "landscape"): Specifies the aspect ratio of the image.
- `shadow` ("small" | "medium"): Specifies the size of the shadow of the frame.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `imageRounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the image.
- `variant` ("default" | "red" | "card" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### Sample CSS customization

```css
.variant-red {
    border: none;
    background-image: linear-gradient(to top right, #8d2164, #f83333);
}
```

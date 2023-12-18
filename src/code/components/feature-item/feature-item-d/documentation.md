##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode placed inside the component.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `subTitle` (string or ReactNode): Specifies the text or component that will be used as the subtitle.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `imageSrc` (string): Specifies the URL of the image.
- `imageAspect` ("default" | "square" | "portrait"): Specifies the aspect ratio of the image.
- `imageRounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the image.
- `icon` (ReactNode): Specifies the main icon component.
- `secondaryIcon` (ReactNode): Specifies the secondary icon component.
- `href` (string): Specifies the URL if the component is a link.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `shadow` ("none" | "medium"): Specifies the size of the shadow of the frame.
- `variant` ("default" | "red" | "simple" | "blue" | "blue-white" | "blue-simple" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### Sample CSS customization

```css
.variant-blue {
    --bg-color: #632aff;
    --fg-color: rgba(255, 255, 255, 0.6);
    padding: 2rem;
}

.variant-blue .title {
    color: rgba(255, 255, 255, 1);
}
```

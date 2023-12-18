##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `callToActionText` (string): Specifies the call to action text.
- `callToActionElement` (ReactNode): Specifies the component used as the call to action.
- `price` (string or ReactNode): Specifies the price.
- `priceUnit` (string or ReactNode): Specifies the price unit.
- `features` (array of FeatureType): Specifies the feature list.
- `availableIcon` (ReactNode): Specifies the icon component of the available feature.
- `unavailableIcon` (ReactNode): Specifies the icon component of the unavailable feature.
- `href` (string): Specifies the URL if the component is a link.
- `align` ("start" | "center" | "end"): Specifies the horizontal alignment of the content.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `shadow` ("small" | "medium"): Specifies the size of the shadow of the frame.
- `variant` ("default" | "red" | "card" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### FeatureType item arguments

- `title` (string): Specifies the title text.
- `unavailable` (boolean): Specifies if this feature is available or not.

##### Sample CSS customization

```css
.variant-red {
    --fg-color: rgb(255, 255, 255);
    --highlight-color: rgb(255, 255, 255);
    --bg-color: rgb(240, 13, 62);
    background-image: linear-gradient(to top right, #632aff, #f00d3e);
    box-shadow: inset 0px 0px 2px 0px var(--shadow-color);
}
```

##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `imageText` (string or ReactNode): Specifies the text or component that will be placed above the image.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `price` (string or ReactNode): Specifies the price.
- `href` (string): Specifies the URL if the component is a link.
- `location` (string or ReactNode): Specifies location details.
- `locationIcon` (string or ReactNode): Specifies the icon representing the location.
- `roomsInformation` (string or ReactNode): Specifies room details.
- `roomsInformationIcon` (string or ReactNode): Specifies the icon representing the room information.
- `buildingInformation` (string or ReactNode): Specifies building details.
- `buildingInformationIcon` (string or ReactNode): Specifies the icon representing the building information.
- `rating` (string or ReactNode): Specifies the text that will be used as the string.
- `ratingIcon` (string or ReactNode): Specifies the icon representing the rating.
- `rounded` ("none" | "small" | "medium" | "large"): Specifies the border radius of the frame.
- `variant` ("default" | "simple" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `footerLeftActions` (Array of ActionType): Specifies the action buttons placed on the left side of the component's footer.
- `footerRightActions` (Array of ActionType): Specifies the action buttons placed on the right side of the component's footer.

##### ActionType item arguments

- `title` (string): Specifies the title text.
- `icon` (string): Specifies the icon component.
- `showTitle` (boolean): Show or hide the title.
- `iconPosition` ("left" | "right"): Specifies the position of the icon relative to the text.
- `onClick` (function): Fires when the item is clicked.

##### Sample CSS customization

```css
.variant-simple {
    --bg-color: transparent;
    --padding: 0px;
    --gap: 1.5rem;
    --image-border-radius: 1rem;
    --action-button-size: 1.25rem;
    --footer-padding-y: 0.5rem;
    --footer-padding-x: 0rem;
    box-shadow: none;
}
```

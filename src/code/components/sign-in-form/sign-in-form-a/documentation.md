##### Dependencies
This component needs the [input container InputContainerA](/components/input/input-container-a) and [Button A](/components/button/button-a) components.

##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `signInButtonText` (string or ReactNode): Specifies the subscribe button text.
- `emailPlaceholder` (string): Specifies the email placeholder text.
- `emailIcon` (string or ReactNode): Specifies the email icon.
- `passwordPlaceholder` (string): Specifies the password placeholder text.
- `passwordIcon` (string or ReactNode): Specifies the password icon.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.
- `variant` ("default" | "simple" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onSubmit` (Array of ActionType): Fires when the sign in form is submitted.

##### Sample CSS customization
```css
.variant-simple {
    --bg-color: transparent;
    --padding: 0px;
    box-shadow: none;
}

.variant-simple .title {
    margin-top: 0rem;
}
.variant-simple .desc {
    margin-left: 0rem;
    margin-right: 0rem;
}

```

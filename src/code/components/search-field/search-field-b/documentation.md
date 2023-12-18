##### Dependencies
This component needs the [input container InputContainerA](/components/input/input-container-a) component.

##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `searchButtonText` (string or ReactNode): Specifies the search button text.
- `searchButtonIcon` (string or ReactNode): Specifies the search button icon.
- `beforeElement` (string or ReactNode): Specifies the component placed before the search input.
- `placeholder` (string or ReactNode): Specifies the placeholder text.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.
- `variant` ("default" | "style-a" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `onSearch` (Array of ActionType): Fires when the search form is submitted.

##### Sample CSS customization

```css
.variant-style-a .search-btn {
    --search-button-height: 3rem;
    background-color: #383838;
    color: #ffffff;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.variant-style-a .search-btn.icon-only {
    padding: 0;
}

```

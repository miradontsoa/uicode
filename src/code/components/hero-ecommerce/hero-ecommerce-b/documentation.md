##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `variant` ("default" | "style-a" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### Sample CSS customization
```css
.variant-style-b.section {
    --bg-color: #000000;
    --fg-color: #FFFFFF;
    --content-bg-color: transparent;
    --btn-fg-color: #303030;
    --btn-bg-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    text-align: center;
}

@media screen and (min-width:1024px) {
    .variant-style-b.section {
        --padding-y: 5rem;
    }
}

.variant-style-b .bg-image {
    opacity: 0.75;
}

.variant-style-b .content {
    border: 0.75rem solid var(--fg-color);
}

.variant-style-b .btns-group {
    margin-top: 2rem;
}

.variant-style-b .button {
    text-transform: uppercase;
    min-height: 3.5rem;
    padding: 0.25em 2em;
    letter-spacing: 0.05em;
}
```

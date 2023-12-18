##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `variant` ("default" | "style-a" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.

##### Sample CSS customization
```css
.variant-style-a.section {
    align-items: flex-end;
    justify-content: center;
    text-align: center;
}

@media screen and (min-width:1024px) {
    .variant-style-a.section {
        --padding-y: 5rem;
    }
}

.variant-style-a .heading-1{
    font-family: 'Times New Roman', Times, serif;
}
@media screen and (min-width:1024px) {
    .variant-style-a .heading-1 {
        font-size: 4rem;
    }
}
.variant-style-a .btns-group {
    margin-top: 2rem;
}
 
.variant-style-a .button{
    text-transform: uppercase;
    min-height: 3.5rem;
    padding: 0.25em 2em;
    letter-spacing: 0.05em;
}  --bg-color: #EBF0FF;
```

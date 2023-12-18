##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `children` (ReactNode): React children of the component. Specifies the ReactNode such as text placed inside the component.
- `headerIconElement` (ReactNode): Specifies the icon component placed horizontally at the start of the header.
- `headerStartElement` (ReactNode): Specifies the component placed horizontally at the start of the header (left in LTR mode or left on RTL mode).
- `headerCenterElement` (ReactNode): Specifies the component placed horizontally at the center of the header.
- `headerEndElement` (ReactNode): Specifies the component placed horizontally at the end of the header (right in LTR mode or right on RTL mode).
- `headerElement` (ReactNode): Specifies the component placed inside the header.
- `footerStartElement` (ReactNode): Specifies the component placed horizontally at the start of the footer (left in LTR mode or left on RTL mode).
- `footerCenterElement` (ReactNode): Specifies the component placed horizontally at the center of the footer.
- `footerEndElement` (ReactNode): Specifies the component placed horizontally at the end of the footer (right in LTR mode or right on RTL mode).
- `footerElement` (ReactNode): Specifies the component placed inside the footer.
- `size` ( "small" | "medium" | "large"): Specifies the size of the component.
- `padding` ("none" | "small" | "medium" | "large"): Specifies the padding of the block.
- `variant` ("default" | "dark" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

##### Sample CSS customization

```css
/* color="dark" */
.variant-dark {
    --fg-color: #ffffff;
    --icon-color: #ffffff;
    --border-color: rgba(200, 200, 200, 0.1);
}
```

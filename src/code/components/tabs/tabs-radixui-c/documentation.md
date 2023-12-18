##### Requirements

It uses Radix UI tabs (`@radix-ui/react-tabs`) so, you need to install it first:

```shell
npm install @radix-ui/react-tabs
```

##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `tabs` (Array of TabsItemType): Specifies the tabs and their related content.
- `defaultValue` ( string): Specifies the slug of the value of the selected tab by default.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the frame.
- `shadow` ("none" | "small" | "medium"): Specifies the shadow of the frame.

- `variant` ("default" | "blue-outline" | "gray" or a customized value): Specifies the color or theme variant of the component. See the "Sample CSS customization" below for an example of usage.

##### TabsItemType item arguments

- `slug` (string): Specifies the reference slug text for a tab item.
- `title` (React.ReactNode): Specifies the title text on the trigger button.
- `content` (React.ReactNode): Specifies the content of the tab.
- `icon` (ReactElement): Specifies the icon element.

##### Sample CSS customization

```css
/* color="style-b" */
.variant-style-b .tabs-trigger::before {
    background: linear-gradient(to bottom, #DEDEDE, #FFFFFF);
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.17);
}
```

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
/* color="color-marked-circle" */
.variant-marked-circle {
    --trigger-border-width: 0.5rem;
}

.variant-marked-circle .tabs-trigger::before {
    left: 50%;
    right: 35%;
    width: var(--trigger-border-width);
    height: var(--trigger-border-width);
    transform: translateX(-50%) scale(0.5);
    transition: 0.3s;
    opacity: 0;
}

.variant-marked-circle .tabs-trigger[data-state='active']::before {
    left: 50%;
    transform: translateX(-50%) scale(1);
    opacity: 1;
}
```

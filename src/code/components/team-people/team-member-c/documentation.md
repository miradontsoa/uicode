##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `imageSrc` (string): Specifies the URL of the image.
- `title` (string or ReactNode): Specifies the text or component that will be used as the title.
- `description` (string or ReactNode): Specifies the text or component that will be used as the description.
- `href` (string): Specifies the URL if the component is a link.
- `verticalAlign` ( "start" | "center"): Specifies the vertical alignment of the content.
- `socialsAlign` ("left" | "start" | "center" | "right" | "end"): Specifies the horizontal alignment of the social network links.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of the image.
- `variant` ("default" | "dark" | "card" or a customized value): Specifies the color or theme variant of the component. Check out the "Sample CSS customization" below for an example of how to use it.
- `footerSocials` (array of SocialType): Specifies the social network links.

##### SocialType item arguments

- `icon` (ReactNode): Specifies the action icon component.
- `title` (string): Specifies the action title text.
- `href` (string): Specifies the URL to the user profile.
- `showTitle` (boolean): Show or hide title.

##### Sample CSS customization

```css
.variant-card {
    --bg-color: white;
    --padding: 0.75rem;
    --body-margin-x: 0.5rem;
    --body-margin-y: 1rem;
    /* padding-bottom: calc(var(--body-margin-y) - var(--padding)); */
    padding-bottom: var(--body-margin-y);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
        0px 2px 4px -1px rgba(0, 0, 0, 0.2);
}
```

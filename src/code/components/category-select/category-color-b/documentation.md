##### Properties

Props of the component:

- `className` (string): Specifies the CSS class of the component.
- `colors` (Array of ColorType): Specifies the colors to select.
- `initialColorSlug` (string): Specifies the default selected color slug.
- `size` ("small" | "medium" | "large"): Specifies the size of the component.
- `rounded` ("none" | "small" | "medium" | "large" | "full"): Specifies the border radius of each color frame.

- `onSelectColor` (function): Fires when a color is clicked.

##### ColorType item arguments

- `slug` (string): Specifies the reference slug text.
- `title` (string): Specifies the item title text.
- `rgb` (string): Specifies the rgb color value.

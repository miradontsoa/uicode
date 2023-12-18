---
title: CSS Gradient text
description: "Use gradient color as text color and add color animation."
date: Oct 30 2022
categories: CSS, Tutorial
image: /img/css-text-gradient/image.jpg
author: Mirado Andria
---

Surely you have seen somewhere a landing page or a website that uses a gradient color as text color, as follows:

<div class='figure-blog-small'>

![Result text gradient](/img/css-text-gradient/result.png)

</div>

In this tutorial, I'll show you how to do it and how to add a color animation when the user hovers over the text.

# HTML Structure

Here is the basic structure in HTML:

```html
<h2 class="text-gradient">Buy our great product!</h2>
```

As you can see, we've added the `text-gradient` class to the affected element.

# CSS

Here are the CSS rules we apply to this element:

```css
.text-gradient {
  background: linear-gradient(to bottom right, #05dbf2, #7d17d1);
  background-size: cover;
  background-position: center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 4rem;
  line-height: 1.2;
  transition: 0.3s;
}
```

- The `background` property with `linear-gradient` value defines the background image of the element (By the way, you can use an image here).
- The `-webkit-background-clip: text;` declaration cuts the background image according to the shape of the text.
- The `variant` property with `transparent` value makes the text color transparent and then only the background image will be visible.

### Animation

The following CSS adds filter (changes the tint value in this example) to the element when user hovers over it.

```css
.text-gradient:hover {
  filter: hue-rotate(30deg);
}
```

### Practice

As an extension or improvement of the project, you can try to use an image as background. You can also experiment with the `@property` CSS at-rule for the animation such as:

```css
@property --color-start {
  syntax: "<color>";
  inherits: false;
  initial-value: #05dbf2;
}

@property --color-end {
  syntax: "<color>";
  inherits: false;
  initial-value: #7d17d1;
}

.text-gradient {
  background: linear-gradient(
    to bottom right,
    var(--color-start),
    var(--color-end)
  );
  background-size: cover;
  background-position: center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: --color-end 0.3s, --color-start 0.3s;
  font-size: 4rem;
  line-height: 1.2;
}

.text-gradient:hover {
  --color-start: #7d17d1;
  --color-end: #05dbf2;
}
```

I hope you liked this mini-tutorial.

### Source

You can find the [source code here.](https://github.com/miradontsoa/mirado-blog-demo/tree/main/css/css-text-gradient)



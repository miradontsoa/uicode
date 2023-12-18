import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import MenuIconAExample from "@/code/components/menu-icon/menu-icon-a/example-wrapper";
import MenuIconBExample from "@/code/components/menu-icon/menu-icon-b/example-wrapper";
import MenuIconCExample from "@/code/components/menu-icon/menu-icon-c/example-wrapper";

const menuIconComponents: ComponentItem[] = [
  {
    slug: "menu-icon-a",
    title: "Menu Icon A",
    access: "any",
    shortDesc: "Menu button icon.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Menu button icon.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A37&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "menu-icon-b", // two lines hamburger menu
    title: "Menu Icon B",
    access: "any",
    shortDesc: "Menu button icon.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Menu button icon.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A37&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "menu-icon-c", // three lines (1st and 3rd bars half) hamburger menu
    title: "Menu Icon C",
    access: "any",
    shortDesc: "Menu button icon.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Menu button icon.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A37&t=HSsDXGexK0KThPA3-1",
  },
  /* {
    slug: "menu-icon-d", // three dots menu icon
    title: "Menu Icon D",
    access: "any",
    shortDesc: "Menu button icon.",
    bgClass: "bg-gradient-gray-light",
    description: "Menu button icon.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A37&t=HSsDXGexK0KThPA3-1",
  }, */
];

const menuIconPreviews: ComponentPreviews = {
  "menu-icon-a": <MenuIconAExample />,
  "menu-icon-b": <MenuIconBExample />,
  "menu-icon-c": <MenuIconCExample />,
};

export const menuIconCategory: ComponentCategory = {
  slug: "menu-icon",
  title: "Menu Icon",
  description: "Animated menu icon components",
  seo: "Animated menu icon components",
  components: menuIconComponents,
  previews: menuIconPreviews,
};

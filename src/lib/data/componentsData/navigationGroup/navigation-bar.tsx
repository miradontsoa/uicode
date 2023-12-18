import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import NavigationBarAExample from "@/code/components/navigation-bar/navigation-bar-a/example-wrapper";
import NavigationBarBExample from "@/code/components/navigation-bar/navigation-bar-b/example-wrapper";
import NavigationBarCExample from "@/code/components/navigation-bar/navigation-bar-c/example-wrapper";
import NavigationBarDExample from "@/code/components/navigation-bar/navigation-bar-d/example-wrapper";

const navigationBarComponents: ComponentItem[] = [
  {
    slug: "navigation-bar-a",
    title: "Navigation A",
    access: "any",
    shortDesc: "Navigation menu, Bottom bar",
    previewBgClass: "bg-gradient-gray-light",
    description: "Navigation menu, menu bar, bottom navigation bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A34&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "navigation-bar-b",
    title: "Navigation B",
    access: "premium",
    shortDesc: "Navigation menu, Bottom bar",
    previewBgClass: "bg-gradient-gray-light",
    description: "Navigation menu, menu bar, bottom navigation bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A34&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "navigation-bar-c",
    title: "Navigation C",
    access: "premium",
    shortDesc: "Navigation menu, Bottom bar",
    previewBgClass: "bg-gradient-gray-light",
    description: "Navigation menu, menu bar, bottom navigation bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A34&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "navigation-bar-d",
    title: "Navigation D",
    access: "premium",
    shortDesc: "Navigation menu, Bottom bar",
    previewBgClass: "bg-gradient-gray-light",
    description: "Navigation menu, menu bar, bottom navigation bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A34&t=HSsDXGexK0KThPA3-1",
  },
  /* {
    slug: "navigation-e",
    title: "Navigation E",
    shortDesc: "Navigation menu, bar",
    bgClass: "bg-gradient-green-light",
    description:
      "This is a short description of this item. Replace it with sentence like the following: you can use it as a list of an item or a a product varient card.",
  }, */
];

const navigationBarPreviews: ComponentPreviews = {
  "navigation-bar-a": <NavigationBarAExample />,
  "navigation-bar-b": <NavigationBarBExample />,
  "navigation-bar-c": <NavigationBarCExample />,
  "navigation-bar-d": <NavigationBarDExample />,
};

export const navigationBarCategory: ComponentCategory = {
  slug: "navigation-bar",
  title: "Navigation Bar",
  description:
    "Navigation components, including navigation menus, top and bottom bars",
  seo: "Explore our comprehensive selection of navigation components, including navigation menus and bottom bars",
  components: navigationBarComponents,
  previews: navigationBarPreviews,
};

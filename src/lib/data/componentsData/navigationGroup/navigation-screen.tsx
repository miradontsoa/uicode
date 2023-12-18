import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import NavigationScreenAExample from "@/code/components/navigation-screen/nav-screen-a/example-wrapper";

const navigationScreenComponents: ComponentItem[] = [
  {
    slug: "nav-screen-a",
    title: "Navigation Screen A",
    access: "premium",
    shortDesc: "Fullscreen navigation, mobile menu screen.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Fullscreen navigation, mobile menu screen.",
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

const navigationScreenPreviews: ComponentPreviews = {
  "nav-screen-a": <NavigationScreenAExample />,
};

export const navigationScreenCategory: ComponentCategory = {
  slug: "navigation-screen",
  title: "Navigation Screen",
  description:
    "Navigation components, including fullscreen navigation, mobile menu screen",
  seo: "Navigation components, including fullscreen navigation, mobile menu screen",
  components: navigationScreenComponents,
  previews: navigationScreenPreviews,
};

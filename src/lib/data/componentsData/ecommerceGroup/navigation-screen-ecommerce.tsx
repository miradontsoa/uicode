import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import NavScreenEcommerceAExample from "@/code/components/navigation-screen-ecommerce/nav-screen-ecommerce-a/example-wrapper";
// TODO:
// Product item: add "add to cart" button, "add to favorite button", and "action on top"

const navigationScreenEcommerceComponents: ComponentItem[] = [
  {
    slug: "nav-screen-ecommerce-a",
    title: "Navigation screen for e-commerce A",
    access: "premium",
    shortDesc: "Navigation screen for an e-commerce website",
    description: "Navigation screen for an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "medium",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=202%3A1300&mode=design&t=DYX25tvC2QYcwpoW-1",
  },
];

const navigationScreenEcommercePreviews: ComponentPreviews = {
  "nav-screen-ecommerce-a": <NavScreenEcommerceAExample />,
};

export const navigationScreenEcommerceCategory: ComponentCategory = {
  slug: "navigation-screen-ecommerce",
  // title: "E-Commerce Navigation Screen",
  title: "Navigation Screen",
  description: "Navigation Screen of an e-commerce website.",
  seo: "Navigation Screen of an e-commerce website.",
  components: navigationScreenEcommerceComponents,
  previews: navigationScreenEcommercePreviews,
};

import HeaderEcommerceAExample from "@/code/components/header-ecommerce/header-ecommerce-a/example-wrapper";
import HeaderEcommerceBExample from "@/code/components/header-ecommerce/header-ecommerce-b/example-wrapper";
import HeaderEcommerceCExample from "@/code/components/header-ecommerce/header-ecommerce-c/example-wrapper";
import HeaderEcommerceMobileAExample from "@/code/components/header-ecommerce/header-ecommerce-mobile-a/example-wrapper";
import HeaderEcommerceMobileBExample from "@/code/components/header-ecommerce/header-ecommerce-mobile-b/example-wrapper";
import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";

// TODO:
// Product item: add "add to cart" button, "add to favorite button", and "action on top"

const headerEcommerceComponents: ComponentItem[] = [
  {
    slug: "header-ecommerce-a",
    title: "Large header bar for e-commerce A",
    access: "premium",
    shortDesc:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    description:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "header-ecommerce-b",
    title: "Large header bar for e-commerce B",
    access: "premium",
    shortDesc:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    description:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "header-ecommerce-c",
    title: "Large header bar for e-commerce C",
    access: "premium",
    shortDesc:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    description:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "header-ecommerce-mobile-a",
    title: "Mobile header bar for e-commerce A",
    access: "any",
    shortDesc:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    description:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "medium",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "header-ecommerce-mobile-b",
    title: "Mobile header bar for e-commerce B",
    access: "premium",
    shortDesc:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    description:
      "E-Commerce header and navigation bar, optimized for large size devices, placed on top of an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "medium",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
];

const headerEcommercePreviews: ComponentPreviews = {
  "header-ecommerce-a": <HeaderEcommerceAExample />,
  "header-ecommerce-b": <HeaderEcommerceBExample />,
  "header-ecommerce-c": <HeaderEcommerceCExample />,
  "header-ecommerce-mobile-a": <HeaderEcommerceMobileAExample />,
  "header-ecommerce-mobile-b": <HeaderEcommerceMobileBExample />,
};

export const headerEcommerceCategory: ComponentCategory = {
  slug: "header-ecommerce",
  // title: "E-Commerce Header and Navigation Bar",
  // title: "E-Commerce Header",
  title: "Header Bar",
  description:
    "Header and navigation Bar placed on top of an e-commerce website.",
  seo: "Header placed on top of an e-commerce website.",
  // seo: "These product components allow you to showcase your products",
  components: headerEcommerceComponents,
  previews: headerEcommercePreviews,
};

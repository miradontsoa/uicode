import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import HeroEcommerceAExample from "@/code/components/hero-ecommerce/hero-ecommerce-a/example-wrapper";
import HeroEcommerceBExample from "@/code/components/hero-ecommerce/hero-ecommerce-b/example-wrapper";
import HeroEcommerceCExample from "@/code/components/hero-ecommerce/hero-ecommerce-c/example-wrapper";
import HeroEcommerceDExample from "@/code/components/hero-ecommerce/hero-ecommerce-d/example-wrapper";
import HeroEcommerceEExample from "@/code/components/hero-ecommerce/hero-ecommerce-e/example-wrapper";
// TODO:
// Product item: add "add to cart" button, "add to favorite button", and "action on top"

const heroEcommerceComponents: ComponentItem[] = [
  {
    slug: "hero-ecommerce-a",
    title: "Hero e-commerce A",
    access: "any",
    shortDesc: "Hero section for an e-commerce website",
    description: "Hero section for an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "hero-ecommerce-b",
    title: "Hero e-commerce B",
    access: "any",
    shortDesc: "Hero section for an e-commerce website",
    description: "Hero section for an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "hero-ecommerce-c",
    title: "Hero e-commerce C",
    access: "any",
    shortDesc: "Hero section for an e-commerce website",
    description: "Hero section for an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "hero-ecommerce-d",
    title: "Hero e-commerce D",
    access: "any",
    shortDesc: "Hero section for an e-commerce website",
    description: "Hero section for an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "hero-ecommerce-e",
    title: "Hero e-commerce E",
    access: "any",
    shortDesc: "Hero section for an e-commerce website",
    description: "Hero section for an e-commerce website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  /* {
    slug: "hero-product-a",
    title: "Hero product A",
    access: "premium",
    shortDesc: "Hero section for a product page",
    description: "Hero section for a product page",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  }, */
];

const heroEcommercePreviews: ComponentPreviews = {
  "hero-ecommerce-a": <HeroEcommerceAExample />,
  "hero-ecommerce-b": <HeroEcommerceBExample />,
  "hero-ecommerce-c": <HeroEcommerceCExample />,
  "hero-ecommerce-d": <HeroEcommerceDExample />,
  "hero-ecommerce-e": <HeroEcommerceEExample />,
};

export const heroEcommerceCategory: ComponentCategory = {
  slug: "hero-ecommerce",
  title: "Hero E-commerce",
  description: "Hero section for an e-commerce website.",
  seo: "Hero section for an e-commerce website.",
  components: heroEcommerceComponents,
  previews: heroEcommercePreviews,
};

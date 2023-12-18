import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import PricingAExample from "@/code/components/pricing/pricing-a/example-wrapper"
import PricingBExample from "@/code/components/pricing/pricing-b/example-wrapper"
import PricingCExample from "@/code/components/pricing/pricing-c/example-wrapper"
import PricingDExample from "@/code/components/pricing/pricing-d/example-wrapper"


const pricingComponents: ComponentItem[] = [
  {
    slug: "pricing-a",
    title: "Pricing A",
    access: "premium",
    shortDesc: "Component that represents a price list item.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a price list item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=51%3A586&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "pricing-b",
    title: "Pricing B",
    access: "premium",
    shortDesc: "Pricing list item",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a price list item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=51%3A586&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "pricing-c",
    title: "Pricing C",
    access: "premium",
    shortDesc: "Pricing list item",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a price list item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=51%3A586&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "pricing-d",
    title: "Pricing D",
    access: "premium",
    shortDesc: "Pricing list item",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a price list item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=51%3A586&t=HSsDXGexK0KThPA3-1",
  },
];

const pricingPreviews : ComponentPreviews= {
  "pricing-a": <PricingAExample/>,
  "pricing-b": <PricingBExample/>,
  "pricing-c": <PricingCExample/>,
  "pricing-d": <PricingDExample/>,
};

export const pricingCategory: ComponentCategory = {
  slug: "pricing",
  title: "Pricing",
  description: "Components designed to be used as price list item.",
  seo: "Components designed to be used as price list item.",
  components: pricingComponents,
  previews: pricingPreviews,
};
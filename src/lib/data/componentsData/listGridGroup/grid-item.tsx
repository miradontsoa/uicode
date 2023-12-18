import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import CardAExample from "@/code/components/grid-item/card-a/example-wrapper";
import CardBExample from "@/code/components/grid-item/card-b/example-wrapper";
import CardCExample from "@/code/components/grid-item/card-c/example-wrapper";
import CardDExample from "@/code/components/grid-item/card-d/example-wrapper";
import CardEExample from "@/code/components/grid-item/card-e/example-wrapper";
import CardFExample from "@/code/components/grid-item/card-f/example-wrapper";
import CardGExample from "@/code/components/grid-item/card-g/example-wrapper";

const gridItemComponents: ComponentItem[] = [
  {
    slug: "card-a",
    title: "Card A",
    access: "any",
    shortDesc: "Card layout representing an item with image and text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Card layout representing an item with image and text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A31&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "card-b",
    title: "Card B",
    access: "premium",
    shortDesc: "Card layout representing an item with image and text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Card layout representing an item with image and text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A31&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "card-c",
    title: "Card C",
    access: "premium",
    shortDesc: "Card layout representing an item with image and text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Card layout representing an item with image and text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A31&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "card-d",
    title: "Card D",
    access: "premium",
    shortDesc: "Card layout representing an item with image and text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Card layout representing an item with image and text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A31&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "card-e",
    title: "Card E",
    access: "premium",
    shortDesc: "Card layout representing an item with image and text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Card layout representing an item with image and text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A31&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "card-f",
    title: "Card F",
    access: "premium",
    shortDesc: "Card layout representing an item with image and text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Card layout representing an item with image and text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A31&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "card-g",
    title: "Card G",
    access: "premium",
    shortDesc: "Card layout representing an item with image and text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Card layout representing an item with image and text.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A31&t=HSsDXGexK0KThPA3-1",
  },
];

const gridItemPreviews: ComponentPreviews = {
  "card-a": <CardAExample />,
  "card-b": <CardBExample />,
  "card-c": <CardCExample />,
  "card-d": <CardDExample />,
  "card-e": <CardEExample />,
  "card-f": <CardFExample />,
  "card-g": <CardGExample />,
};

export const gridItemCategory: ComponentCategory = {
  slug: "grid-item",
  title: "Card, Grid Item",
  description: "Components designed to be used as grid items, such as cards.",
  seo: "Components designed to be used as grid items, including customizable cards.",
  components: gridItemComponents,
  previews: gridItemPreviews,
};

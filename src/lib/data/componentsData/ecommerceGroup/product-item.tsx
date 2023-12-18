import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import ProductCardAExample from "@/code/components/product-item/product-card-a/example-wrapper";
import ProductItemAExample from "@/code/components/product-item/product-item-a/example-wrapper";
import ProductItemBExample from "@/code/components/product-item/product-item-b/example-wrapper";
import ProductItemCExample from "@/code/components/product-item/product-item-c/example-wrapper";
import ProductItemDExample from "@/code/components/product-item/product-item-d/example-wrapper";
import ProductItemEExample from "@/code/components/product-item/product-item-e/example-wrapper";
import ProductItemFExample from "@/code/components/product-item/product-item-f/example-wrapper";
// TODO:
// Product item: add "add to cart" button, "add to favorite button", and "action on top"

const productItemComponents: ComponentItem[] = [
  {
    slug: "product-card-a",
    title: "Product Card A",
    access: "any",
    shortDesc: "Component that represents a product card.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a product card.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&mode=design&t=DYX25tvC2QYcwpoW-1",
  },
  {
    slug: "product-item-a",
    title: "Product Item A",
    access: "any",
    shortDesc: "Component that represents a product item.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a product item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "product-item-b",
    title: "Product Item B",
    access: "premium",
    shortDesc: "With color selection",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a product item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "product-item-c",
    title: "Product Item C",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Component that represents a product item.",
    description: "Component that represents a product item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "product-item-d",
    title: "Product Item D",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Component that represents a product item.",
    description: "Component that represents a product item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "product-item-e",
    title: "Product Item E",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Component that represents a product item.",
    description: "Component that represents a product item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "product-item-f",
    title: "Product Item F",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Component that represents a product item.",
    description: "Component that represents a product item.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
];

const productItemPreviews: ComponentPreviews = {
  "product-card-a": <ProductCardAExample/>,
  "product-item-a": <ProductItemAExample/>,
  "product-item-b": <ProductItemBExample/>,
  "product-item-c": <ProductItemCExample/>,
  "product-item-d": <ProductItemDExample/>,
  "product-item-e": <ProductItemEExample/>,
  "product-item-f": <ProductItemFExample/>,
};

export const productItemCategory: ComponentCategory = {
  slug: "product-item",
  title: "Product Item",
  description:
    "Components designed for representing list of products or services.",
  seo: "Explore purpose-built components ideal for product list items.",
  // seo: "These product components allow you to showcase your products",
  components: productItemComponents,
  previews: productItemPreviews,
};

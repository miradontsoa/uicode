import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import CategoryColorAExample from "@/code/components/category-select/category-color-a/example-wrapper";
import CategoryColorBExample from "@/code/components/category-select/category-color-b/example-wrapper";
import CategoryColorCExample from "@/code/components/category-select/category-color-c/example-wrapper";
import CategoryTextAExample from "@/code/components/category-select/category-text-a/example-wrapper";
import CategoryTextBExample from "@/code/components/category-select/category-text-b/example-wrapper";
import CategoryTextCExample from "@/code/components/category-select/category-text-c/example-wrapper";

const categorySelectComponents: ComponentItem[] = [
  {
    slug: "category-color-a",
    title: "Category Color A",
    access: "any",
    shortDesc: "Color selector.",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Color selector. It can be placed inside a product item as a color selector.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=49%3A313&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "category-color-b",
    title: "Category Color B",
    access: "premium",
    shortDesc: "Color selector.",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Color selector. It can be placed inside a product item as a color selector.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=49%3A313&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "category-color-c",
    title: "Category Color C",
    access: "premium",
    shortDesc: "Color selector",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Color selector. It can be placed inside a product item as a color selector.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=49%3A313&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "category-text-a",
    title: "Category Text A",
    access: "premium",
    shortDesc: "Category selector",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Category selector. It can be placed inside a product item as a category, size or variant selector.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=49%3A313&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "category-text-b",
    title: "Category Text B",
    access: "premium",
    shortDesc: "Category selector",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Category selector. It can be placed inside a product item as a category, size or variant selector.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=49%3A313&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "category-text-c",
    title: "Category Text C",
    access: "premium",
    shortDesc: "Category selector",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "Category selector. It can be placed inside a product item as a category, size or variant selector.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=49%3A313&t=HSsDXGexK0KThPA3-1",
  },
];

const categorySelectPreviews: ComponentPreviews = {
  "category-color-a": <CategoryColorAExample />,
  "category-color-b": <CategoryColorBExample />,
  "category-color-c": <CategoryColorCExample />,
  "category-text-a": <CategoryTextAExample />,
  "category-text-b": <CategoryTextBExample />,
  "category-text-c": <CategoryTextCExample />,
};

export const categorySelectCategory: ComponentCategory = {
  slug: "category-select",
  title: "Category Selection",
  description: "Components designed for category selection",
  seo: "Discover purpose-built components crafted specifically for seamless category selection.",
  components: categorySelectComponents,
  previews: categorySelectPreviews,
};

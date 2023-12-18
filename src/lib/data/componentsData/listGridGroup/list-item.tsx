import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import ListItemAExample from "@/code/components/list-item/list-item-a/example-wrapper";
import ListItemBExample from "@/code/components/list-item/list-item-b/example-wrapper";
import ListItemCExample from "@/code/components/list-item/list-item-c/example-wrapper";


const listItemComponents: ComponentItem[] = [
  {
    slug: "list-item-a",
    title: "List Item A",
    access: "any",
    shortDesc: "List item layout with image and text.",
    previewBgClass: "bg-gradient-gray-light",
    description: "List item layout with image and text.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A30&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "list-item-b",
    title: "List Item B",
    access: "premium",
    shortDesc: "List item layout with image and text",
    previewBgClass: "bg-gradient-gray-light",
    description: "List item layout with image and text.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A30&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "list-item-c",
    title: "List Item C",
    access: "premium",
    shortDesc: "List item layout with image and text",
    previewBgClass: "bg-gradient-gray-light",
    description: "List item layout with image and text.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A30&t=HSsDXGexK0KThPA3-1",
  },
  /* {
    slug: "list-item-d",
    title: "List Item D",
    shortDesc: "List item layout with image and text",
    bgClass: "bg-gradient-pink-light",
    description:
      "List item layout with image and text.",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A30&t=HSsDXGexK0KThPA3-1",
  }, */
];

const listItemPreviews: ComponentPreviews = {
  "list-item-a": <ListItemAExample/>,
  "list-item-b": <ListItemBExample/>,
  "list-item-c": <ListItemCExample/>,
};

export const listItemCategory: ComponentCategory = {
  slug: "list-item",
  title: "List item",
  description: "Components designed to be used as list items",
  seo: "Components designed to be used as list items",
  components: listItemComponents,
  previews: listItemPreviews,
};

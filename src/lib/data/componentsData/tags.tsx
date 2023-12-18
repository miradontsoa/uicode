import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";



export const tagsComponents: ComponentItem[] = [
  {
    slug: "tags-a",
    title: "Tags A",
    access: "any",
    shortDesc: "Tag list",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "This is a short description of this item. Replace it with sentence like the following: you can use it as a list of an item or a a product varient card.",
  },
];

export const tagsPreviews : ComponentPreviews= {
  /* "tags-a": <TagsAExample/> */
};
export const tagsCategory : ComponentCategory= {
  slug: "tags",
  title: "Tags",
  description: "Tags, label",
  seo: "Tags, label",
  components: tagsComponents,
  previews: tagsPreviews,
};

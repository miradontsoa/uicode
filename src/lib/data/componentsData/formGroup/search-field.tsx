import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import SearchFieldLiteAExample from "@/code/components/search-field/search-field-lite-a/example-wrapper";
import SearchFieldAExample from "@/code/components/search-field/search-field-a/example-wrapper";
import SearchFieldBExample from "@/code/components/search-field/search-field-b/example-wrapper";

const searchFieldComponents: ComponentItem[] = [
  {
    slug: "search-field-lite-a",
    title: "Search Field Lite A",
    access: "any",
    shortDesc: "A search for component.",
    previewBgClass: "bg-gradient-gray-light",
    description:  "A search for component.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=64%3A1202&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "search-field-a",
    title: "Search Field A",
    access: "premium",
    shortDesc: "Component that represents a search form.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a search form.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=64%3A1202&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "search-field-b",
    title: "Search Field B",
    access: "premium",
    shortDesc: "Component that represents a search form.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a search form.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=64%3A1202&t=HSsDXGexK0KThPA3-1",
  },
  /* {
    slug: "search-field-c",
    title: "Search Field C",
    shortDesc: "Search form, input",
    bgClass: "bg-gradient-blue-light",
    description:
      "This is a short description of this item. Replace it with sentence like the following: you can use it as a list of an item or a a product varient card.",
  },
  {
    slug: "search-field-d",
    title: "Search Field D",
    shortDesc: "Search form, input",
    bgClass: "bg-gradient-blue-light",
    description:
      "This is a short description of this item. Replace it with sentence like the following: you can use it as a list of an item or a a product varient card.",
  }, */
];

const searchFieldPreviews: ComponentPreviews = {
  "search-field-lite-a": <SearchFieldLiteAExample/>,
  "search-field-a": <SearchFieldAExample/>,
  "search-field-b": <SearchFieldBExample/>,
};

export const searchFieldCategory: ComponentCategory = {
  slug: "search-field",
  title: "Search Field",
  description: "Components designed for representing search field.",
  seo: "Components designed for representing search field.",
  components: searchFieldComponents,
  previews: searchFieldPreviews,
};
import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import InputContainerAExample from "@/code/components/input/input-container-a/example-wrapper";
import InputContainerBExample from "@/code/components/input/input-container-b/example-wrapper";

const inputComponents: ComponentItem[] = [
  {
    slug: "input-container-a",
    title: "Input Container A",
    access: "any",
    shortDesc: "Input field border frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Input field border frame.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A33&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "input-container-b",
    title: "Input Container B",
    access: "any",
    shortDesc: "Input field border frame.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Input field border frame.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A33&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  /* {
    slug: "input-container-b",
    title: "Input Container B",
    shortDesc: "Input with label on top",
    bgClass: "bg-gradient-blue-light",
    description:
      "This is a short description of this item. Replace it with sentence like the following: you can use it as a list of an item or a a product varient card.",
  }, */
];

const inputPreviews: ComponentPreviews = {
  "input-container-a": <InputContainerAExample />,
  "input-container-b": <InputContainerBExample />,
};
// export default inputs;

export const inputCategory: ComponentCategory = {
  slug: "input",
  title: "Input",
  description:
    "Incorporate these components as input elements to facilitate user interaction.",
  seo: "Incorporate these components as input elements to facilitate user interaction.",
  components: inputComponents,
  previews: inputPreviews,
};

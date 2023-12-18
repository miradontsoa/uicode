import ButtonGroupAExample from "@/code/components/button-group/button-group-a/example-wrapper";
import ButtonGroupBExample from "@/code/components/button-group/button-group-b/example-wrapper";
import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";


const buttonGroupComponents: ComponentItem[] = [
  {
    slug: "button-group-a",
    title: "Button Group A",
    access: "premium",
    shortDesc:
      "A group of buttons that are displayed together. They are often used to present a set of related options to the user.",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "A group of buttons that are displayed together. They are often used to present a set of related options to the user.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=145%3A1635&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "button-group-b",
    title: "Button Group B",
    access: "any",
    shortDesc:
      "A group of buttons that are displayed together. They are often used to present a set of related options to the user.",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "A group of buttons that are displayed together. They are often used to present a set of related options to the user.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=145%3A1635&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
];

const buttonGroupPreviews: ComponentPreviews = {
  "button-group-a": <ButtonGroupAExample />,
  "button-group-b": <ButtonGroupBExample />,
};
// export default breadcrumbss;

export const buttonGroupCategory: ComponentCategory = {
  slug: "button-group",
  title: "Button Group",
  description:
    "A group of buttons that are displayed together. They are often used to present a set of related options to the user.",
  seo: "A group of buttons that are displayed together. They are often used to present a set of related options to the user.",
  components: buttonGroupComponents,
  previews: buttonGroupPreviews,
};

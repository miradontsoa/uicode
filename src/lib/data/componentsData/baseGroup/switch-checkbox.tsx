import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";

import SwitchAExample from "@/code/components/switch-checkbox/switch-a/example-wrapper";
import CheckboxAExample from "@/code/components/switch-checkbox/checkbox-a/example-wrapper";

const switchComponents: ComponentItem[] = [
  {
    slug: "checkbox-a",
    title: "Checkbox A",
    access: "any",
    shortDesc: "Checkbox that have two states: on and off.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Checkbox that have two states: on and off.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=145%3A1461&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "switch-a",
    title: "Switch A",
    access: "any",
    shortDesc: "Switch that have two states: on and off.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Switch that have two states: on and off.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=145%3A1461&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
];

const switchPreviews: ComponentPreviews = {
  "switch-a": <SwitchAExample />,
  "checkbox-a": <CheckboxAExample />,
};
// export default switchs;

export const switchCategory: ComponentCategory = {
  slug: "switch-checkbox",
  title: "Switch & Checkbox",
  description: "Checkbox or switch that have two states: on and off.",
  seo: "Checkbox or switch that have two states: on and off.",
  components: switchComponents,
  previews: switchPreviews,
};

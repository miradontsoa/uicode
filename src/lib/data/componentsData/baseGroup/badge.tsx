import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import BadgeAExample from "@/code/components/badge/badge-a/example-wrapper";


const badgeComponents: ComponentItem[] = [
  {
    slug: "badge-a",
    title: "Badge A",
    access: "any",
    shortDesc: "Components that can be used as badge, label, tag or chip.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Components that can be used as badge, label, tag or chip.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=128%3A703&mode=design&t=XD513YmAvEFLqvrI-1",
  },
  /* {
    slug: "badge-b",
    title: "Input Container B",
    shortDesc: "Input with label on top",
    bgClass: "bg-gradient-blue-light",
    description:
      "This is a short description of this item. Replace it with sentence like the following: you can use it as a list of an item or a a product varient card.",
  }, */
];

const badgePreviews: ComponentPreviews = {
  "badge-a": <BadgeAExample/>,
};
// export default badges;

export const badgeCategory: ComponentCategory = {
  slug: "badge",
  title: "Badge & Tags",
  description:
    "A small, graphical component that is used to convey information.",
  seo: "A small, graphical component that is used to convey information.",
  // seo: "Incorporate these components as badge, label, tag or chip.",
  components: badgeComponents,
  previews: badgePreviews,
}
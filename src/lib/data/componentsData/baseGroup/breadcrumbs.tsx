import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import BreadcrumbsAExample from "@/code/components/breadcrumbs/breadcrumbs-a/example-wrapper";
import BreadcrumbsBExample from "@/code/components/breadcrumbs/breadcrumbs-b/example-wrapper";

const breadcrumbsComponents: ComponentItem[] = [
  {
    slug: "breadcrumbs-a",
    title: "Breadcrumbs A",
    access: "any",
    shortDesc: "Breadcrumbs, navigation",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "A trail of links that shows the user's current location within the hierarchy of the website or app.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=143%3A1035&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
  {
    slug: "breadcrumbs-b",
    title: "Breadcrumbs B",
    access: "any",
    shortDesc: "Breadcrumbs, navigation",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "A trail of links that shows the user's current location within the hierarchy of the website or app.",
    // description: "A breadcrumb is a navigation aid that helps users understand where they are on a website and how they got there. It is a trail of links that shows the user's current location within the hierarchy of the website or app.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=143%3A1035&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
];

const breadcrumbsPreviews: ComponentPreviews = {
  "breadcrumbs-a": <BreadcrumbsAExample/>,
  "breadcrumbs-b": <BreadcrumbsBExample/>,
};
// export default breadcrumbss;

export const breadcrumbsCategory: ComponentCategory = {
  slug: "breadcrumbs",
  title: "Breadcrumbs",
  description:
    "A trail of links that shows the user's current location within the hierarchy of the website or app.",
  seo: "A trail of links that shows the user's current location within the hierarchy of the website or app.",
  components: breadcrumbsComponents,
  previews: breadcrumbsPreviews,
};

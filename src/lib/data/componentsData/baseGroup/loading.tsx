import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import LoadingBounceAExample from "@/code/components/loading/loading-bounce-a/example-wrapper";
import LoadingSpinnerAExample from "@/code/components/loading/loading-spinner-a/example-wrapper";

const loadingComponents: ComponentItem[] = [
  {
    slug: "loading-bounce-a",
    title: "Loading Bounce A",
    access: "any",
    shortDesc: "Loading placeholder.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Components that can be used as loading or placeholder",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=196%3A2&mode=design&t=WL48xvvot01bZYP8-1",
  },
  {
    slug: "loading-spinner-a",
    title: "Loading Spinner A",
    access: "premium",
    shortDesc: "Loading spinner.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Components that can be used as loading or placeholder",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=196%3A2&mode=design&t=WL48xvvot01bZYP8-1",
  },
];

const loadingPreviews: ComponentPreviews = {
  "loading-bounce-a": <LoadingBounceAExample />,
  "loading-spinner-a": <LoadingSpinnerAExample />,
};
// export default loadings;

export const loadingCategory: ComponentCategory = {
  slug: "loading",
  title: "Loading",
  description: "Loading, progress bar, placeholder.",
  seo: "Loading, progress bar, placeholder.",
  // seo: "Incorporate these components as loading, label, tag or chip.",
  components: loadingComponents,
  previews: loadingPreviews,
};

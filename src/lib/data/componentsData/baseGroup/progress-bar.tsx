import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import ProgressBarAExample from "@/code/components/progress-bar/progress-bar-a/example-wrapper";

const progressBarComponents: ComponentItem[] = [
  {
    slug: "progress-bar-a",
    title: "Progress Bar A",
    access: "any",
    shortDesc: "Components that can be used as progress bar.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Components that can be used as progress bar.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=146%3A2037&mode=design&t=BpSmiLkfaSOquGH9-1",
  },
];

const progressBarPreviews: ComponentPreviews = {
  "progress-bar-a": <ProgressBarAExample />,
};

export const progressBarCategory: ComponentCategory = {
  slug: "progress-bar",
  title: "Progress Bar",
  description: "Components that can be used as progress bar.",
  seo: "Components that can be used as progress bar.",
  components: progressBarComponents,
  previews: progressBarPreviews,
};

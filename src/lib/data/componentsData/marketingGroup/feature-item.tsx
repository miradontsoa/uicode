import FeatureItemAExample from "@/code/components/feature-item/feature-item-a/example-wrapper";
import FeatureItemBExample from "@/code/components/feature-item/feature-item-b/example-wrapper";
import FeatureItemCExample from "@/code/components/feature-item/feature-item-c/example-wrapper";
import FeatureItemDExample from "@/code/components/feature-item/feature-item-d/example-wrapper";
import FeatureItemEExample from "@/code/components/feature-item/feature-item-e/example-wrapper";
import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";

const featureItemComponents: ComponentItem[] = [
  {
    slug: "feature-item-a",
    title: "Feature Item A",
    access: "any",
    shortDesc: "Component that represents a feature or functionality.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a feature or functionality.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A19&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "feature-item-b",
    title: "Feature Item B",
    access: "premium",
    shortDesc: "Component that represents a feature or functionality.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents a feature or functionality.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A19&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "feature-item-c",
    title: "Feature Item C",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Component that represents a feature or functionality.",
    description: "Component that represents a feature or functionality.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A19&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "feature-item-d",
    title: "Feature Item D",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Component that represents a feature or functionality.",
    description: "Component that represents a feature or functionality.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A19&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "feature-item-e",
    title: "Feature Item E",
    access: "premium",
    previewBgClass: "bg-gradient-gray-light",
    shortDesc: "Component that represents a feature or functionality.",
    description: "Component that represents a feature or functionality.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A19&t=HSsDXGexK0KThPA3-1",
  },
];

const featureItemPreviews: ComponentPreviews = {
  "feature-item-a": <FeatureItemAExample />,
  "feature-item-b": <FeatureItemBExample />,
  "feature-item-c": <FeatureItemCExample />,
  "feature-item-d": <FeatureItemDExample />,
  "feature-item-e": <FeatureItemEExample />,
};

export const featureItemCategory: ComponentCategory = {
  slug: "feature-item",
  title: "Feature Item",
  description:
    "Components designed to be used to highlight service or product features.",
  seo: "Components designed to be used to highlight service or product features.",
  components: featureItemComponents,
  previews: featureItemPreviews,
};

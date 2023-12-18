import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import SubscriptionFormAExample from "@/code/components/subscription-form/subscription-form-a/example-wrapper";
import SubscriptionFormBExample from "@/code/components/subscription-form/subscription-form-b/example-wrapper";

const subscriptionFormComponents: ComponentItem[] = [
  {
    slug: "subscription-form-a",
    title: "Subscription Form A",
    access: "premium",
    shortDesc: "Component that represents an email subscription form.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents an email subscription form.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=64%3A1331&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "subscription-form-b",
    title: "Subscription Form B",
    access: "premium",
    shortDesc: "Component that represents an email subscription form.",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents an email subscription form.",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=64%3A1331&t=HSsDXGexK0KThPA3-1",
  },
];

const subscriptionFormPreviews: ComponentPreviews = {
  "subscription-form-a": <SubscriptionFormAExample />,
  "subscription-form-b": <SubscriptionFormBExample />,
};

export const subscriptionFormCategory: ComponentCategory = {
  slug: "subscription-form",
  title: "Subscription Form",
  description: "Components designed for representing subscription form",
  seo: "Components designed for representing subscription form",
  components: subscriptionFormComponents,
  previews: subscriptionFormPreviews,
};

import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import HeroMarketingAExample from "@/code/components/hero-marketing/hero-marketing-a/example-wrapper";
import HeroMarketingBExample from "@/code/components/hero-marketing/hero-marketing-b/example-wrapper";

const heroMarketingComponents: ComponentItem[] = [
  {
    slug: "hero-marketing-a",
    title: "Hero landing page A",
    access: "any",
    shortDesc: "Hero section for a landing page or a marketing website",
    description: "Hero section for a landing page or a marketing website",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
];

const heroMarketingPreviews: ComponentPreviews = {
  "hero-marketing-a": <HeroMarketingAExample />,
  "hero-marketing-b": <HeroMarketingBExample />,
};

export const heroMarketingCategory: ComponentCategory = {
  slug: "hero-marketing",
  title: "Hero Landing Page",
  description: "Hero section for a landing page.",
  seo: "Hero section for a landing page.",
  components: heroMarketingComponents,
  previews: heroMarketingPreviews,
};

import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import HeroPortfolioAExample from "@/code/components/hero-portfolio/hero-portfolio-a/example-wrapper";

const heroPortfolioComponents: ComponentItem[] = [
  {
    slug: "hero-portfolio-a",
    title: "Hero Portfolio A",
    access: "any",
    shortDesc: "Hero section for a portfolio or a business web page",
    description: "Hero section for a portfolio or a business web page",
    previewBgClass: "bg-gradient-gray-light",
    previewWidth: "large",
    figma:
      "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A26&t=HSsDXGexK0KThPA3-1",
  },
];

const heroPortfolioPreviews: ComponentPreviews = {
  "hero-portfolio-a": <HeroPortfolioAExample />, 
};

export const heroPortfolioCategory: ComponentCategory = {
  slug: "hero-portfolio",
  title: "Hero Portfolio Page",
  description: "Hero section for a portfolio page.",
  seo: "Hero section for a portfolio page.",
  components: heroPortfolioComponents,
  previews: heroPortfolioPreviews,
};

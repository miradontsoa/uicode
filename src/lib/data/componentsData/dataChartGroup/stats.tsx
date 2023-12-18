import { ComponentCategory, ComponentItem, ComponentPreviews } from "@/types";
import StatsAExample from "@/code/components/stats/stats-a/example-wrapper"
import StatsBExample from "@/code/components/stats/stats-b/example-wrapper"
import StatsCExample from "@/code/components/stats/stats-c/example-wrapper"


const statsComponents: ComponentItem[] = [
  {
    slug: "stats-a",
    title: "Stats A",
    access: "premium",
    shortDesc: "Component that represents statistics, numbers,...",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents statistics, numbers,...",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A13&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "stats-b",
    title: "Stats B",
    access: "premium",
    shortDesc: "Component that represents statistics, numbers,...",
    previewBgClass: "bg-gradient-gray-light",
    description:
      "This is a card wrapper, you can add any content. Component that represents statistics, numbers,...",
      figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A13&t=HSsDXGexK0KThPA3-1",
  },
  {
    slug: "stats-c",
    title: "Stats C",
    access: "premium",
    shortDesc: "Component that represents statistics, numbers,...",
    previewBgClass: "bg-gradient-gray-light",
    description: "Component that represents statistics, numbers,...",
    figma: "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&node-id=44%3A13&t=HSsDXGexK0KThPA3-1",
  }, 
];

const statsPreviews : ComponentPreviews= {
  "stats-a": <StatsAExample/>,
  "stats-b": <StatsBExample/>,
  "stats-c": <StatsCExample/>,
};


export const statsCategory: ComponentCategory = {
  slug: "stats",
  title: "Stats",
  description: "Components for representing statistics and numbers.",
  seo: "Explore a diverse range of components for representing statistics and numbers.",
  components: statsComponents,
  previews: statsPreviews,
};

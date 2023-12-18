import { CategoryGroup, ComponentCategory } from "@/types";
import { badgeCategory } from "./badge";
import { breadcrumbsCategory } from "./breadcrumbs";
import { buttonCategory } from "./button";
import { buttonGroupCategory } from "./button-group";
import { categorySelectCategory } from "./category-select";
import { inputCategory } from "./input";
import { loadingCategory } from "./loading";
import { progressBarCategory } from "./progress-bar";
import { switchCategory } from "./switch-checkbox";

// export const baseCategoriesSlug = "base"
const categories: ComponentCategory[]= [
  buttonCategory,
  buttonGroupCategory,
  breadcrumbsCategory,
  badgeCategory,
  categorySelectCategory,
  inputCategory,
  loadingCategory,
  progressBarCategory,
  switchCategory,
  /* {
    slug: "tags",
    items: tagsComponents,
    ...tagsInfo,
  }, */
  /* {
    slug: "checkbox",
    title: "Checkbox",
    description: "Use these components as input",
  },
  {
    slug: "progress",
    title: "Progress",
    description: "Progress bar, donuts",
  },
  {
    slug: "loading",
    title: "Loading",
    description: "loading bar, circle, animated...",
  },
  {
    slug: "chip",
    title: "Chip",
    description: "Represent a chip",
  },
  {
    slug: "label",
    title: "Label",
    description: "Represent a label",
  }, */
];

export const baseGroup: CategoryGroup = {
  title: "Base",
  slug: "base",
  description: "Base components",
  categories,
}

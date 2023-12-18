
// export const baseCategoriesSlug = "base"

import { coursesList } from "./courses/courses-list";
import { designSystemList } from "./design-system/design-system-list";
import { frameworkList } from "./framework/framework-list";
import { hostingList } from "./hosting/hosting-list";

export const listCategories: ListCategoryType[] = [
  hostingList,
  coursesList,
  designSystemList,
  frameworkList
];


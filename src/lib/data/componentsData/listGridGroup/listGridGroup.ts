import { CategoryGroup, ComponentCategory } from "@/types"
import { gridItemCategory } from "./grid-item"
import { listItemCategory } from "./list-item"

// export const baseCategoriesSlug = "base"

const categories: ComponentCategory[] = [
    gridItemCategory,
    listItemCategory,
    // featureItemCategory,
    /* {
        slug: "location",
        items: locationComponents,
        ...locationInfo,
    }, */
    /* {
        slug: "real-estate",
        items: realEstateComponents,
        ...realEstateInfo,
    }, */
]
export const listGridGroup: CategoryGroup = {
    title: "List and Grid",
    slug: "list-grid",
    description: "List and grid items",
    categories,
}
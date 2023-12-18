import { CategoryGroup } from "@/types"
import { locationCategory } from "./location"
import { realEstateCategory } from "./real-estate"

// export const baseCategoriesSlug = "base"

const categories = [
    locationCategory,
    realEstateCategory,
    /* {
        slug: "map",
        title: "Map",
        items: mapComponents,
        ...mapInfo,
    }, */
]
export const placeRealEstateGroup: CategoryGroup = {
    title: "Place, Real estate",
    slug: "place-real-estate",
    description: "Place, Map, Real estate",
    categories,
}
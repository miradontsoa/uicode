import { CategoryGroup, ComponentCategory } from "@/types"
import { featureItemCategory } from "./feature-item"

// export const baseCategoriesSlug = "base"

const categories: ComponentCategory[] = [
    featureItemCategory,
    /* {
        slug: "landing-hero", // landing page hero
        items: landingHeroComponents,
        ...landingHeroInfo
    }, */
    /* {
        slug: "banner-marketing", // sales banner: at top: eg: 20% off this week, banner, floating gradient, ...
        items: bannerMarketingComponents,
        ...bannerMarketingInfo
    }, */
    /* {
        slug: "feature-carousel",
        items: featureCarouselComponents,
        ...featureCarouselInfo
    }, */
    /* {
        slug: "review-item",
        items: reviewItemComponents,
        ...reviewItemInfo
    }, */
    /* {
        slug: "review-carousel",
        items: reviewCarouselComponents,
        ...reviewCarouselInfo
    }, */
]
export const marketingGroup: CategoryGroup = {
    title: "Marketing",
    slug: "marketing",
    description: "Marketing",
    categories,
}
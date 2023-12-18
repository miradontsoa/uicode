import { CategoryGroup, ComponentCategory } from "@/types"

const categories: ComponentCategory[] = [
    /* {
        slug: "image-carousel",
        items: imageCarouselComponents,
        ...imageCarouselInfo
    }, */
    /* {
        slug: "comments",
        items: commentsComponents,
        ...commentsInfo
    }, */
]

export const carouselGroup: CategoryGroup = {
    title: "Carousel",
    slug: "carousel",
    description: "Carousel",
    categories,
}
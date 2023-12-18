import { CategoryGroup } from "@/types"
import { imageFrameCategory } from "./image-frame"
import { imageTextCategory } from "./image-text"

const categories = [
    imageFrameCategory,
    imageTextCategory,
    /* {
        slug: "carousel",
        title: "Carousel",
        items: carouselComponents,
        ...carouselInfo,
    }, */
    /* {
        slug: "music-album",
        title: "Music album",
        items: musicAlbumComponents,
        ...musicAlbumInfo,
    }, */
]
export const imageMediaGroup: CategoryGroup = {
    title: "Image & Media",
    slug: "image-media",
    description: "Image & Media",
    categories,
}
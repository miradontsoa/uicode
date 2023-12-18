import { CategoryGroup, ComponentCategory } from "@/types"
import { frameCategory } from "./frame"
import { iconFrameCategory } from "./icon-frame"
import { widgetCategory } from "./widget"

const categories: ComponentCategory[] = [
    frameCategory,
    widgetCategory,
    iconFrameCategory,
    /* {
        slug: "border", // gradient border, animated gradient border, border top left, double border, ...
        items: borderComponents,
        ...borderInfo
    }, */
    /* {
        slug: "separator", //  gradient separator, animated separator ...
        items: separatorComponents,
        ...separatorInfo
    }, */
    /* {
        slug: "background", // gradient background style logo instagram ohatra, animated gradient, background pattern, ...
        items: backgroundComponents,
        ...backgroundInfo
    }, */
    /* {
        slug: "shadow", //  gradient shadow, animated shadow, flat shadow ...
        items: shadowComponents,
        ...shadowInfo
    }, */
]
export const frameBorderGroup: CategoryGroup = {
    title: "Frame & Border",
    slug: "frame-border",
    description: "Decorative frame and border",
    categories,
}
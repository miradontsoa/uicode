import { CategoryGroup } from "@/types"
import { menuIconCategory } from "./menu-icon"
import { navigationBarCategory } from "./navigation-bar"
import { navigationScreenCategory } from "./navigation-screen"
import { sidebarCategory } from "./sidebar"
import { tabsCategory } from "./tabs"
import { headerBarCategory } from "./header-bar"

const categories = [
    headerBarCategory,
    navigationBarCategory,
    tabsCategory,
    sidebarCategory,
    navigationScreenCategory,
    menuIconCategory, 
    /* {
        slug: "menu", // fullscreen menu, navigation menu at top ...
        items: menuComponents,
        ...menuInfo
    }, */
]
export const navigationGroup: CategoryGroup = {
    title: "Navigation",
    slug: "navigation",
    description: "Navigation components",
    categories,
}
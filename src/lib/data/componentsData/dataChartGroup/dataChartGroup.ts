import { CategoryGroup } from "@/types"
import { statsCategory } from "./stats"

const categories = [
    statsCategory,
    /* { // free?
        slug: "table",
        items: tableComponents,
        ...tableInfo
    }, */
    /* {
        slug: "data-list",
        items: dataListComponents,
        ...dataListInfo
    }, */
    /* {
        slug: "chart",
        items: chartComponents,
        ...chartInfo
    }, */
]
export const dataChartGroup: CategoryGroup = {
    title: "Data",
    slug: "data-chart",
    description: "Data & Chart",
    categories,
}
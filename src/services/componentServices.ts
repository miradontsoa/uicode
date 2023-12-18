import componentCategories from "@/lib/data/componentsData/componentCategories";
import { ComponentItem } from "@/types";


export async function getComponentCategories() {
    const categories = componentCategories;
    return categories;
}

export async function getCategory(categorySlug?: string) {
    return componentCategories.find((cat) => {
        return cat.slug === categorySlug;
    });
}

export async function getComponent(
    itemSlug: string,
    categorySlug: string
): Promise<ComponentItem | undefined> {
    const _category = componentCategories.find(
        (cat) => cat.slug === categorySlug
    );
    if (_category) {
        const component = _category?.components?.find((_item) => _item.slug === itemSlug);
        return { ...component, category: categorySlug };
    } else {
        return;
    }
}

export async function getComponents({
    categorySlug,
    count,
}: {
    categorySlug?: string;
    count?: number;
}) {
    let result: ComponentItem[] = [];

    // TODO : implement count
    if (!categorySlug) {
        // return all components
        let items: ComponentItem[] = [];
        componentCategories.forEach((cat) => {

            items = [...items, ...cat?.components || []];
        });
        result = items;
    } else {
        const existCategory = componentCategories.find((cat) => {
            return cat.slug === categorySlug;
        });
        if (!existCategory) {
            return [];
        }
        // console.log(existCategory)
        result = existCategory?.components?.map((item) => {
            return { ...item, category: categorySlug };
        }) as ComponentItem[];
    }

    // TODO : implement count
    return result;
}

export function getComponentImportPath(itemSlug: string, categorySlug: string) {
    return `#/code/ui-components/${categorySlug}/${itemSlug}/example`;
}

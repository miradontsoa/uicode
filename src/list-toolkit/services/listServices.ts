import { listCategories } from "../data/list-categories";
import { listFeaturedToolkit } from "../data/list-featured-toolkit";

export async function getListCategories() {
    return listCategories
}

export async function getListCategory(categorySlug: string) {
    return listCategories.find((cat) => {
        return cat.slug === categorySlug;
    });
}

export async function getToolkit(toolkitSlug: string, categorySlug: string): Promise<ToolkitType | undefined> {
    const _category = listCategories.find(
        (cat) => cat.slug === categorySlug
    );
    if (_category) {
        const toolkit = _category?.list?.find((_item) => _item.slug === toolkitSlug);
        if (!toolkit) {
            return;
        }
        return { ...toolkit, category: categorySlug };
    } else {
        return;
    }
}

export async function getListFeaturedToolkit(categorySlug?: string): Promise<ToolkitType[]> {
    return listFeaturedToolkit
}
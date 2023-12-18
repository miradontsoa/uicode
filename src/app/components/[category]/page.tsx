
import ArticleLayout from "@/app-components/blog/ArticleLayout";
import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import ItemCard from "@/app-components/ui/cards/ItemCard";
import {
  getCategory,
  getComponentCategories,
} from "@/services/componentServices";
import { ComponentItem, MenuItem } from "@/types";
import { StaticImageData } from "next/image";

interface ComponentItemWithPreview extends ComponentItem {
  previewImage?: StaticImageData;
}

export default async function ComponentCategoryPage({
  params,
}: {
  params?: { category: string };
}) {
  const categorySlug = params?.category;
  const categoryPath = `/components/${categorySlug}`;
  const category = await getCategory(categorySlug);
  const originalItems: ComponentItemWithPreview[] = category?.components || [];
  if (!category || !category.slug) {
    return <div>Category not found</div>;
    // notFound();
  }

  const items: ComponentItemWithPreview[] = await Promise.all(
    originalItems.map(async (item) => {
      item.previewSrc = `/components/${categorySlug}/${item.slug}.png`;
      return item;
    })
  );

  const breadcrumbItems: MenuItem[] = [
    { slug: "components", title: "Components" },
    { slug: categorySlug, title: category?.title },
  ];

  return (
    <ArticleLayout>
      <Breadcrumb className={"breadcrumb"} items={breadcrumbItems} />
      <h2 className={"title"}>{category?.title}</h2>
      <p>{category?.description}</p>

      {/* <div className="grid-3 grid-product"> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-8">
        {items?.map((item) => {
          const itemBaseUrl = `${categoryPath}/${item.slug}`;

          return (
            <div className="grid-item" key={item.slug}>
              <ItemCard
                url={`${itemBaseUrl}`}
                imageUrl={item.previewSrc}
                title={item.title}
                description={item.shortDesc}
                bgClass={item.previewBgClass}
                access={item.access}
                tag={""}
              />
            </div>
          );
        })}
      </div>
    </ArticleLayout>
  );
}

export async function generateStaticParams() {
  const categories = await getComponentCategories();

  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = params.category;
  const category = await getCategory(categorySlug);
  return {
    title: `${category?.title} - Components`,
    description: `${category?.description}`,
  };
}

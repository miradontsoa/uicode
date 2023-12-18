import ContentLayout from "@/app-components/ui/layout/ContentLayout";
import {
  getListCategories,
  getListCategory,
} from "@/list-toolkit/services/listServices";
import CategoryHero from "../sections/CategoryHero";
import CategoryListToolkit from "../sections/CategoryListToolkit";
import ListNotFound from "../sections/ListNotFound";
import BrowserFooter from "@/app-components/ui/footer/BrowserFooter";

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const category = await getListCategory(params.category);
  // const category = {
  //   title: "Hosting",
  //   desc: "Hosting, cloud hosting, react project hosting",
  // };
  if (!category || !category.slug) {
    return <ListNotFound />;
  }
  return (
    <ContentLayout withXPageMargin={true} withMaxWidth={true}>
      <CategoryHero
        title={category.title}
        slug={params.category}
        desc={category.description}
      />
      <CategoryListToolkit
        category={category}
        categorySlug={params.category}
        className="mt-4"
        listToolkit={category.list || []}
      />
      <BrowserFooter />
    </ContentLayout>
  );
}

export async function generateStaticParams() {
  const categories = await getListCategories();

  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

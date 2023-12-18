import ContentLayout from "@/app-components/ui/layout/ContentLayout";
import {
  getListCategories,
  getListCategory,
  getToolkit,
} from "@/list-toolkit/services/listServices";
import ListNotFound from "../../sections/ListNotFound";
import ToolkitContent from "../../sections/ToolkitContent";
import ToolkitHero from "../../sections/ToolkitHero";
import ListCategories from "../../sections/ListCategories";
import ListSeparator from "../../sections/ListSeparator";
import FooterContent from "@/app-components/ui/footer/FooterContent";
import LandingPageFooter from "@/app-components/ui/footer/LandingPageFooter";
import BrowserFooter from "@/app-components/ui/footer/BrowserFooter";
import ListToolkit from "../../sections/ListToolkit";

export default async function page({
  params,
}: {
  params: { slug: string; category: string; item: string };
}) {
  const categorySlug = params.category;
  const itemSlug = params.item;
  const category = await getListCategory(categorySlug);
  const toolkitItem = await getToolkit(itemSlug, categorySlug);
  if (!toolkitItem || !toolkitItem.slug || !category || !category.slug) {
    return <ListNotFound />;
  }

  const listCategories = await getListCategories();

  const listSimilar = category.list?.filter(
    (toolkit) => toolkit.slug !== toolkitItem.slug
  );
  return (
    <ContentLayout withXPageMargin={true} withMaxWidth={true}>
      <ToolkitHero
        title={toolkitItem.title}
        toolkit={toolkitItem}
        category={category}
      />
      <ToolkitContent toolkit={toolkitItem} />
      {listSimilar && (
        <>
          <ListSeparator className="mt-8" />
          <ListToolkit title="Similar" className="mt-8 mb-8" listToolkit={listSimilar} />
        </>
      )}
      <ListSeparator className="mt-8" />
      <ListCategories className="mt-8 mb-8" categories={listCategories} />
      <BrowserFooter />
    </ContentLayout>
  );
}

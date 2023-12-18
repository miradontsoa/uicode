import ContentLayout from "@/app-components/ui/layout/ContentLayout";
import ListHero from "./sections/ListHero";
import ListCategories from "./sections/ListCategories";
import ListToolkit from "./sections/ListToolkit";
import ListSeparator from "./sections/ListSeparator";
import {
  getListCategories,
  getListFeaturedToolkit,
} from "@/list-toolkit/services/listServices";
import BrowserFooter from "@/app-components/ui/footer/BrowserFooter";

export const metadata = {
  title: "Components - React UI Components",
  description:
    "Discover high-quality React UI Components crafted with the power of React.js and CSS modules",
};

export default async function ReactListPage({}) {
  const listCategories = await getListCategories();
  const listFeaturedToolkit = await getListFeaturedToolkit();

  return (
    <ContentLayout withXPageMargin={true} withMaxWidth={true}>
      <ListHero className="mt-8 lg:mt-8" />
      {/* <ListSeparator className="" /> */}
      <ListCategories className="mt-4 lg:mt-0 mb-8 " categories={listCategories} />
      <ListSeparator />
      <ListToolkit title="Featured" className="mt-8" listToolkit={listFeaturedToolkit} />
      <BrowserFooter />
    </ContentLayout>
  );
}

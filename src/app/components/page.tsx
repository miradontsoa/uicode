import ArticleLayout from "@/app-components/blog/ArticleLayout";
import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import ComponentCategoriesList from "@/app-components/ui/list/ComponentCategoriesList";
import { MenuItem } from "@/types";

export const metadata = {
  title: "UI Component Code for React - List of Components",
  description:
    "Discover high-quality React UI Components crafted with the power of React and CSS modules",
};

export default function ComponentsPage({}) {
  // const works = await getFeaturedWorks();
  const breadcrumbItems: MenuItem[] = [
    { slug: "components", title: "Components" },
  ];
  const parentPath = "/components";
  return (
    <ArticleLayout>
      <Breadcrumb className={"breadcrumb"} items={breadcrumbItems} />
      <h2 className={"title"}>Components</h2>
      <div className="max-w-3xl">
        <p>
          Hey there! I curated a collection of typical React UI components,
          ranging from atomic components like buttons to more substantial ones
          such as forms, navigation, and beyond. Each component is crafted using
          React and CSS modules.
        </p>
        <p>
          Feel free to browse through them, and then simply copy a snippet and
          paste it into your project.
          {/* <br />
          Happy exploring! 🚀 */}
        </p>
      </div>
      <div className="mt-8">
        <ComponentCategoriesList parentPath={parentPath} />
      </div>
    </ArticleLayout>
  );
}

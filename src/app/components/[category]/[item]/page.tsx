import ArticleLayout from "@/app-components/blog/ArticleLayout";
import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import { ItemHeader } from "@/app-components/ui/headers/ItemHeader";
import TextWithIcon from "@/app-components/ui/text/TextWithIcon";
import CodeBrowser from "@/app-components/ui/widgets/CodeBrowser";
import { CodeWidget } from "@/app-components/ui/widgets/CodeWidget";
import { getCode, getMarkdown } from "@/services/codeServices";
import {
  getCategory,
  getComponent,
  getComponentCategories,
  getComponents,
} from "@/services/componentServices";
import { MenuItem } from "@/types";
import {
  BookOpenIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { notFound } from "next/navigation";
import ComponentExample from "./component-example";
// import { MDXRemote } from "next-mdx-remote/rsc";

import DesignFileFrame from "@/app-components/ui/widgets/DesignFileFrame";
import DocumentationFrame from "@/app-components/ui/widgets/DocumentationFrame";


export default async function ComponentItemPage({
  params,
}: {
  params: { slug: string; category: string; item: string };
}) {
  const categorySlug = params.category;
  const itemSlug = params.item;
  const category = await getCategory(categorySlug);
  const componentItem = await getComponent(itemSlug, categorySlug);
  // console.log(componentItem)
  if (!componentItem || !componentItem.slug) {
    return <div>Component not found</div>
    // notFound();
  }

  // const componentName = componentItem.;
  // const componentFolder = "product-items/product-item-a";
  const reactCode = await getCode(
    `components/${categorySlug}/${itemSlug}/${itemSlug}.tsx`
  );
  const styleCode = await getCode(
    `components/${categorySlug}/${itemSlug}/${itemSlug}.module.css`
  );
  const demoCode = await getCode(
    `components/${categorySlug}/${itemSlug}/example.tsx`
  );
  const documentation = await getMarkdown(
    `components/${categorySlug}/${itemSlug}/documentation.md`
  );

  const sidebarMenuItems = [
    {
      title: "Preview",
      href: "#preview",
    },
    {
      title: "Source code",
      href: "#code",
    },
    {
      title: "Design",
      href: "#design",
    },
    {
      title: "Documentation",
      href: "#documentation",
    },
  ];

  const breadcrumbItems: MenuItem[] = [
    { slug: "components", title: "Components" },
    { slug: categorySlug, title: category?.title },
    { slug: itemSlug, title: componentItem?.title },
  ];

  const tabItems = [
    {
      title: `${itemSlug}.tsx`,
      slug: "tsx",
      content: (
        <CodeWidget
          content={reactCode?.content}
          markdown={reactCode?.markdown}
        />
      ),
    },
    {
      title: `${itemSlug}.module.css`,
      slug: "css",
      content: (
        <CodeWidget
          content={styleCode?.content}
          markdown={styleCode?.markdown}
        />
      ),
    },
  ];
  demoCode?.content &&
    tabItems.push({
      title: "Example",
      slug: "demo",
      content: (
        <CodeWidget content={demoCode?.content} markdown={demoCode?.markdown} />
      ),
    });
  return (
    <ArticleLayout
      sidebarMenuItems={sidebarMenuItems}
      width={componentItem?.previewWidth}
    >
      <Breadcrumb className={"breadcrumb"} items={breadcrumbItems} />
      <div className="content-width-medium">
        <ItemHeader title={componentItem.title}>
          {componentItem.description && <p>{componentItem.description}</p>}
        </ItemHeader>
        <h3 id="preview" className="heading-3">
          {/* <TextWithIcon iconElement={<IconPreview />}>Preview</TextWithIcon> */}
          <TextWithIcon iconElement={<PlayIcon className="w-5" />}>
            Preview
          </TextWithIcon>
        </h3>
      </div>

      <div className="widget-demo">
        <ComponentExample slug={itemSlug} categorySlug={categorySlug} />
      </div>

      <div className="content-width-medium">
        <h3 id="code" className="heading-3">
          <TextWithIcon
            iconElement={
              // <IconCode />
              <CodeBracketIcon className="w-5" />
            }
          >
            Code
          </TextWithIcon>
        </h3>
        <CodeBrowser tabs={tabItems} item={componentItem} />

        <h3 id="design" className="heading-3">
          <TextWithIcon iconElement={<PaintBrushIcon className="w-5" />}>
            Design
          </TextWithIcon>
        </h3>
        <DesignFileFrame item={componentItem} />

        {documentation && (
          <>
            <h3 id="documentation" className="heading-3">
              <TextWithIcon iconElement={<BookOpenIcon className="w-5" />}>
                Documentation
              </TextWithIcon>
            </h3>
            <DocumentationFrame content={documentation} item={componentItem} />
            {/* <MarkdownContent className={"article-doc"} content={documentation} /> */}
            {/* <MDXRemote source={documentation} /> */}
          </>
        )}
      </div>
    </ArticleLayout>
  );
}

export async function generateStaticParams() {
  /* 
  // example: 
  const componentsParams = [
    {
      category: "button",
      item: "button-a",
    },
    {
      category: "button",
      item: "button-b",
    },
    {
      category: "button",
      item: "button-c",
    },
    {
      category: "button",
      item: "button-d",
    },
  ]; */
  const categories = await getComponentCategories();
  let componentsParams: {
    category?: string;
    item?: string;
  }[] = [];
  await categories.forEach(async (cat) => {
    const compos = await getComponents({ categorySlug: cat.slug });
    if (compos?.length > 0) {
      const compoParam = compos.map((compo) => {
        return { category: cat.slug, item: compo.slug };
      });
      componentsParams = [...componentsParams, ...compoParam];
    }
  });

  return componentsParams;
}

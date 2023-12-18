import ListItemApp from "@/app-components/ui/list/ListItemApp";
import SectionA from "@/app-components/ui/sections/SectionA";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  className?: string;
  categorySlug: string;
  category: ListCategoryType;
  listToolkit: ToolkitType[];
};

export default function CategoryListToolkit({
  className,
  categorySlug,
  category,
  listToolkit,
}: Props) {
  return (
    <SectionA
      className={clsx("lp-section", className)}
      withXPageMargin={false}
      paddingTop={"none"}
      paddingBottom={"none"}
      contentWidth={"full"}
    >
      {/* <h2 className="title-3">Featured</h2>
      <p>Here are a few featured tools and utilities related to React.</p> */}
      <div className="mt-4 mb-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {listToolkit?.map((toolkit, index) => {
            const logoImage = toolkit?.logoImage
              ? `/logo/${toolkit.logoImage}`
              : category?.logoImage
              ? `/logo/${category.logoImage}`
              : `/logo/default.svg`;
            return (
              <Link
                href={`/list/${categorySlug}/${toolkit.slug}`}
                key={toolkit.slug}
              >
                <ListItemApp
                  title={toolkit.title}
                  viewText="View"
                  imageSrc={`${logoImage}`}
                  // imageElement={toolkit.logoElement}
                >
                  {toolkit.shortDescription ?? toolkit.description}
                </ListItemApp>
              </Link>
            );
          })}
        </div>
      </div>
    </SectionA>
  );
}

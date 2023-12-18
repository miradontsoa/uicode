import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import ListItemApp from "@/app-components/ui/list/ListItemApp";
import SectionA from "@/app-components/ui/sections/SectionA";
import ListIcon from "@/list-toolkit/components/ListIcon";
import clsx from "clsx";
import Link from "next/link";

type Props = { className?: string; categories: ListCategoryType[] };

export default function ListCategories({ className, categories }: Props) {
  return (
    <SectionA
      className={clsx("lp-section", className)}
      withXPageMargin={false}
      paddingTop={"none"}
      paddingBottom={"none"}
      contentWidth={"full"}
    >
      <h2 className="title-3">Categories</h2>
      <p>Browse toolkit by category (more coming soon)</p>
      <div className="mt-8">
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              href={`/list/${category.slug}`}
              key={category.slug ?? `category-${index}`}
            >
              <ListItemApp
                title={category.title}
                viewText="Explore"
                imageElement={
                  <ListIcon iconName={category.iconName ?? category.slug} />
                }
              >
                {category.shortDescription ?? category.description}
              </ListItemApp>
            </Link>
          ))}
        </div>
      </div>
    </SectionA>
  );
}

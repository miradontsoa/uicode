import ListItemApp from "@/app-components/ui/list/ListItemApp";
import SectionA from "@/app-components/ui/sections/SectionA";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  className?: string;
  title: string;
  description?: string;
  listToolkit: ToolkitType[];
};

export default function ListToolkit({
  className,
  title,
  description,
  listToolkit,
}: Props) {
  return (
    <SectionA
      className={clsx("lp-section", className)}
      withXPageMargin={false}
      // paddingTop={!title ? "none" : "medium"}
      paddingTop={"none"}
      paddingBottom={"none"}
      contentWidth={"full"}
    >
      {title && <h2 className="title-3">{title}</h2>}
      {description && <p>{description}</p>}
      <div className="mt-8">
        <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-4 lg:gap-8">
          {listToolkit?.map((toolkit, index) => {
            const logoImage = toolkit?.logoImage
              ? `/logo/${toolkit.logoImage}`
              : `/logo/default.svg`;
            return (
              <Link
                href={`/list/${toolkit.category}/${toolkit.slug}`}
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

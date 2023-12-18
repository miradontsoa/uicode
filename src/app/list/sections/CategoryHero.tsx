import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import SectionA from "@/app-components/ui/sections/SectionA";
import clsx from "clsx";
import React from "react";

type Props = { title: string; desc?: React.ReactNode; slug: string };

export default function CategoryHero({ title, slug, desc }: Props) {
  return (
    <SectionA
      className={clsx("lp-section text-content-medium")}
      withXPageMargin={false}
      paddingTop={"medium"}
      paddingBottom={"none"}
      contentWidth={"full"}
    >
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: "List",
            href: "/list",
            slug: "list",
          },
          {
            title: title ?? "Hosting",
            href: `/list/${slug}`,
            slug: `${slug}`,
          },
        ]}
      />
      <div className="grid lg:grid-cols-3 gap-x-12">
        <div className="col col-span-2">
          <h2 className={"title-page-1 mb-4"}>{title}</h2>
          {desc && <div className="max-w-3xl">{desc}</div>}
        </div>
        <div className="col"></div>
      </div>
    </SectionA>
  );
}

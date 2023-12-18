import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import SectionA from "@/app-components/ui/sections/SectionA";
import clsx from "clsx";
import React from "react";

type Props = {};

export default function ListNotFound({}: Props) {
  return (
    <SectionA
      className={clsx("lp-section text-content-medium")}
      withXPageMargin={false}
      paddingTop={"medium"}
      paddingBottom={"medium"}
      contentWidth={"medium"}
    >
      <div className="grid lg:grid-cols-3 gap-x-12">
        <div className="col col-span-2">
          <h2 className={"title-3 text-primary max-w-md"}>Not found</h2>
          <div className="max-w-3xl">Page not found</div>
        </div>
        <div className="col"></div>
      </div>
    </SectionA>
  );
}

import SubscriptionFormApp from "@/app-components/ui/form/SubscriptionFormApp";
import SectionA from "@/app-components/ui/sections/SectionA";
import clsx from "clsx";
import React from "react";

type Props = {className?: string};

export default function ListHero({className}: Props) {
  return (
    <SectionA
      className={clsx("lp-section text-content-medium", className)}
      withXPageMargin={false}
      paddingTop={"medium"}
      contentWidth={"full"}
    >
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-8">
        <div className="col md:col-span-2 lg:col-span-3">
          <h2 className={"title-1 text-primary max-w-md"}>
            {/* React Related Curated List */}
            List of tools for React developer
          </h2>
          <div className="max-w-3xl">
            <p>
            List of tools, utilities, website, platform for React developer.
              Discover a curated collection of React related list of tools,
              hosting, courses, job listing...
            </p>
          </div>
        </div>
        <div className="col">
          <div className="lg:mt-0 mt-5">
            <SubscriptionFormApp emailIcon={null}>
              <p className="mb-4">Hey, subscribe to get latest update or React related interesting stuff</p>
            </SubscriptionFormApp>
          </div>
        </div>
      </div>

    </SectionA>
  );
}

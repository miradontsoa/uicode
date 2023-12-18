import ButtonApp from "@/app-components/ui/buttons/ButtonApp";
import FeatureItemLanding from "@/app-components/ui/features/FeatureItemLanding";
import SectionA from "@/app-components/ui/sections/SectionA";
import PRODUCT from "@/const/products";
import {
  CodeBracketIcon,
  GiftIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";

export default function HomeLandingFeatures() {
  return (
    <>
      <SectionA
        className={classNames("lp-section text-content-medium")}
        withXPageMargin={true}
        paddingTop={"large"}
        paddingBottom={"large"}
        contentWidth={"medium"}
      >
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
          <div className="col">
            <div className="w-full">
              <h3 className={"title-2 text-primary lg:w-9/12"}>
                Diverse set of component code templates, and design files.
              </h3>
            </div>
          </div>
          <div className="item ">
            <div className="text-paragraphs">
              <h5 className="subtitle-1 text-primary">
                Extensive set of components
              </h5>
              <p>
                From atomic components like buttons to more complex ones such as
                forms or navigation, you can find various React component codes
                here, crafted with TypeScript and styled with CSS modules. You
                can copy and paste these components and modify them as needed.
              </p>
              {/* <h5 className="subtitle-1 text-primary">Figma design file</h5>
              <p>
                Figma design file is available. It is not fully updated yet but
                I provide it anyway since you or your designer may want it.
              </p> */}
            </div>

            <div className="mt-6">
              <div className="flex gap-2">
                <div>
                  <Link href={"components"}>
                    <ButtonApp height="large">Explore Components</ButtonApp>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="opacity-20 border-primary mt-8 mb-8"></hr>

        <div
          className={classNames(
            "features-three-grid",
            "grid lg:grid-cols-3 gap-8 mt-8"
          )}
        >
          <div className="item">
            <FeatureItemLanding
              icon={<CodeBracketIcon className="w-8" />}
              title={"A lot of components"}
              description={
                <>
                  In this platform, you can browse, copy, and paste over{" "}
                  {PRODUCT.COMPONENTS_COUNT} components (without counting the
                  variants or examples). I also frequently add new components.
                </>
              }
            />
          </div>
          <div className="item">
            <FeatureItemLanding
              icon={<GiftIcon className="w-8" />}
              title={"Free and open source"}
              description={
                <>
                  Want to see the components in action?{" "}
                  <Link href={"/components"}>
                    You can explore the codes of these components
                  </Link>{" "}
                  and copy the codes that interest you (MIT License).
                </>
              }
            />
          </div>
          <div className="item">
            <FeatureItemLanding
              icon={<RectangleGroupIcon className="w-8" />}
              title={"Design files"}
              description={
                <>
                  I understand that you may want the design files, so we offer
                  the design files in Figma and SVG formats.
                </>
              }
            />
          </div>
        </div>
      </SectionA>
    </>
  );
}

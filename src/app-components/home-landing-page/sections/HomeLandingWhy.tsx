import ButtonApp from "@/app-components/ui/buttons/ButtonApp";
import ButtonSolid from "@/app-components/ui/buttons/ButtonSolid";
import SectionA from "@/app-components/ui/sections/SectionA";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function HomeLandingWhy() {
  return (
    <>
      <SectionA
        className={classNames("lp-section text-content-medium")}
        withXPageMargin={true}
        paddingTop={"none"}
        paddingBottom={"large"}
        contentWidth={"medium"}
      >
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
          <div className="col">
            <div className="w-full">
              <h3 className={"title-2 text-primary lg:w-9/12"}>
                Save time and effort in React UI coding.
              </h3>
              <div className={"w-full mt-8 mb-4 lg:mb-0"}>
                <Image
                  className={"lg:w-10/12 w-full h-auto"}
                  src="/img/home-design-to-code.png"
                  alt="Design to code"
                  width={480}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="col lg:w-10/12 ">
            <div className="text-paragraphs">
              <h5 className="subtitle-1 text-primary">
                Explore, Copy and Paste
              </h5>
              <p>
                Simplify your React project development and save time with these
                React code templates for common UI patterns. Explore, then just{" "}
                <strong>copy and paste</strong>.
              </p>
              <h5 className="subtitle-1 text-primary mt-6">
                Fully customizable
              </h5>
              <p>
                Get the code and customize it to fit your needs. Use it with
                your favorite library or framework. By the way, the example
                usage codes use Tailwind CSS, Heroicons, Radix UI...
              </p>
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
      </SectionA>
    </>
  );
}

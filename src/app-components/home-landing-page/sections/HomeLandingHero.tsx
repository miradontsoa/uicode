import SectionA from "@/app-components/ui/sections/SectionA";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeLandingHero.module.css";
import ButtonApp from "@/app-components/ui/buttons/ButtonApp";
import classNames from "classnames";
import IconReact from "@/app-components/ui/icons/IconReact";
import IconFigma from "@/app-components/ui/icons/IconFigma";
import IconTypeScript from "@/app-components/ui/icons/IconTypeScript";
import IconCSS from "@/app-components/ui/icons/IconCSS";
export default function HomeLandingHero() {
  return (
    <SectionA
      className={classNames(styles["section"], "lp-section text-content-large")}
      withXPageMargin={true}
      paddingTop={"large"}
      paddingBottom={"large"}
      contentWidth={"medium"}
    >
      <div className="grid lg:grid-cols-2 gap-x-8">
        <div className="col mb-8 lg:mb-0">
          <div className="lg:w-9/12">
            <h2 className={"text-primary title-1"}>React UI Components</h2>
            {/* <p>
              This toolkit provides out-of-the-box copy and paste ready-to-use React web UI components built with
              TypeScript and CSS. Figma design file is also available.
            </p> */}
            <p>
              Hey there! I have curated a collection of typical React UI
              components built with TypeScript and CSS modules. A Figma design
              file is also available.
            </p>
            <div className={classNames(styles["icon-group"], "mt-4")}>
              <div className={styles["icon"]}>
                <IconReact className={styles["icon-element"]} />
              </div>
              <div className={styles["icon"]}>
                <IconFigma className={styles["icon-element"]} />
              </div>
              <div className={styles["icon"]}>
                <IconTypeScript className={styles["icon-element"]} />
              </div>
              <div className={styles["icon"]}>
                <IconCSS className={styles["icon-element"]} />
              </div>
            </div>
            <div className="mt-6">
              <Link href={"/components"}>
                <ButtonApp height="large">Explore Components</ButtonApp>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={styles["image-wrapper"]}>
            <Image
              className={styles["image"]}
              src={"/img/home-hero-image.png"}
              blurDataURL={"/img/home-hero-image-blur.png"}
              alt="useractjs, React ui components and page templates"
              width={960}
              height={960}
            />
          </div>
        </div>
      </div>
    </SectionA>
  );
}

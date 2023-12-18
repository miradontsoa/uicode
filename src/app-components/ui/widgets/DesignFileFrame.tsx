"use client";

import { ComponentItem } from "@/types";
import { PlayIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import ButtonApp from "../buttons/ButtonApp";
import styles from "./DesignFileFrame.module.css";

export default function DesignFileFrame({
  className,
  children,
  item,
}: {
  className?: string;
  children?: React.ReactNode;
  item?: ComponentItem;
}) {
  // const user = useUser();
  // const userAccountType = user?.accountType;

  const figmaDownloadButton = (
    <div className="btns-group-a">
      <div>
        <a
          href={
            item?.figma ||
            "https://www.figma.com/file/c3QvL73VleYGqv4o8XXt4m/UI-Components?type=design&t=HSsDXGexK0KThPA3-1"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          <ButtonApp type="link" variant="outline">
            <PlayIcon className="w-6" />
            <span className="ml-2">View in Figma</span>
          </ButtonApp>
        </a>
      </div>
    </div>
  );

  // Paid vestion
  let figmaSection = <>{figmaDownloadButton}</>;
  /* let figmaSection = <></>;

  if (userAccountType === "premium") {
    figmaSection = <>{figmaDownloadButton}</>;
  } else {
    figmaSection = <UnlockInviteFrame />;
  } */

  return (
    <div className={classNames(styles["wrapper"], className)}>
      {/* <p className="mb-4">Here are the design files (Figma, SVG)</p> */}
      <h6 className="mb-4">Figma design file:</h6>
      <div className="flex gap-2">{figmaSection}</div>
      {/*<h6 className="mb-4 mt-4">SVG design elements:</h6>
       <div className="flex gap-2">
        <div>
          <a href={`${DESIGN.SVG_GITHUB}`} rel="noreferrer" target={"_blank"}>
            <ButtonApp type="link" variant="outline">
              <IconGithub className="w-6" />
              <span className="ml-2">SVG Design</span>
            </ButtonApp>
          </a>
        </div>
      </div> */}
      <div className="flex gap-2"></div>
      {children}
    </div>
  );
}

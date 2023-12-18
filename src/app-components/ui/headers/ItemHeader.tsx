"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ButtonSolid from "../buttons/ButtonSolid";
import IconCode from "../icons/IconCode";
import styles from "./ItemHeader.module.css";

export const ItemHeader = ({
  id,
  className,
  title,
  children,
}: {
  id?: string;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <div id={id} className={[className, styles["item-header"]].join(" ")}>
      <div>
        <h2 className={"title"}>{title}</h2>
        {/* <div className="mb-3 btns-group-a">
          <Link href={`${pathname}/code`}>
            <ButtonSolid
              iconElement={<IconCode />}
              textElement="View Code"
              size="small"
            />
          </Link>
        </div> */}
      </div>
      <div>{children}</div>
    </div>
  );
};

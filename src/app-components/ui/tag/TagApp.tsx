import classNames from "classnames";
import React from "react";
import styles from "./TagApp.module.css";

type Props = {
  children: React.ReactNode;
  variant: "gray" | "primary";
};

export default function TagApp({ children, variant }: Props) {
  return (
    <div className={classNames(styles["tag"], styles[`tag-${variant}`])}>
      {children}
    </div>
  );
}

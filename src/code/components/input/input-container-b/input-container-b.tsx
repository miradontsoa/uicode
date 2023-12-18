import React from "react";
import styles from "./input-container-b.module.css";

type Props = {
  className?: string;
  children: React.ReactNode;
  label?: React.ReactNode;
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  size?: "medium" | "large";
  width?: "auto" | "full";
  height?: "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  border?: "none" | "thin" | "medium" | "thick";
  labelBorder?: "auto" | "none" | "thin" | "medium" | "thick";
  shadow?: "none" | "medium" | "flat";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue";
};
export default function InputContainerB({
  className,
  children,
  label,
  beforeElement,
  afterElement,
  size = "medium",
  width = "auto",
  height = "medium",
  rounded,
  border = "none",
  labelBorder = "auto",
  shadow = "medium",
  variant = "default",
}: Props) {
  return (
    <div
      className={[
        styles["input-container"],
        styles[`s-${size}`],
        styles[`h-${height}`],
        styles[`w-${width}`],
        styles[`r-${rounded}`],
        styles[`b-${border}`],
        styles[`sh-${shadow}`],
        styles[`variant-${variant}`],
        label && styles[`with-label`],
        className,
      ].join(" ")}
    >
      {label && (
        <label
          className={[styles["label"], styles[`lb-${labelBorder}`]].join(" ")}
        >
          {label}
        </label>
      )}
      {beforeElement && (
        <div className={styles["before-element"]}>{beforeElement}</div>
      )}
      <div className={styles["input-wrapper"]}>{children}</div>
      {afterElement && (
        <div className={styles["after-element"]}>{afterElement}</div>
      )}
    </div>
  );
}

import React from "react";
import styles from "./ButtonApp.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  iconOnly?: boolean;
  size?: "x-small" | "small" | "medium" | "large" | "full";
  type?: "button" | "submit" | "reset" | "link";
  width?: "auto" | "full";
  height?: "auto" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  shadow?: "none" | "small" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?:
    | "default"
    | "light"
    | "dark"
    | "outline"
    | "outline-danger"
    | "outline-light"
    | "transparent"
    | "gray"
    | "gradient"
  // Optional event handler
  onClick?: React.MouseEventHandler;
};
export default function ButtonApp({
  children,
  className,
  type = "button",
  iconOnly,
  size = "medium",
  height = "auto",
  width = "auto",
  rounded = "large",
  shadow = "medium",
  variant = "gradient",
  onClick,
}: Props) {
  const _classNames = [
    styles["button"],
    styles[`h-${height}`],
    styles[`s-${size}`],
    styles[`w-${width}`],
    styles[`r-${rounded}`],
    styles[`sh-${shadow}`],
    styles[`variant-${variant}`],
    iconOnly && styles[`icon-only`],
    className,
  ].join(" ");

  // type of the button
  if (type === "link") {
    // Link button should be embedded inside an <a href=... > tag or <Link href=...> if you use Next.js
    return (
      <span onClick={onClick} className={_classNames}>
        {children}
      </span>
    );
  } else {
    return (
      <button onClick={onClick} className={_classNames} type={type}>
        {children}
      </button>
    );
  }
}

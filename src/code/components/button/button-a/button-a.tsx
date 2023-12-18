import React from "react";
import styles from "./button-a.module.css";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | "link";
  iconOnly?: boolean;
  size?: "x-small" | "small" | "medium" | "large";
  width?: "auto" | "full";
  height?: "auto" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  shadow?: "none" | "small" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?:
    | "default"
    | "light"
    | "blue"
    | "light-blue"
    | "red"
    | "light-red"
    | "transparent"
    | "gradient";
  // Optional event handler
  onClick?: React.MouseEventHandler;
};
export default function ButtonA({
  className,
  style,
  children,
  type = "button",
  iconOnly,
  size = "medium",
  width = "auto",
  height = "auto",
  rounded = "small",
  shadow = "medium",
  variant = "default",
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
      <span onClick={onClick} className={_classNames} style={style}>
        {children}
      </span>
    );
  } else {
    return (
      <button onClick={onClick} className={_classNames} style={style} type={type}>
        {children}
      </button>
    );
  }
}

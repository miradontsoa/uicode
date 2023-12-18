import React from "react";
import styles from "./button-e.module.css";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | "link";
  iconElement?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "x-small" | "small" | "medium" | "large";
  width?: "auto" | "full";
  height?: "auto" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  shadow?: "none" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "purple" | "light-blue" | "red" ;
  // Optional event handler
  onClick?: React.MouseEventHandler;
};
export default function ButtonE({
  className,
  style,
  children,
  type = "button",
  iconElement,
  iconPosition = "right",
  size = "medium",
  height = "auto",
  width = "auto",
  rounded = "full",
  shadow = "medium",
  variant = "default",
  onClick,
}: Props) {
  const _classNames = [
    styles["button"],
    styles[`s-${size}`],
    styles[`h-${height}`],
    styles[`w-${width}`],
    styles[`r-${rounded}`],
    styles[`sh-${shadow}`],
    styles[`variant-${variant}`],
    !children && styles[`icon-only`],
    className
  ].join(" ");

  const content = (
    <>
      {iconElement && iconPosition === "left" && (
        <span className={[styles["icon"], styles["icon-left"]].join(" ")} style={style}>
          {iconElement}
        </span>
      )}
      {children && <span className={styles["text"]}>{children}</span>}
      {iconElement && iconPosition === "right" && (
        <span className={[styles["icon"], styles["icon-right"]].join(" ")} style={style}>
          {iconElement}
        </span>
      )}
    </>
  );

  // type of the button
  if (type === "link") {
    // Link button should be embedded inside an <a href=... > tag or <Link href=...> if you use NextJs
    return (
      <span onClick={onClick} className={_classNames}>
        {content}
      </span>
    );
  } else {
    return (
      <button onClick={onClick} className={_classNames} type={type}>
        {content}
      </button>
    );
  }
}

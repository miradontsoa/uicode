import { Size, Color, ThemeColor } from "@/types";
import classNames from "classnames";
import React from "react";
import styles from "./ButtonSolid.module.css";

type Props = {
  className?: string;
  iconElement?: React.ReactNode;
  textElement?: React.ReactNode;
  badgeElement?: React.ReactNode;
  children?: React.ReactNode;
  iconName?: string;
  size?: Size;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  variant?: Color;
  theme?: ThemeColor;
  appearance?: "flat" | "elevated" | "minimal";
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit" | "reset" | "link";
  width?: "auto" | "full";
  radius?: "full" | "small";
};
const ButtonSolid = ({
  className,
  iconElement,
  textElement,
  badgeElement,
  children,
  size = "medium",
  width = "auto",
  variant = "primary",
  theme = "dark",
  iconPosition = "right",
  radius = "small",
  iconOnly = false,
  appearance = "elevated",
  type = "button",
  onClick,
}: Props) => {
  const _classNames = classNames(
    // "btn",
    styles.btnSA,
    styles.primary,
    styles[variant],
    // iconOnly && styles.iconOnly,
    styles[`theme-${theme}`],
    styles[`appearance-${appearance}`],
    styles[`width-${width}`],
    styles[`radius-${radius}`],
    styles[size],
    className
  );
  const iconElementContent = (
    <span className={styles.icon}>
      {iconElement}
      {/* <Icon name={iconName} size={"small"} /> */}
    </span>
  );
  const content = (
    <>
      {iconElement && iconPosition === "left" && iconElementContent}
      {children}
      {textElement && <span className={styles.text}>{textElement}</span>}
      {iconElement && iconPosition === "right" && iconElementContent}
      {badgeElement && <span className={styles.badge}>{badgeElement}</span>}
    </>
  );

  if (type === "link") {
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
};
export default ButtonSolid;

import React, { CSSProperties, ReactNode } from "react";
import styles from "./button-group-b.module.css";

// ButtonItem type (element of buttons array of the ButtonGroupA)
type ButtonItemType = {
  icon?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset" | "link" | "static";
  href?: string;
  iconOnly?: boolean;
  iconPosition?: "before-text" | "after-text";
  active?: boolean;

  // Put additional variants here, then define them in the CSS as .btn-color-XXX
  variant?:
    | "default"
    | "light"
    | "light-opaque"
    | "dark"
    | "dark-opaque"
    | "blue";

  // Optional event handler
  onClick?: React.MouseEventHandler;
};

// Button Component
function ButtonItem({
  content,
  icon,
  style,
  className,
  active,
  iconOnly,
  iconPosition = "before-text",
  type,
  variant,
  href,
  onClick,
}: ButtonItemType) {
  const _classNames = [
    styles["button"],
    styles[`btn-color-${variant}`],
    styles[`icon-${iconPosition}`],
    active && styles[`active`],
    type === "static" && styles[`static`],
    iconOnly && styles[`icon-only`],
    className,
  ].join(" ");

  const buttonContent = (
    <>
      {icon && <span className={styles["icon"]}>{icon}</span>}
      {content && !iconOnly && (
        <span className={styles["text"]}>{content}</span>
      )}
    </>
  );
  // type of the button
  if (type === "link" || href) {
    // You may need to replace the <a ...> element with a Link if you use Next or Remix.
    return (
      <a
        href={href}
        onClick={onClick}
        className={_classNames}
        style={style}
        title={`${content}`}
      >
        {buttonContent}
      </a>
    );
  } else if (type === "static") {
    // Static such as text only
    return (
      <span onClick={onClick} className={_classNames} style={style}>
        {buttonContent}
      </span>
    );
  } else {
    // Button
    return (
      <button
        type={type}
        className={_classNames}
        style={style}
        onClick={onClick}
        title={`${content}`}
      >
        {buttonContent}
      </button>
    );
  }
}

// ButtonGroupA props
type Props = {
  className?: string;
  buttons?: ButtonItemType[];
  size?: "x-small" | "small" | "medium" | "large";
  width?: "fit" | "full";
  gap?: "none" | "small" | "medium";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  // Put additional variants here, then define them in the CSS as .color-XXX
  variant?:
    | "default"
    | "light"
    | "light-opaque"
    | "dark"
    | "dark-opaque"
    | "blue";
};

export default function ButtonGroupB({
  buttons,
  className,
  size = "medium",
  width = "fit",
  gap = "medium",
  rounded = "medium",
  variant = "default",
}: Props) {
  return (
    <div
      className={[
        styles["group"],
        styles[`s-${size}`],
        styles[`w-${width}`],
        styles[`g-${gap}`],
        styles[`r-${rounded}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      {buttons?.map((buttonItem, index) => {
        return (
          <ButtonItem
            key={`button-${index}`}
            {...buttonItem}
            variant={buttonItem.variant || variant}
          />
        );
      })}
    </div>
  );
}

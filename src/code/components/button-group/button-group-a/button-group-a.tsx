import React, { CSSProperties } from "react";
import styles from "./button-group-a.module.css";

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
  border?: "none" | "thin" | "medium" | "thick";
  // Put additional variants here, then define them in the CSS as .btn-color-XXX
  variant?:
    | "default"
    | "light"
    | "dark"
    | "blue"
    | "light-blue"
    | "red"
    | "light-red"
    | "gradient";

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
  border,
  variant,
  href,
  onClick,
}: ButtonItemType) {
  const _classNames = [
    styles["button"],
    styles[`btn-bd-${border}`],
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
  rounded?: "none" | "small" | "medium" | "large" | "full";
  border?: "none" | "thin" | "medium" | "thick";
  shadow?: "none" | "small" | "medium" | "flat-small" | "flat-medium";
  // Put additional variants here, then define them in the CSS as .color-XXX
  variant?:
    | "default"
    | "light"
    | "dark"
    | "blue"
    | "light-blue"
    | "red"
    | "light-red";
};

export default function ButtonGroupA({
  buttons,
  className,
  size = "medium",
  width = "fit",
  rounded = "medium",
  shadow = "medium",
  border = "none",
  variant = "default",
}: Props) {
  return (
    <div
      className={[
        styles["group"],
        styles[`s-${size}`],
        styles[`w-${width}`],
        styles[`r-${rounded}`],
        styles[`sh-${shadow}`],
        styles[`bd-${border}`],
        border && border !== "none" && styles[`with-border`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      {buttons?.map((buttonItem, index) => {
        return (
          <ButtonItem
            key={`button-${index}`}
            {...buttonItem}
            border={border}
            variant={buttonItem.variant || variant}
          />
        );
      })}
    </div>
  );
}

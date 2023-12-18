import React from "react";

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
export default function ButtonTailwindA({
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
    // styles["button"],
    // styles[`h-${height}`],
    // styles[`s-${size}`],
    // styles[`w-${width}`],
    // styles[`r-${rounded}`],
    // styles[`sh-${shadow}`],
    // styles[`variant-${variant}`],
    // iconOnly && styles[`icon-only`],
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
      <button
        onClick={onClick}
        // className={_classNames}
        className={[
          "px-4 h-10 bg-indigo-500  text-white border-none outline-none transition hover:decoration-transparent hover:bg-indigo-600",
          rounded === "none" && "rounded-none",
          rounded === "small" && "rounded-md",
          rounded === "medium" && "rounded-lg",
          rounded === "large" && "rounded-2xl",
          rounded === "full" && "rounded-full",
          shadow === "small" && "shadow-sm",
          shadow === "medium" && "shadow-md",
          className,
        ].join(" ")}
        style={style}
        type={type}
      >
        {children}
      </button>
    );
  }
}

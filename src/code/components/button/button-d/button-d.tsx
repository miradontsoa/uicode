import styles from "./button-d.module.css";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | "link";
  iconOnly?: boolean;
  size?: "x-small" | "small" | "medium" | "large";
  width?: "auto" | "full";
  height?: "auto" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  border?: "thin" | "medium" | "thick";
  shadow?: "small" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "black" | "blue" | "red"  ;
  // Optional event handler
  onClick?: React.MouseEventHandler;
};
export default function ButtonD({
  className,
  style,
  children,
  type = "button",
  iconOnly,
  size,
  width,
  height = "auto",
  rounded = "medium",
  border="medium",
  shadow = "medium",
  variant = "default",
  onClick,
}: Props) {
  // button classes
  const _classNames = [
    styles["button"],
    styles[`s-${size}`],
    styles[`h-${height}`],
    styles[`w-${width}`],
    styles[`r-${rounded}`],
    styles[`bd-${border}`],
    styles[`sh-${shadow}`],
    styles[`variant-${variant}`],
    iconOnly && styles[`icon-only`],
    className
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

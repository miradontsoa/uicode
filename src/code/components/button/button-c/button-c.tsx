import styles from "./button-c.module.css";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | "link";
  iconOnly?: boolean;
  size?: "x-small" | "small" | "medium" | "large";
  width?: "auto" | "full";
  height?: "auto" | "medium" | "large";
  border?: "thin" | "medium" | "thick";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  shadow?: "none" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "black" | "light-blue" | "dark-blue" | "red";
  // Optional event handler
  onClick?: React.MouseEventHandler;
};
export default function ButtonC({
  className,
  style,
  children,
  type = "button",
  iconOnly,
  size,
  height = "auto",
  border = "medium",
  width,
  rounded = "medium",
  shadow = "none",
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
    className,
  ].join(" ");

  // type of the button
  if (type === "link") {
    // Link button should be embedded inside an <a href=... > tag or <Link href=...> if you use Next.js
    return (
      <span onClick={onClick}  style={style} className={_classNames}>
        {children}
      </span>
    );
  } else {
    return (
      <button onClick={onClick}  style={style} className={_classNames} type={type}>
        {children}
      </button>
    );
  }
}

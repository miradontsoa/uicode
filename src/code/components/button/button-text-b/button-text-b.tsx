import styles from "./button-text-b.module.css";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | "link";
  size?: "x-small" | "small" | "medium" | "large";
  width?: "auto" | "full";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "black" | "blue" | "dark-blue" | "red" | "dark-red";
  // Optional event handler
  onClick?: React.MouseEventHandler;
};
export default function ButtonTextB({
  className,
  style,
  children,
  type = "button",
  size,
  width,
  variant = "default",
  onClick,
}: Props) {
  // button classes
  const _classNames = [
    styles["button"],
    styles[`s-${size}`],
    styles[`w-${width}`],
    styles[`variant-${variant}`],
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
      <button onClick={onClick} className={_classNames} type={type} style={style}>
        {children}
      </button>
    );
  }
}

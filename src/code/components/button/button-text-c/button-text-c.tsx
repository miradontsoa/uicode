import styles from "./button-text-c.module.css";

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
export default function ButtonTextC({
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
    className,
  ].join(" ");
  const content = (
    <span className={styles["content"]}>
      <span className={styles["main"]}>{children}</span>
      <span className={styles["clone"]} aria-hidden>{children}</span>
    </span>
  );

  // type of the button
  if (type === "link") {
    // Link button should be embedded inside an <a href=... > tag or <Link href=...> if you use Next.js
    return (
      <span onClick={onClick} className={_classNames} style={style}>
        {content}
      </span>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={_classNames}
        type={type}
        style={style}
      >
        {content}
      </button>
    );
  }
}

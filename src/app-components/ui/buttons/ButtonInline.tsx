import styles from "./ButtonInline.module.css";
export default function ButtonInline({
  className,
  children,
  type = "button",
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const _classNames = [styles["button"], className].join(" ");
  return (
    <button onClick={onClick} className={_classNames} type={type}>
      {children}
    </button>
  );
}

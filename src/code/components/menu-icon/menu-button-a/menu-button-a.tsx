import { useState } from "react";
import styles from "./menu-button-a.module.css";

type Props = {
  className?: string;
  initialIsOpen?: boolean;
  size?: "small" | "medium" | "large";
  // Customized color or variant
  variant?: "default" | "style-a";
  onIsOpen?: (open: boolean) => void;
};

export default function MenuButtonA({
  className,
  initialIsOpen = false,
  size,
  variant,
  onIsOpen,
}: Props) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  return (
    <button
      title="Menu"
      className={[
        className,
        styles["wrapper"],
        styles["btn-wrapper"],
        styles[`s-${size}`],
        variant && styles[`c-${variant}`],
        isOpen ? styles.open : styles.closed,
      ].join(" ")}
      onClick={() => {
        setIsOpen(!isOpen);
        onIsOpen && onIsOpen(!isOpen);
      }}
    >
      <div className={styles.bars}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </button>
  );
}

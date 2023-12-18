import { useState } from "react";
import styles from "./menu-icon-b.module.css";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  isOpen?: boolean;
  size?: "small" | "medium" | "large";
  // Customized color or variant
  variant?: "default" | "style-a";
};

export default function MenuIconB({
  className,
  isOpen = false,
  size,
  variant,
}: Props) {
  return (
    <div
      title="Menu"
      className={[
        className,
        styles["wrapper"],
        styles[`s-${size}`],
        variant && styles[`c-${variant}`],
        isOpen ? styles.open : styles.closed,
      ].join(" ")}
    >
      <div className={styles.bars}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
      </div>
    </div>
  );
}

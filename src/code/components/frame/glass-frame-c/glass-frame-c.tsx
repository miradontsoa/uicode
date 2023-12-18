import React from "react";
import styles from "./glass-frame-c.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  shadow?: "default" | "none" | "medium";
  rounded?: "none" | "small" | "medium" | "large";
  hoverAnimation?: "none" | "shadow";
  overflow?: "initial" | "hidden";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "dark" | "blue" | "flat";
};

export default function GlassC({
  className,
  children,
  shadow,
  overflow,
  hoverAnimation,
  rounded = "medium",
  variant = "default",
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[`of-${overflow}`],
        rounded && styles[`r-${rounded}`],
        shadow && styles[`sh-${shadow}`],
        hoverAnimation && styles[`ha-${hoverAnimation}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      <div className={styles["glass-wrapper"]}>{children}</div>
    </div>
  );
}

import React from "react";
import styles from "./glass-frame-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  shadow?: "default" | "none" | "medium" ;
  rounded?: "none" | "small" | "medium" | "large";
  hoverAnimation?: "none" | "shadow";
  overflow?: "initial" | "hidden";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "dark" | "flat" ;
};

export default function GlassA({
  className,
  children,
  shadow,
  overflow,
  hoverAnimation,
  rounded = "small",
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
      {children}
    </div>
  );
}

import React from "react";
import styles from "./icon-frame-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  size?: "x-small" | "small" | "medium" | "large";
  shadow?: "default" | "none" | "medium";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  hoverAnimation?: "none" | "shadow";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue" | "blue-light" | "blue-material";
};

export default function IconFrameA({
  className,
  children,
  size = "medium",
  shadow,
  hoverAnimation,
  rounded = "medium",
  variant = "default",
}: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        size && styles[`s-${size}`],
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

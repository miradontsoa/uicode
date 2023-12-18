import React from "react";
import styles from "./icon-frame-b.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  borderSize?: "small" | "medium" | "large";
  shadow?: "default" | "none" | "medium";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  hoverAnimation?: "none" | "shadow";
  // Put additional variants here, then define them in the CSS
  variant?:
    | "default"
    | "blue"
    | "blue-light"
    | "blue-light-border"
    | "blue-material";
};

export default function IconFrameB({
  className,
  children,
  size = "medium",
  borderSize = "medium",
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
        borderSize && styles[`bs-${borderSize}`],
        hoverAnimation && styles[`ha-${hoverAnimation}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

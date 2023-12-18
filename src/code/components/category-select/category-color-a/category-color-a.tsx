import classNames from "classnames";
import React, { useState } from "react";
import styles from "./category-color-a.module.css";

type ColorType = {
  slug: string;
  rgb: string;
  title?: string;
};
type Props = {
  className?: string;
  colors?: ColorType[];
  initialColorSlug?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  onSelectColor?: (colorSlug: string) => void;
};
export default function CategoryColorA({
  className,
  colors,
  initialColorSlug,
  size = "medium",
  rounded = "full",
  onSelectColor,
}: Props) {
  // Active slug state
  const [activeSlug, setActiveSlug] = useState<string>(
    initialColorSlug || (colors ? colors[0]?.slug : "")
  );
  return (
    <>
      {colors && (
        <div
          className={[
            styles["wrapper"],
            styles[`s-${size}`],
            styles[`r-${rounded}`],
            className,
          ].join(" ")}
        >
          {colors.map((color) => {
            return (
              <button
                title={color.slug}
                type="button"
                key={color.slug}
                className={[
                  styles["color-icon"],
                  activeSlug === color.slug && styles["active"],
                ].join(" ")}
                style={{
                  backgroundColor: color.rgb,
                }}
                onClick={() => {
                  setActiveSlug(color.slug);
                  onSelectColor && onSelectColor(color.slug);
                }}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

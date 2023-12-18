import { useState } from "react";
import styles from "./category-color-c.module.css";

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
              >
                {activeSlug === color.slug && (
                  <span className={styles["active-icon"]}>
                    <ActiveIcon />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

// A sample active icon, you may replace its content with another component, svg
function ActiveIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="13.69"
      height="11.201"
      style={{ width: "1em", height: "1em" }}
      viewBox="0 0 13.69 11.201"
    >
      <path
        id="checkmark"
        d="M84.356,123.2a.622.622,0,0,1-.44-.182l-3.734-3.734a.622.622,0,1,1,.88-.88l3.263,3.263,8.274-9.455a.622.622,0,1,1,.937.82l-8.712,9.956a.622.622,0,0,1-.448.212Z"
        transform="translate(-80 -112)"
        fill="currentColor"
      />
    </svg>
  );
}

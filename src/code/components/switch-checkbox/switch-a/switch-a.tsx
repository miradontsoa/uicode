import React from "react";
import styles from "./switch-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  rounded?: "none" | "small" | "medium" | "large" | "full";
  initialChecked?: boolean;
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "m3" | "blue" | "green" | "ios";

  // Optional event handler
  onToggle?: (checked: boolean) => void;
};
export default function SwitchA({
  className,
  children,
  initialChecked = false,
  rounded = "full",
  variant = "default",
  onToggle,
}: Props) {
  const [checked, setChecked] = React.useState(initialChecked || false);
  return (
    <label
      className={[
        styles["wrapper"],
        styles[`r-${rounded}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
    >
      {children && <div className={styles["before-element"]}>{children}</div>}
      <div className={styles["input-checkbox-wrapper"]}>
        <input
          className={styles["input-checkbox"]}
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(!checked);
            onToggle && onToggle(!checked);
          }}
        />
        <span className={styles["slider"]}></span>
      </div>
    </label>
  );
}

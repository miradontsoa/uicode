import React from "react";
import styles from "./checkbox-a.module.css";

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
export default function CheckboxA({
  className,
  children,
  initialChecked = false,
  rounded ,
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
        <span className={styles["checkmark"]}>
          <CheckmarkIcon className={styles["checkmark-icon"]} />
        </span>
      </div>
    </label>
  );
}

function CheckmarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.6274 0.266644C24.0809 0.658557 24.1268 1.33936 23.7301 1.78726L8.45735 19.0293C8.25853 19.2537 7.97442 19.3867 7.67266 19.3967C7.3709 19.4066 7.07847 19.2925 6.86497 19.0816L0.31952 12.6159C-0.106507 12.195 -0.106507 11.5127 0.31952 11.0919C0.745546 10.6711 1.43627 10.6711 1.8623 11.0919L7.58322 16.7432L22.0881 0.368019C22.4848 -0.0798817 23.174 -0.125269 23.6274 0.266644Z"
        fill="currentColor"
      />
    </svg>
  );
}

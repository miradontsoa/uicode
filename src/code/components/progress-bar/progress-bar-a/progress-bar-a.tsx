import styles from "./progress-bar-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  value?: number | string;
  size?: "small" | "medium" | "large";
  padding?: "none" | "small" | "medium";
  rounded?: "none" | "small" | "medium" | "full";
  border?: "none" | "thin" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue-gradient";
};
export default function ProgressBarA({
  className,
  children = " ",
  value,
  size,
  padding,
  rounded,
  border,
  variant = "default",
}: Props) {
  const percentageValue = parseFloat(`${value}`);
  return (
    <>
      <div
        className={[
          styles["wrapper"],
          styles[`s-${size}`],
          styles[`r-${rounded}`],
          styles[`p-${padding}`],
          styles[`b-${border}`],
          styles[`variant-${variant}`],
          className,
        ].join(" ")}
      >
          <div
            className={styles["bar"]}
            style={{ width: `${percentageValue}%` }}
          >
            {children}
          </div>
      </div>
    </>
  );
}

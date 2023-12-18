import styles from "./loading-spinner-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  spinner1Border?: "none" | "thin" | "medium" | "thick";
  spinner2Border?: "none" | "thin" | "medium"  | "thick";
  alignContent?: "vertical" | "center";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue" | "red";
};
export default function LoadingSpinnerA({
  className,
  children,
  size,
  alignContent,
  spinner1Border = "thin",
  spinner2Border = "thick",
  variant = "default",
}: Props) {
  return (
    <>
      <div
        className={[
          styles["wrapper"],
          styles[`s-${size}`],
          styles[`al-${alignContent}`],
          styles[`s1-b-${spinner1Border}`],
          styles[`s2-b-${spinner2Border}`],
          styles[`variant-${variant}`],
          className,
        ].join(" ")}
      >
        <div className={styles["spinners"]}>
          <div className={styles["spinner-1"]}></div>
          <div className={styles["spinner-2"]}></div>
        </div>
        {children && <div className={styles["content"]}>{children}</div>}
      </div>
    </>
  );
}

import styles from "./loading-bounce-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue" | "red";
};
export default function LoadingBounceA({
  className,
  children,
  size,
  variant = "default",
}: Props) {
  return (
    <>
      <div
        className={[
          styles["wrapper"],
          styles[`s-${size}`],
          styles[`variant-${variant}`],
          className,
        ].join(" ")}
      >
        <div className={styles["circles"]}>
          <div className={styles["circle-1"]}></div>
          <div className={styles["circle-2"]}></div>
        </div>
        {children && <div className={styles["content"]}>{children}</div>}
      </div>
    </>
  );
}

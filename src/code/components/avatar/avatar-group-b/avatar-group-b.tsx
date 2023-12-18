import styles from "./avatar-group-b.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  direction?: "to-right" | "to-left";
  size?: "small" | "medium" | "large";
  avatar1Element?: React.ReactNode;
  avatar2Element?: React.ReactNode;
};

export default function AvatarGroupB({
  className,
  children,
  direction,
  size="medium",
  avatar1Element,
  avatar2Element,
}: Props) {
  return (
    <div className={className}>
      <div className={[styles["wrapper"], styles[`s-${size}`]].join(" ")}>
        <div
          className={[styles["avatars"], styles[`d-${direction}`]].join(" ")}
        >
          <div className={styles["avatar-1"]}>
            <div className={styles["avatar-item"]}>{avatar1Element}</div>
          </div>
          <div className={styles["avatar-2"]}>
            <div className={styles["avatar-item"]}>{avatar2Element}</div>
          </div>
        </div>
        {children && <div className={styles["content"]}>{children}</div>}
      </div>
    </div>
  );
}

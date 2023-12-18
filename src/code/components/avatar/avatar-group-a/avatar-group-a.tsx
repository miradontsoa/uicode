import styles from "./avatar-group-a.module.css";

type Props = {
  className?: string;
  children?: React.ReactNode;
  direction?: "to-right" | "to-left";
  avatarElements?: React.ReactNode[];
};

export default function AvatarGroupA({
  className,
  children,
  direction,
  avatarElements,
}: Props) {
  return (
    <div className={className}>
      <div className={styles["wrapper"]}>
        <div className={[,styles["avatars"], styles[`d-${direction}`]].join(" ")}>
          {avatarElements?.map((avatarElement, index) => {
            return (
              <div key={`avatar-${index}`} className={styles["avatar-item"]}>
                {avatarElement}
              </div>
            );
          })}
        </div>
        {children && <div className={styles["content"]}>{children}</div>}
      </div>
    </div>
  );
}

import styles from "./account-profile-lite-a.module.css";

type Props = {
  className?: string;
  imageSrc?: string;
  title?: string;
  description?: string;
};

export default function AccountProfileLiteA({
  className,
  imageSrc,
  title,
  description,
}: Props) {
  return (
    <div className={[styles["wrapper"], className].join(" ")}>
      <img
        className={[styles["image"], styles["square"]].join(" ")}
        src={imageSrc}
        alt={title}
        width={360}
        height={360}
        loading="lazy"
      />
      <div className={styles["body"]}>
        <div className={styles["b-content"]}>
          {(title || description) && (
            <div className={styles["b-text"]}>
              <div className={styles["text-content"]}>
                <h3 className={styles["title"]}>{title}</h3>
                {description && (
                  <div className={styles["desc"]}>
                    <p>{description}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

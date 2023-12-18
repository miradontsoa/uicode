import classNames from "classnames";
import Image from "next/image";
import styles from "./ImageSquare.module.css";

export default function ImageSquare({
  className,
  alt,
  src,
}: {
  className?: string;
  alt: string;
  src: string;
}) {
  return (
    <div className={classNames(className, styles["wrapper"])}>
      <Image
        className={styles["image"]}
        src={src}
        alt={alt}
        width={512}
        height={512}
      />
    </div>
  );
}

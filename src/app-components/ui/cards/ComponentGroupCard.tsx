// "use client";

import { AccountType } from "@/types";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./ComponentGroupCard.module.css";
// import styles from "./ItemCard.module.css";

type Props = {
  imageUrl?: string | StaticImageData;
  slug?: string;
  href?: string;
  title?: string;
  bgClass?: string;
  count?: string | number;
};
export default function ComponentGroupCard({
  imageUrl,
  slug,
  href = "",
  title,
  bgClass,
  count,
}: Props) {
  return (
    <div className={styles["wrapper"]}>
      <Link href={href}>
        {imageUrl && (
          <div className={classNames(styles["image-wrapper"], bgClass)}>
            <Image
              className={styles["image"]}
              src={imageUrl}
              alt={title || "item"}
              width={540}
              height={540}
            />
            {count && <div className={classNames(styles["tag"])}>{count}</div>}
          </div>
        )}
        <div className={styles["body"]}>
          <h3 className={styles["title"]}>{title}</h3>
        </div>
      </Link>
    </div>
  );
}

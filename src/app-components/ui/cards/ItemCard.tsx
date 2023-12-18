// "use client";

import { AccountType } from "@/types";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import TagApp from "../tag/TagApp";
import CardTag from "./CardTag";
import styles from "./ItemCard.module.css";
import clsx from "clsx";

type Props = {
  imageUrl?: string | StaticImageData;
  imageAspect?: "square" | "landscape" | "portrait";
  slug?: string;
  url?: string;
  title?: string;
  description?: string;
  bgClass?: string;
  access?: AccountType;
  tag?: string;
};
export default function ItemCard({
  imageUrl,
  imageAspect,
  slug,
  url = "",
  title,
  bgClass,
  access,
  tag,
}: Props) {
  return (
    <div className={styles["wrapper"]}>
      <Link href={url}>
        <div className={classNames(styles["image-wrapper"], bgClass)}>
          {imageUrl && (
            <Image
              className={clsx(styles["image"], styles[`img-${imageAspect}`])}
              src={imageUrl}
              alt={title || "item"}
              width={540}
              height={540}
            />
          )}
          {/* {access && (
            <div className={classNames(styles["tag-wrapper"])}>
              <CardTag access={access}>
                {access === "premium"
                  ? "Premium"
                  : access === "registered"
                  ? "Sign in"
                  : "Free"}
              </CardTag>
            </div>
          )}
          {tag && (
            <div className={classNames(styles["tag-wrapper"])}>
              <TagApp variant={"gray"}>{tag}</TagApp>
            </div>
          )} */}
        </div>
        <div className={styles["body"]}>
          <h3 className={styles["title"]}>{title}</h3>
        </div>
      </Link>
    </div>
  );
}

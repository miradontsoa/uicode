import { APP_INFO } from "@/constants";
import classNames from "classnames";
import Image from "next/image";
import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <span className={classNames("logo", styles.logo)}>
      <Image
        className={styles.image}
        src="/logo-square.svg"
        alt={APP_INFO.SITE_TITLE}
        width={32}
        height={32}
      />
      <span className="logo-text">
        <span className="line">UI Code</span>
      </span>
    </span>
  );
}

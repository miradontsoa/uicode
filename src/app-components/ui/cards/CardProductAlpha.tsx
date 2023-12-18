import { ProductItem } from "@/types";
import styles from "./CardProductAlpha.module.css";
type Props = {
  //   children?: React.ReactNode;
  item: ProductItem;
};
export default function CardProductAlpha({ item }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>{item.imageSrc}</div>
      <div className={styles.cardBody}>{item.name}</div>
      <div className={styles.cardFooter}>{item.previewUrl}</div>
    </div>
  );
}

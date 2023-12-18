import { MenuItem } from "@/types";
import classNames from "classnames";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";
type Props = {
  className?: string;
  items: MenuItem[];
};

function ItemLink({
  item,
  index,
  items,
}: {
  item: MenuItem;
  items: MenuItem[];
  index: number;
}) {
  return (
    <Link
      className={styles["br-link"]}
      href={`/${items
        .filter((_i) => _i !== undefined)
        .map((_i) => _i?.slug)
        .slice(0, index + 1)
        .join("/")
        .toString()}`}
    >
      {item?.title}
    </Link>
  );
}
function ItemText({ item }: { item: MenuItem }) {
  return <span className={styles["br-link"]}>{item?.title}</span>;
}
export default function Breadcrumb({ className, items }: Props) {
  return (
    <nav className={classNames(className, styles["breadcrumb"])}>
      {items.map((item, index, itemsArray) => (
        <div className={styles["br-item"]} key={item?.title || index}>
          {item?.slug && item?.slug !== items[items.length - 1]?.slug ? (
            // if not last item or not having a slug, then it is a ling
            <ItemLink item={item} index={index} items={itemsArray} />
          ) : (
            <ItemText item={item} />
          )}
        </div>
      ))}
    </nav>
  );
}

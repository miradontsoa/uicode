import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import styles from "./search-field-lite-a.module.css";
import { useState } from "react";

type Props = {
  className?: string;
  placeholder?: string;
};

export default function SearchFieldLiteA({
  className,
  placeholder = "Search ...",
}: Props) {
  const [searchText, setTextSearch] = useState("");
  return (
    <form
      className={clsx(styles["search-field-wrapper"], className)}
      onSubmit={(e) => {
        // ...sample behavior when form is submitted
        e.preventDefault();
      }}
    >
      <input
        type={"text"}
        name={"search"}
        className={styles["search-input"]}
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setTextSearch(e.target.value)}
      />
      <button type="submit" title="Search" className={styles["search-btn"]}>
        <MagnifyingGlassIcon className={styles["search-btn-icon"]} />
      </button>
    </form>
  );
}

"use client";

import ButtonA from "@/code/components/button/button-a/button-a";
import { useState } from "react";
import { MarkdownContent } from "./MarkdownContent";
import styles from "./CodeWidget.module.css";
import IconCheck from "../icons/IconCheck";
import IconCopy from "../icons/IconCopy";

export const CodeWidget = ({
  id,
  className,
  title,
  content,
  markdown,
}: {
  id?: string;
  className?: string;
  title?: string;
  content?: string;
  markdown?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    if (window.isSecureContext) {
      // new Clipboard();
      navigator.clipboard.writeText(content || "");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    // copyEvent.clipboardData.setData( "text",content || "");
  };
  return (
    <div id={id} className={[className, styles["widget"]].join(" ")}>
      {title && (
        <div className={styles["header"]}>
          <h6 className={styles["title"]}>{title && <span>{title}</span>}</h6>
        </div>
      )}
      <div className={styles["controls"]}>
        {/* {copied && <span className="text-sm me-2">Copied</span>} */}
        <ButtonA onClick={onCopy} type="button" size="x-small">
          <span className="">Copy</span>
          <span className="ml-2">{copied ? <IconCheck /> : <IconCopy />}</span>
        </ButtonA>
      </div>
      {/* <>{markdown}</> */}
      <MarkdownContent className={styles["markdown"]} content={markdown} />
    </div>
  );
};

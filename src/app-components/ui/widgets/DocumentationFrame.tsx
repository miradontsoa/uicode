"use client";

import { MarkdownContent } from "@/app-components/ui/widgets/MarkdownContent";
import { ComponentItem } from "@/types";

export default function DocumentationFrame({
  content,
  item,
}: {
  content: string;
  item?: ComponentItem;
}) {
  // const user = useUser();
  // const userAccountType = user?.accountType;
  return <MarkdownContent className={"article-doc"} content={content} />

  // Paid version
  /* let frameContent = <></>;
  const documentationContent = (
    <MarkdownContent className={"article-doc"} content={content} />
  );
  if (item?.access !== "premium") {
    frameContent = <>{documentationContent}</>;
  } else if (userAccountType === "premium" && item?.access === "premium") {
    frameContent = <>{documentationContent}</>;
  } else {
    frameContent = <>Go premium to access this please.</>;
  }
  return <>{frameContent}</>; */
}

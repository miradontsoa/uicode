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
  return <MarkdownContent className={"article-doc"} content={content} />
}

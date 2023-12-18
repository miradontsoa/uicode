"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeContent({
  className,
  children,
  ...props
}: {
  className?: string,
  children: React.ReactNode
}) {
  const match = /language-(\w+)/.exec(className || "");
  //   return !inline && match ? (
  return match ? (
    <SyntaxHighlighter
      //   style={dark}
      language={match[1]}
      // language={"tsx"}
      PreTag="div"
      useInlineStyles={false}
      
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

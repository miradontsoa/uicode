import classNames from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CodeContent from "./CodeContent";
import styles from "./MarkdownContent.module.css";

type Props = {
  content?: string;
  className?: string;
};
export const MarkdownContent = ({ content, className }: Props) => {
  return (
    <div className={classNames(className, styles.content)}>
      <ReactMarkdown
        components={{
          // Map `h1` (`# heading`) to use `h2`s.
          h1: "h2",
          // Rewrite img to next image
          img: ({ node, ...props }) => (
            <Image
              className={styles.image}
              {...props}
              // fill={true}
              width={820}
              height={820}
              src={props.src || ""}
              alt={props.alt || ""}
              placeholder={"empty"}
            />
          ),
          code({ node, inline, className, children }) {
            return (
              <CodeContent
                className={classNames(className, styles.code, "du-code")}
              >
                {children}
              </CodeContent>
            );
          },
        }}
      >
        {content || ""}
      </ReactMarkdown>
    </div>
  );
};

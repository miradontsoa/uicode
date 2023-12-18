import classNames from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CodeContent from "../ui/widgets/CodeContent";
import styles from "./PostContent.module.css";

type Props = {
  content: string;
  className?: string;
};
const PostContent = ({ content: content, className }: Props) => {
  return (
    <article className={classNames(className, styles.content)}>
      <ReactMarkdown
        // rehypePlugins={[rehypeRaw]}
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
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;

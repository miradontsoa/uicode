import { Post } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./PostListItem.module.css";
type Props = { post: Post; className?: string };
const PostListItem = ({ post, className }: Props) => {
  return (
    <figure className={classNames("figure-a", styles.figure, className)}>
      {post.image && (
        <div className={styles.imageWrapper}>
          <Link href={post.url || "#"} rel="noreferrer">
            <Image
              src={post.image}
              className={classNames("img-1 img-fluid", styles.image)}
              alt={post.title || ""}
              width={320}
              height={320}
            />
          </Link>
        </div>
      )}

      <legend className={styles.legendWrapper}>
        <Link href={post.url ||"#"} rel="noreferrer" className={styles.textLink}>
          <div className={classNames(styles.title)}>
            <h4 className="strong title">{post.title}</h4>
          </div>
        </Link>
        <div className={styles.categories}>
          {post.categories?.map((category) => (
            <span className={styles.category} key={category}>{category}</span>
          ))}
        </div>
        {post.description && <p className="description ">{post.description}</p>}
        {post.url && (
          <Link
            className="btn btn-line-arrow "
            href={post.url}
            rel="noreferrer"
          >
            <span className="text">Read</span>
            <span className="icon ms-3">
              <span className="icon-arrow-right"></span>
            </span>
          </Link>
        )}
      </legend>
    </figure>
  );
};

export default PostListItem;

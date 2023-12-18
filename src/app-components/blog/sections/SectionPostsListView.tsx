import PostListItem from "@/app-components/blog/PostListItem";
import SectionPage from "@/app-components/ui/sections/SectionPage";
import { Post } from "@/types";
import classNames from "classnames";
import styles from "./SectionPostsList.module.css";
type Props = {
  view?: "list" | "grid";
  posts: Post[];
  marginTop?: "none" | "small" | "medium" | "large";
  marginBottom?: "none" | "small" | "medium" | "large";
};
export default function SectionPostsListView({
  posts,
  view,
  marginBottom,
  marginTop,
}: Props) {
  return (
    <SectionPage
      width={"full"}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <div
        className={classNames(
          view === "list" && styles.list,
          view === "grid" && styles.grid
        )}
      >
        {posts.map((post) => (
          <div className={styles.item} key={post.slug}>
            {/* {post.slug} */}
            <PostListItem post={post} />
          </div>
        ))}
      </div>
    </SectionPage>
  );
}

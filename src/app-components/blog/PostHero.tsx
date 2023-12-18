'use client';

import { Post } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import SectionPage from "../ui/sections/SectionPage";
import styles from "./PostHero.module.css";

type Props = {
  post: Post;
  align?: "start" | "center" | "end";
};
const PostHero = ({ post, align }: Props) => {
  const [copied, setCopied] = useState("");
  const copyUrl = () => {
    const url = location.href;
    navigator.clipboard.writeText(url);
    setCopied("(Copied)")
  };
  return (
    <SectionPage
      width="medium"
      marginTop="large"
      className={styles.hero}
      align={align}
    >
      <div className="row justify-content-between">
        <div className="col-12">
          <h1
            className={classNames(
              "title-font strong mb-4 mt-title",
              styles.title
            )}
          >
            {post.title}
          </h1>
          <p className="">{post.description}</p>
          <div className={styles.categories}>
            {post.categories?.map((category) => (
              <span className={styles.category} key={category}>
                {category}
              </span>
            ))}
          </div>

          {post.date && (
            <div className={styles.date}>
              <p>Posted on: {new Date(post.date).toLocaleDateString()}</p>
            </div>
          )}
          {post.author && (
            <div className={styles.author}>
              <p>By: {post.author}</p>
            </div>
          )}
          {post.coverImage && (
            <Image
              src={post.coverImage}
              className={classNames(styles.coverImage)}
              alt={post.title ||""}
              // width={1024}
              // height={1024 * 0.38}
              width={820}
              height={312}
            />
          )}
          <nav className={styles.share}>
            <p>
              Share this on{" "} 
              <a
                className="btn-link twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${post.title}.%20${post.description}%20https://mirado.work/blog/posts/${post.slug}`}
                data-size="large"
                target={"_blank"}
                rel="noreferrer"
              >
                X (Twitter)
              </a>
              ,{" "}
              <a className="btn-link" onClick={copyUrl}>
                Copy URL {copied}
              </a>
              {/* <a className="btn-link" href="#">
                Twitter
              </a>
              ,{" "}
              <a className="btn-link" href="#">
                Facebook
              </a>
              ,{" "}
              <a className="btn-link" href="#">
                Copy URL
              </a> */}
            </p>
          </nav>
        </div>
      </div>
    </SectionPage>
  );
};

export default PostHero;

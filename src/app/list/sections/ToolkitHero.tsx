import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import SectionA from "@/app-components/ui/sections/SectionA";
import { LinkIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import styles from "./ToolkitHero.module.css";
import IconGithub from "@/app-components/ui/icons/IconGithub";
import Image from "next/image";

type Props = {
  title: string;
  toolkit: ToolkitType;
  category: ListCategoryType;
};

export default function ToolkitHero({ title, toolkit, category }: Props) {
  return (
    <SectionA
      className={clsx("lp-section text-content-medium")}
      withXPageMargin={false}
      paddingTop={"medium"}
      paddingBottom={"none"}
      contentWidth={"full"}
    >
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: "List",
            href: "/list",
            slug: "list",
          },
          {
            title: category.title,
            href: `/list/${category.slug}`,
            slug: `${category.slug}`,
          },
          {
            title: toolkit.title,
            href: `/list/${category.slug}/${toolkit.slug}`,
            slug: `${toolkit.slug}`,
          },
        ]}
      />
      <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-x-8">
        <div className="col md:col-span-2 lg:col-span-3">
          {/* <h2 className={"title-1 text-primary"}>{title}</h2> */}
          <h2 className={"title-page-1 mb-4"}>{title}</h2>
          {toolkit.url && (
            <div className={clsx(styles.url, "mb-2")}>
              <LinkIcon className={styles.urlIcon} />
              <a className={styles.urlText} href={toolkit.url} target="_blank">
                {toolkit.url.replace("https://", "").replace("http://", "")}
              </a>
            </div>
          )}
          {toolkit.shortDescription && (
            <div className={clsx(styles.desc, "mb-2")}>
              {toolkit.shortDescription}
            </div>
          )}
          {/* Separator */}
          <div className={styles.separator} />
          {toolkit.githubUrl && (
            <div className={clsx(styles.url, "mb-2")}>
              <IconGithub className={styles.urlIcon} />
              <a className={styles.urlText} href={toolkit.githubUrl} target="_blank">
                {toolkit.githubUrl
                  .replace("https://", "")
                  .replace("http://", "")}
              </a>
            </div>
          )}
          {toolkit.docsUrl && (
            <div className={clsx(styles.url, "mb-2")}>
              <BookOpenIcon className={styles.urlIcon} />
              <a className={styles.urlText} href={toolkit.docsUrl} target="_blank">
                Documentation
              </a>
            </div>
          )}
        </div>
        {toolkit.imageUrl && (
          <div className="col">
            <Image
              className={styles.image}
              src={toolkit.imageUrl}
              alt={toolkit.title}
              width={360}
              height={360}
            />
          </div>
        )}
      </div>
    </SectionA>
  );
}

"use client";

import { ComponentItem } from "@/types";
import * as Tabs from "@radix-ui/react-tabs";
import classNames from "classnames";
import React from "react";
import styles from "./CodeBrowser.module.css";

export default function CodeBrowser({
  className,
  tabs,
  item,
}: {
  className?: string;
  tabs: {
    slug: string;
    title: string;
    content: React.ReactNode;
  }[];
  item: ComponentItem;
}) {
  const componentCode = <CodeTabs {...{ className, tabs, access: item }} />;
  return <>{componentCode}</>;
}

 
function CodeTabs({
  className,
  tabs,
}: {
  className?: string;
  tabs: {
    slug: string;
    title: string;
    content: React.ReactNode;
  }[];
}) {
  return (
    <Tabs.Root
      className={classNames(styles["tabs-roots"], className)}
      defaultValue={tabs && tabs[0].slug}
    >
      <div className={styles["tabslist-wrapper"]}>
        <Tabs.List
          className={styles["tabs-list"]}
          aria-label="Browse code"
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              className={styles["tabs-trigger"]}
              value={tab.slug}
              key={tab.slug}
            >
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>
      {tabs.map((tab) => (
        <Tabs.Content
          className={styles["tabs-content"]}
          value={tab.slug}
          key={tab.slug}
        >
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

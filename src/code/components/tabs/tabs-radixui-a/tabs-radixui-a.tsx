import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import styles from "./tabs-radixui-a.module.css";

type TabsItemType = {
  slug: string;
  title: React.ReactNode;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

type Props = {
  className?: string;
  tabs?: TabsItemType[];
  defaultValue?: string;
  rounded?: "none" | "small" | "medium" | "large" | "full";
  shadow?: "none" | "small" | "medium";
  // Put additional variants here, then define them in the CSS
  variant?: "default" | "blue-outline" | "gray";
};

export default function TabsRadixuiA({
  className,
  tabs,
  defaultValue,
  rounded,
  shadow = "none",
  variant = "default",
}: Props) {
  return (
    <Tabs.Root
      className={[
        styles["tabs-roots"],
        styles[`r-${rounded}`],
        styles[`sh-${shadow}`],
        styles[`variant-${variant}`],
        className,
      ].join(" ")}
      defaultValue={defaultValue || (tabs && tabs[0].slug)}
    >
      <div className={styles["tabs-list-wrapper"]}>
        <Tabs.List
          className={styles["tabs-list"]}
        >
          {tabs?.map((tab) => (
            <Tabs.Trigger
              className={styles["tabs-trigger"]}
              value={tab.slug}
              key={tab.slug}
            >
              {tab.icon && (
                <div className={styles["tabs-icon"]}>{tab.icon}</div>
              )}
              <div className={styles["tabs-title"]}>{tab.title}</div>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>
      {tabs?.map((tab) => (
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

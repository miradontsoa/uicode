import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import SectionA from "@/app-components/ui/sections/SectionA";
import clsx from "clsx";
import React from "react";
import styles from "./ToolkitContent.module.css";
import { LinkIcon } from "@heroicons/react/24/outline";
type Props = {
  toolkit: ToolkitType;
};

export default function ToolkitContent({ toolkit }: Props) {
  return (
    <SectionA
      className={clsx("lp-section ")}
      withXPageMargin={false}
      paddingTop={"medium"}
      paddingBottom={"none"}
      contentWidth={"full"}
    >
      <div className="max-w-4xl">
        <div className={styles.desc}>
          <p>{toolkit.description}</p>
        </div>
        {toolkit?.features && (
          <div className={styles.features}>
            <h4 className={styles.groupTitle}>Interesting Features</h4>
            <ul className={styles.list}>
              {toolkit.features.map((feature) => (
                <li className={styles.listItem} key={feature.title}>
                  <div>{feature.title}</div>
                  {feature.description && <div>{feature.description}</div>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {toolkit?.pricing && (
          <div className={styles.price}>
            <h4 className={styles.groupTitle}>Pricing</h4>
            <ul className={styles.list}>
              {toolkit.pricing.map((pricing) => (
                <li className={styles.listItem} key={pricing.title}>
                  <div>{pricing.title}</div>
                  {pricing.description && <div>{pricing.description}</div>}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {toolkit.url && (
            <div className={clsx(styles.url, "mb-2")}>
              <LinkIcon className={styles.urlIcon} />
              <a className={styles.urlText} href={toolkit.url} target="_blank">
                {toolkit.url.replace("https://", "").replace("http://", "")}
              </a>
            </div>
          )}
      </div>
    </SectionA>
  );
}

import { categoryGroups } from "@/lib/data/componentsData/categoryGroups";
import { ComponentMenuItem } from "@/types";
import classNames from "classnames";
import ItemCard from "../cards/ItemCard";
import styles from "./ComponentCategoriesList.module.css";
type Props = {
  parentPath?: string;
};

export default function ComponentCategoriesList({ parentPath = "" }: Props) {
  return (
    <div>
      {categoryGroups.map((categoryGroup) => {
        const menuItems = categoryGroup?.categories?.map((category) => {
          category.components?.length;
          return {
            title: category.title,
            href: `./${category.slug}`,
            slug: category.slug,
            class: category.bgClass,
            count: category.components?.length,
          };
        }) as ComponentMenuItem[];
        const categoryItemsList = (
          <div className={styles["category-list"]}>
            {menuItems.map((menuItem) => {
              return (
                <div key={`category-${menuItem.slug || menuItem.title}`}>
                  {/* <ComponentGroupCard */}
                  <ItemCard
                    bgClass={classNames(menuItem.class || "bg-gradient-bg")}
                    imageUrl={
                      menuItem.slug &&
                      `/components/${menuItem.slug}/${menuItem.slug}.png`
                    }
                    imageAspect={"landscape"}
                    tag={menuItem.count}
                    url={`${parentPath}/${menuItem.href}`}
                    title={menuItem.title}
                  />
                </div>
              );
            })}
          </div>
        );
        return (
          <div key={categoryGroup.slug || categoryGroup.title}>
            <header>
              <h4 className={styles["title"]}>{categoryGroup.title}</h4>
            </header>
            <div>{categoryItemsList}</div>
          </div>
        );
      })}
    </div>
  );
}

import { MenuItem } from "@/types";
import clsx from "clsx";
import SidebarNavigation from "../ui/navigation/SidebarNavigation";

export default function ArticleLayout({
  className,
  children,
  sidebarMenuItems,
  width,
}: {
  className?: string;
  children: React.ReactNode;
  sidebarMenuItems?: MenuItem[];
  width?: "medium" | "large" | "full";
}) {
  return (
    <article className={className}>
      <div
        className={clsx(
          "article",
          `w-${width}`,
          sidebarMenuItems &&
            sidebarMenuItems?.length > 0 &&
            "article-with-sidebar"
        )}
      >
        <div className="article-main article-a">
          {/* <BreadcrumbAuto /> */}
          {children}
        </div>
        {sidebarMenuItems && sidebarMenuItems?.length > 0 && (
          <aside className="article-sidebar">
            <SidebarNavigation
              menuItems={sidebarMenuItems}
              title="Page Navigation"
              shotTitle={false}
              isVisibleOnMobile={false}
            />
            {/* <nav className="sidebar-nav">
              <div className="nav-menu">
                {sidebarMenuItems.map((menuItem) => (
                  <div className="nav-item" key={menuItem.title}>
                    <a href={`${menuItem.href}`}>{menuItem.title}</a>
                  </div>
                ))}
              </div>
            </nav> */}
          </aside>
        )}
      </div>
    </article>
  );
}

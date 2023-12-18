'use client';
 
import SectionA from "@/app-components/ui/sections/SectionA";
import React from "react";
import SidebarLeftMenuUIComponents from "./SidebarLeftMenuUIComponents";
import ContentLayout from "@/app-components/ui/layout/ContentLayout";
import BrowserFooter from "@/app-components/ui/footer/BrowserFooter";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Scroll to top on route change
  /* const routepath = usePathname();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [routepath]); */

  return (
    <ContentLayout sidebarLeftElement={<SidebarLeftMenuUIComponents />}>
      <SectionA className="content-content min-h-window-app">
        {children}
      </SectionA>

      <BrowserFooter />
    </ContentLayout>
  );
}

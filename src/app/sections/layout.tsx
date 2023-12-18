"use client";
// Page main layout
import React from "react";  
import SidebarLeftMenuUIComponents from "./SidebarLeftMenuPages"; 
import BrowserFooter from "@/app-components/ui/footer/BrowserFooter";
import ContentLayout from "@/app-components/ui/layout/ContentLayout";

export default function UIComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContentLayout
      sidebarLeftElement={
        <div className="mt-5">
          <SidebarLeftMenuUIComponents />
        </div>
      }
    >
      {children}

      
      <BrowserFooter />
    </ContentLayout>
  );
}

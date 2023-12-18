"use client"; 
import ContentLayout from "@/app-components/ui/layout/ContentLayout";
import SectionA from "@/app-components/ui/sections/SectionA";
import { usePathname } from "next/navigation";
import React from "react";

export default function UIComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Scroll to top on route change
  const routepath = usePathname();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [routepath]);

  return (
    <ContentLayout>
      <SectionA className="content-content">{children}</SectionA>
    </ContentLayout>
  );
}

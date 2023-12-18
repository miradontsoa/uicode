"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AppScrollEffect({
  children,
}: {
  children: React.ReactNode;
}) {
  // Scroll to top on route change
  const pathname = usePathname();
  /* useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); */
  return <>{children}</>;
}

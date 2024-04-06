// Page main layout
import React from "react";
// import { Inter } from "@next/font/google";
// import "../styles/bootstrap.min.css";

// App SCSS style
import "./globals.css";
// import "@/styles/main/main.css";
import AppbarTop from "@/app-components/ui/headers/AppbarTop";
import "@/styles/main/main.scss";
import AppProvider from "./app-provider";
import AppScrollEffect from "./app-scroll-effect";

/* const inter = Inter({
  weight: "400",
  variable: "--inter-font",
}); */
import { APP_INFO } from "@/constants";
import { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: APP_INFO.THEME_COLOR,
};

export const metadata: Metadata = {
  title: APP_INFO.SITE_TITLE,
  description: APP_INFO.SITE_DESCRIPTION,
  /* openGraph: {
    title: APP_INFO.SITE_TITLE,
    description: APP_INFO.SITE_DESCRIPTION,
    url: "https://uicode.mirado.work",
  },
  twitter: {
    title: APP_INFO.SITE_TITLE,
    description: APP_INFO.SITE_DESCRIPTION,
    card: "summary",
  }, */
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <AppProvider>
        <AppScrollEffect>
          {/* <body className={classNames(isScrolled && "scrolled")}> */}
          {/* suppressHydrationWarning={true} hide plugin extra attribute https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c */}
          <body
            className={`${inter.className} inter-font-adjust`}
            suppressHydrationWarning={true}
          >
            <div className="page-container">
              <header className="page-header">
                <AppbarTop />
              </header>
              <main className="page-main">{children}</main>
              {/* <Footer /> */}
            </div>
          </body>
        </AppScrollEffect>
      </AppProvider>
    </html>
  );
}

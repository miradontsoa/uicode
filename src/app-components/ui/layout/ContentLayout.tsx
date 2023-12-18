import classNames from "classnames";

function ContentSidebarLeft({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <aside className={classNames("content-sidebar-left", className)}>
      {children}
    </aside>
  );
}

function ContentSidebarRight({ children }: { children?: React.ReactNode }) {
  return <aside className="content-sidebar-right">{children}</aside>;
}

function ContentHeader({
  navOnly = false,
  children,
  level = "primary",
  className,
}: {
  className?: string;
  children?: React.ReactNode;
  navOnly?: boolean;
  level?: "primary" | "secondary";
}) {
  return (
    <div
      className={classNames(
        className,
        "content-header",
        navOnly && "nav-only",
        `level-${level}`
      )}
    >
      {children}
    </div>
  );
}

function ContentBody({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={classNames("content-body", className)}>{children}</div>
  );
}

export default function ContentLayout({
  className,
  children,
  sidebarLeftElement,
  sidebarRightElement,
  footerElement,
  headerElement,
  withXPageMargin = true,
  withMaxWidth = true,
}: {
  className?: string;
  children?: React.ReactNode;
  sidebarLeftElement?: React.ReactNode;
  sidebarRightElement?: React.ReactNode;
  headerElement?: React.ReactNode;
  footerElement?: React.ReactNode;
  withXPageMargin?: boolean;
  withMaxWidth?: boolean;
}) {
  return (
    <div
      className={classNames(
        className,
        "content-layout",
        !sidebarLeftElement && !sidebarRightElement && "no-sidebars",
        withXPageMargin && "with-x-page-margin",
        withMaxWidth && "with-max-width"
      )}
    >
      {headerElement && <ContentHeader>{headerElement}</ContentHeader>}
      {sidebarLeftElement && (
        // <ContentSidebarLeft className="sidebar-nav">{sidebarLeftElement}</ContentSidebarLeft>
        <ContentSidebarLeft>{sidebarLeftElement}</ContentSidebarLeft>
      )}
      <ContentBody>{children}</ContentBody>
      {sidebarRightElement && (
        <ContentSidebarRight>{sidebarRightElement}</ContentSidebarRight>
      )}
    </div>
  );
}

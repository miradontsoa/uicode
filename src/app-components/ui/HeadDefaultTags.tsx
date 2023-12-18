// Default <head> tags we want shared across the app
export function HeadDefaultTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      /> */}
      <link
        href="/favicon/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicon/site.webmanifest" rel="manifest" />
      <link
        color="#000000"
        href="/favicon/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/favicon/favicon.ico" rel="shortcut icon" />
    </>
  );
}

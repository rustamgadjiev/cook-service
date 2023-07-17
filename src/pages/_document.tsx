import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const portalContainer = <div id="portal-root" />;

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {portalContainer}
        <NextScript />
      </body>
    </Html>
  );
}

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  // Custom HTML structure for the entire document
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and Apple Touch Icons */}
          <link rel="icon" type="image/png" href="/img/favicon/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/img/favicon/favicon.svg" />
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/img/favicon/site.webmanifest" />

          {/* Example: preload fonts, analytics, meta tags can go here */}
        </Head>
        <body>
          <Main /> {/* Main application content */}
          <NextScript /> {/* Next.js scripts (hydration, chunking, etc.) */}
        </body>
      </Html>
    );
  }

  // Custom initial props, mainly for server-side rendering enhancements
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Enhance App and Component if needed
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
}

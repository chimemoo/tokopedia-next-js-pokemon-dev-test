import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" crossOrigin="anonymous" as="font" href="/assets/fonts/Poppins/Poppins-Medium.ttf" />
          <link rel="preload" crossOrigin="anonymous" as="font" href="/assets/fonts/Poppins/Poppins-Bold.ttf" />
          <link rel="preload" crossOrigin="anonymous" as="font" href="/assets/fonts/Poppins/Poppins-Light.ttf" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

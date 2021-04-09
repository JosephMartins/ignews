import Document, { Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document{
  render() {
    return(
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
          <link rel="shortcurt icon" href="/favicon.png" type="image/x-icon" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}


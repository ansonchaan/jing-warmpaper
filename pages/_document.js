import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { extractCritical } from 'emotion-server'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    // const styles = extractCritical(initialProps.html)
    return { 
      ...initialProps,
      // styles: (
      //   <>
      //     {initialProps.styles}
      //     <style
      //       data-emotion-css={styles.ids.join(' ')}
      //       dangerouslySetInnerHTML={{ __html: styles.css }}
      //     />
      //   </>
      // )
    }
  }

  render() {
    return (
      <Html>
        <Head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500&display=swap"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
import Document, { Head, Main, NextScript } from 'next/document'
import htmlescape from 'htmlescape'
import '../src/styles/styles.scss'

const { env } = process

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>Hello world</title>
          <link
            rel='stylesheet'
            href='/_next/static/style.css'
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{ __html: `__ENV__= ${htmlescape(env)}` }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
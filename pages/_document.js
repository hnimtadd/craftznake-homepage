import { ColorModeScript } from '@chakra-ui/react'
import theme from '@/lib/theme'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Link
            rel="icon"
            type="image/x-icon"
            href="/images/favicon.png"
            sizes="any"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}

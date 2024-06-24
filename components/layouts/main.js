import { Box, Container } from '@chakra-ui/react'
import Navbar from '@/components/navbar'
import Head from 'next/head'
import Shiba from '@/components/bitcoin'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hnimtadd's homepage" />
        <meta name="author" content="Hnimtadd" />
        <meta name="author" content="craftnake" />
        <title>Hnimtadd - Hompage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <Shiba />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main

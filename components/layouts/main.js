import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'

const Main = ({children }) => {
  return (
  <Box as="main" pb={8} >
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale = 1"/>
        <title>Hnimtadd -Hompage</title>
      </Head>
      <Container maxW="contaner.md" pt={14}>
        {children}
      </Container>
    </Box>
  )

}

export default Main

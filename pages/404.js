import NextLink from 'next/link'

import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Layout from '@/components/layouts/article'

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h1">Not Found</Heading>
        <Text>
          The page you&apos;re looking for was not found. Updating soon. ⚡
        </Text>
        <Divider my={6} />

        <Box my={6} align="center">
          <NextLink href="/">
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound

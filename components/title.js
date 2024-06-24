import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ content, children }) => {
  return (
    <Box>
      <Link as={NextLink} href="/works">
        {content}
      </Link>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading as="h3" display="inline-block" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage = ({ alt, src }) => (
  <Image borderRadius="lg" src={src} alt={alt} mb={4} />
)
export const Meta = ({ children }) => (
  <Badge mr={2} colorScheme="green">
    {children}
  </Badge>
)

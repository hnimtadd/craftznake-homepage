import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  Text,
  Container
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ content, children, href }) => {
  return (
    <Box>
      <Link as={NextLink} href={href}>
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

export const WorkImage = ({ alt, src, title }) => {
  return (
    <Container mb={4}>
      <Image
        borderRadius="lg"
        src={src}
        alt={alt}
        mb={2}
        maxHeight={400}
        width={'100%'}
        objectFit="cover"
      />
      {title && (
        <Text
          textAlign="center"
          // color is light gray
          color={'#EBF4F6'}
        >
          {title}
        </Text>
      )}
    </Container>
  )
}
export const Meta = ({ children }) => (
  <Badge mr={2} colorScheme="green">
    {children}
  </Badge>
)

import NextLink from 'next/link'
import Section from '@/components/section'
import {
  Container,
  Box,
  Heading,
  chakra,
  Button,
  List,
  ListItem,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '@/components/paragraph'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '@/components/bio'
import Layout from '@/components/layouts/article'
import { IoLogoGithub, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Index = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a developer based in Vietnam!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading>Hnimtadd</Heading>
            <p>Craftznake (Developer / Guitarist)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/hnimtadd.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hnimtadd is a developer based in Vietname with a passion for
            building digital services/stuff he wants.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Hue, Viet Nam.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Graduated from Quoc Hoc high school, top 4 ranked high school in
            Viet Nam.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Complete Bachelor&apos;s Program in the Ho Chi Minh City University
            of Technology .
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 🥰
          </Heading>
          <Paragraph>Art, Music, Guitar, Machine Learning</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/hnimtadd" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @hnimtadd
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/hnimtadd" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @hinmm_tadd
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://facebook.com/hnimtadd" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoFacebook />}
                >
                  @hnimtadd
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Index

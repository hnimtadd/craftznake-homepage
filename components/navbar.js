import Logo from '@/components/logo'
import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub} from 'react-icons/io5'
import ThemeTogleButton from './theme-toggle-button'


const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}
const Navbar = ({ path, ...props }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        flexDir="row"
        p={2}
        wrap="wrap"
        maxW="container.md"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/uses" path={path}>
            Uses
          </LinkItem>
          <LinkItem
            href="mailto:dev.craftznake@gmail.com"
            paht={path}
            display="inline-flex"
            style={{ gap: 4 }}
            alignItems="center"
            pl={2}
          >
            Contact
          </LinkItem>
          <LinkItem
            href="https://github.com/hnimtadd/craftznake-homepage"
            paht={path}
            display="inline-flex"
            style={{ gap: 4 }}
            alignItems="center"
            pl={2}
          >
            <Icon as={ IoLogoGithub }/>
            View Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeTogleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                varial="outline"
                arial-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref={true}>
                  <MenuItem>About</MenuItem>
                </NextLink>
                <NextLink href="/uses" passHref={true}>
                  <MenuItem>Uses</MenuItem>
                </NextLink>
                <NextLink href="https://github.com/hnimtadd" passHref={true}>
                  <MenuItem>View Source</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Navbar

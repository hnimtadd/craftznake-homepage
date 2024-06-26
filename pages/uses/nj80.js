import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import { Meta, Title, WorkImage } from '@/components/title'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Link, List, ListItem } from '@chakra-ui/react'

//TODO: add image list or caseroul
const UseKeyboardNJ = () => {
  return (
    <Layout title={'NJ80'}>
      <Title content={'uses'} href={'/uses'}>
        NJ80 <Badge>10/2022</Badge>
      </Title>
      <Paragraph>
        This is my first keyboard, and it is my first time using a mechanical
        keyboard. I have been using it for about 2 years. This mechanical
        keyboard boosted my productivity and I have never been happier.
      </Paragraph>
      <Paragraph>I&apos;m currently using it in my local workspace.</Paragraph>
      <List ml={4} mb={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://www.amazon.com/keydous-Wireless-Mechanical-Keyboard-Bluetooth/dp/B09WTYMBT8">
            Amazon <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Brand</Meta>
          Keydous
        </ListItem>
        <ListItem>
          <Meta>Switch</Meta>
          Gateron Yellow Pro (ship with Kailh box switch by default)
        </ListItem>
        <ListItem>
          <Meta>Layout</Meta>
          75%
        </ListItem>
        <ListItem>
          <Meta>Keycap</Meta>
          Carbon profile DSA
        </ListItem>
      </List>
      <WorkImage
        alt={'keydous keyboard image'}
        src={'/images/workspace/keyboard/thumbnail_keyboard_2.jpg'}
        title={'Top down view of the keyboard'}
      />
      <WorkImage
        alt={'keydous keyboard image'}
        src={'/images/workspace/keyboard/thumbnail_keyboard_4.jpg'}
        title={'NJ80 Keyboard'}
      />
    </Layout>
  )
}
export default UseKeyboardNJ

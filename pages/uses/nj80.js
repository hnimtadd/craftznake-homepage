import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import { Meta, Title } from '@/components/title'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Link, List, ListItem } from '@chakra-ui/react'

//TODO: add image list or caseroul
const UseKeyboardNJ = () => {
  return (
    <Layout title={'NJ80'}>
      <Title content={'uses'}>
        NJ80 <Badge>10/2022</Badge>
      </Title>
      <Paragraph>
        I use the Keydous NJ80 AP mechanical keyboard to boost my productivity
        with its compact layout, durable PBT keycaps, and tactile Kailh Box
        Brown Switches. The vibrant RGB LED lighting adds a touch of style to my
        workspace, making it a valuable addition to my setup.
      </Paragraph>
      <List ml={4} mb={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://www.amazon.com/keydous-Wireless-Mechanical-Keyboard-Bluetooth/dp/B09WTYMBT8">
            Amazon <ExternalLinkIcon />
          </Link>
        </ListItem>
      </List>
    </Layout>
  )
}
export default UseKeyboardNJ

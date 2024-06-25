import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '@/components/title'
import Paragraph from '@/components/paragraph'
import Layout from '@/components/layouts/article'

const Work = () => {
  return (
    <Layout title="senditsh">
      <Container>
        <Title content={'works'}>
          Senditsh <Badge>8/2023</Badge>
        </Title>
        <Paragraph>
          A secured sharing application enable user to share file from anywhere
          with a secured connection, user could sign file and verify before
          receive file from anyone.
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>website</Meta>(Deploy soon)
            <Link href="https://senditsh.craftznake.co">
              https://senditsh.craftznake.co <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>platform</Meta>
            Cross-platform/Windows/MacOS/Linux
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>Golang, Django</span>
          </ListItem>
        </List>
        <WorkImage alt="senditsh" src="/images/sendit/Sendit.png" />
      </Container>
    </Layout>
  )
}
export default Work

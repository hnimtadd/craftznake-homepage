import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '@/components/title'
import Paragraph from '@/components/paragraph'
import Layout from '@/components/layouts/article'

const Work = () => {
  return (
    <Layout title="gotodo">
      <Container>
        <Title content={'works'}>
          Go Todo <Badge>9/2023</Badge>
        </Title>
        <Paragraph>
          Manage your todo then access any where with your account.
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>website</Meta>(Deploy soon){' '}
            <Link href="https://gotodo.craftznake.co">
              https://gotodo.craftznake.co <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>platform</Meta>
            Cross-platform/Windows/MacOS/Linux
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>Golang</span>
          </ListItem>
        </List>
        <WorkImage alt="senditsh" src="/images/thumbnail.jpg" />
      </Container>
    </Layout>
  )
}
export default Work

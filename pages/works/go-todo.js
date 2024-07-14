import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, PostImage, Meta } from '@/components/title'
import Paragraph from '@/components/paragraph'
import Layout from '@/components/layouts/article'

const Work = () => {
  return (
    <Layout title="gotodo">
      <Container>
        <Title content={'works'} href={'/works'}>
          Go Todo <Badge>9/2023</Badge>
        </Title>
        <Paragraph>
          Manage your todo then access any where with your account.
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>website</Meta>(Deploy soon){' '}
          </ListItem>
          <ListItem>
            <Meta>repository</Meta>
            <Link href="https://github.com/hnimtadd/go-todos">
              https://github.com/hnimtadd/go-todos <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>platform</Meta>
            Cross-platform/Windows/MacOS/Linux
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>Golang, Echo, Docker, Adminer, Gorm</span>
          </ListItem>
        </List>
        <PostImage alt="senditsh" src="/images/thumbnail.jpg" />
      </Container>
    </Layout>
  )
}
export default Work

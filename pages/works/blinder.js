import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PostImage, Meta } from '@/components/title'
import Paragraph from '@/components/paragraph'
import Layout from '@/components/layouts/article'

const Peakee = () => {
  return (
    <Layout title="Blinders">
      <Container>
        <Title content={'works'} href={'/works'}>
          Blinders <Badge>8/2023</Badge>
        </Title>
        <Paragraph>
          Monorepo, serverless, microservices backend for a language learning
          platform -{' '}
          <Link href="/works/peakee">
            Peakee
            <ExternalLinkIcon />
          </Link>
          .
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>architecture</Meta>
            Mono-repo, single codebase for all platform
          </ListItem>
          <ListItem>
            <Meta>Domain</Meta>
            <Link href="https://peakee.co/">
              https://peakee.co/ <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>
              Golang, Python, Langchain, AWS, Terraform, Firebase, MongoDB,
              Websocket, Redis, Docker
            </span>
          </ListItem>
        </List>
        <PostImage
          alt="blidner architecture"
          src="/images/blinders/architecture.png"
          title="Blinders Architecture"
        />
        <PostImage alt="blinder logo" src="/images/blinders/blinders.png" />
      </Container>
    </Layout>
  )
}
export default Peakee

import Paragraph from '@/components/paragraph'
import { Meta, Title, WorkImage } from '@/components/title'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'

import Layout from '@/components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Run = () => {
  return (
    <Layout title={'Run'}>
      <Container>
        <Title content={'works'} href={'/works'}>
          Run <Badge>3/2024</Badge>
        </Title>
        <Paragraph>
          Serverless runtime with web-assembly. Create, Deploy and Run you code
          from anywhere with a few-step without cold-start.
        </Paragraph>
        <Paragraph>
          You could create your own workspace, deploy your code and run it from
          anywhere with a few-step. You could also share your workspace with
          anyone, they could run your code without setup anything.
        </Paragraph>
        <Paragraph>
          This project is leverage the power of web-assembly to create a
          serverless runtime, you could run your code without worry about the
          environment. You could also create your own runtime with your own
          environment.
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>platform</Meta>
            Web server (serve via HTTP API)
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>Golang, Web-assembly, Wazero, Python</span>
          </ListItem>
          <ListItem>
            <Meta>repo</Meta>
            <Link href="https://github.com/hnimtadd/run.git">
              https://github.com/hnimtadd/run.git <ExternalLinkIcon />
            </Link>
          </ListItem>
        </List>
        <WorkImage alt="run" src="/images/run/run.png" />
      </Container>
    </Layout>
  )
}

export default Run

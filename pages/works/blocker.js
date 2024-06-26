import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import { Meta, Title, WorkImage } from '@/components/title'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
const Blocker = () => {
  return (
    <Layout title={'Blocker'}>
      <Container>
        <Title content={'works'} href={'/works'}>
          Blocker <Badge>11/2023</Badge>
        </Title>
        <Paragraph>
          Blockchain network build from scratch, user could create their own
          wallet and share data across the network.
        </Paragraph>
        <Paragraph>
          I build this project to understand how blockchain work, how to create
          a wallet, how to create a transaction, how to mine a block and how to
          share data across the network.
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>Golang, blockchain, decentralized</span>
          </ListItem>
          <ListItem>
            <Meta>repo</Meta>
            <Link href="https://github.com/hnimtadd/blocker.git">
              https://github.com/hnimtadd/blocker.git
              <ExternalLinkIcon />
            </Link>
          </ListItem>
        </List>
        <WorkImage alt="run" src="/images/blocker/blocker.png" />
      </Container>
    </Layout>
  )
}
export default Blocker

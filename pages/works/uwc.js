import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '@/components/title'
import Paragraph from '@/components/paragraph'
import Layout from '@/components/layouts/article'

const Work = () => {
  return (
    <Layout title="UWC">
      <Container>
        <Title>
          Urban garbage collect management <Badge>2022</Badge>
        </Title>
        <Paragraph>
          The web application that help local manager to manage current resource
          such as vehicle, worker,... as well as planning for garbage collect in
          city.
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>platform</Meta>
            Web application
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>Nodejs, Python, React, MapBox</span>
          </ListItem>
        </List>
        <WorkImage alt="senditsh" src="/images/thumbnail.jpg" />
      </Container>
    </Layout>
  )
}
export default Work

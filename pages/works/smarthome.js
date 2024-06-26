import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '@/components/title'
import Paragraph from '@/components/paragraph'
import Layout from '@/components/layouts/article'

const Work = () => {
  return (
    <Layout title="Smarthome">
      <Container>
        <Title content="works" href={'/works'}>
          IOT Smarthome <Badge>4/2023</Badge>
        </Title>
        <Paragraph>
          The mobile application that help remote manage registered IOT device.
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>platform</Meta>
            Mobile/Android
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>NodeJS, React Native</span>
          </ListItem>
        </List>
        <WorkImage alt="senditsh" src="/images/thumbnail.jpg" />
      </Container>
    </Layout>
  )
}
export default Work

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PostImage, Meta } from '@/components/title'
import Paragraph from '@/components/paragraph'
import Layout from '@/components/layouts/article'

const Peakee = () => {
  return (
    <Layout title="Peakee">
      <Container>
        <Title content={'works'} href={'/works'}>
          Peakee <Badge>8/2023</Badge>
        </Title>
        <Paragraph>
          Peakee is a platform that support user learning english in the most
          practical way. User could learn english in daily life activity from
          chat to web suffering.
        </Paragraph>
        <Paragraph>
          By leveraging the power of AI and activity-based learning, Peakee
          provide the most effective way to learn english.
        </Paragraph>
        <Paragraph>
          Peakee provide multiple-platform that could enable user to experience
          the seamless learning experience.
        </Paragraph>
        <List ml={4} mb={4}>
          <ListItem>
            <Meta>application architecture</Meta>
            Mono-repo, single codebase for all platform
          </ListItem>
          <ListItem>
            <Meta>platform</Meta>
            <span>Web, Ios, Android, Extension</span>
          </ListItem>
          <ListItem>
            <Meta>landing page</Meta>
            <Link href="https://peakee.co/">
              https://peakee.co/ <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>Typescript, ReactNative, React, NextJS, Webpack, Babel</span>
          </ListItem>
        </List>
        <PostImage
          alt="senditsh"
          src="/images/peakee/landing.png"
          title="Peakee landing page"
        />
      </Container>
    </Layout>
  )
}
export default Peakee

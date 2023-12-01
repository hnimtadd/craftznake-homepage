import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '@/components/section'
import { WorkGridItem } from '@/components/grid-item'
import Layout from '@/components/layouts/article'
import thumbSendit from '@/public/images/thumbnail.jpg'

import thumbGoTodo from '@/public/images/thumbnail.jpg'
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb="4">
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="senditsh"
              title="Senditsh"
              thumbnail={thumbSendit}
            >
              A secured file transfer application that enable user to seamless
              share file over a secured ssh connection. User could verify
              file&apos;s origin and private share file with their own
              signature.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="go-todo" title="Go Todo" thumbnail={thumbGoTodo}>
              Todo application with go, user could share their todo
              across-platform for seamless experience.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works

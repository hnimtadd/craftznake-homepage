import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '@/components/section'
import { WorkGridItem } from '@/components/grid-item'
import Layout from '@/components/layouts/article'
import thumbSendit from '@/public/images/sendit/Sendit.png'
import thumbGoTodo from '@/public/images/todo/todo.png'
import thumbSmartHome from '@/public/images/smarthome/smarthome.png'
import thumbUWC from '@/public/images/uwc/uwc.png'
import thumbBlocker from '@/public/images/blocker/blocker.png'
import thumbRun from '@/public/images/run/run.png'
import thumbBlinders from '@/public/images/blinders/blinders.png'
import thumbPeakee from '@/public/images/peakee/peakee.png'

const Works = () => {
  return (
    <Layout title={'Works'}>
      <Container>
        <Heading as="h3" fontSize={20} mb="4">
          Zenonian Labs
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="peakee" title="Peakee" thumbnail={thumbPeakee}>
              Language learning platform that enable users learn english in
              invisible way.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="blinder"
              title="Blinder"
              thumbnail={thumbBlinders}
            >
              Monorepo, serverless, microservices backend for a language
              learning platform - Peakee.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
        </Section>

        <Heading as="h3" fontSize={20} mb="4">
          Side Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="run" title="Run" thumbnail={thumbRun}>
              Create, Deploy and Run you code from anywhere with a few-step
              without cold-start.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="blocker" title="Blocker" thumbnail={thumbBlocker}>
              Blockchain network build from scratch, user could create their own
              wallet and share data across the network.
            </WorkGridItem>
          </Section>
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

        <Section delay={0.2}>
          <Divider my={6} />
        </Section>

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="uwc" title="UWC" thumbnail={thumbUWC}>
              Urban garbage collect management application on web platform.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="smarthome"
              title="IOT Smarthome"
              thumbnail={thumbSmartHome}
            >
              The mobile application that enable user to manage iot device in
              their house.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works

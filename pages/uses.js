import { Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'

import Section from '@/components/section'
import { UseGridItem } from '@/components/grid-item'
import Layout from '@/components/layouts/article'
import thumbnailWorkspace from '@/public/images/workspace/setup/thumbnail_setup_3.jpg'
import thumbnailKeyboard from '@/public/images/workspace/keyboard/thumbnail_keyboard_2.jpg'
import thumbnailWorkflow from '@/public/images/workflow/terminal/terminal_1.png'
import thumbnailMacbook from '@/public/images/workflow/macbook/macbook_1.png'

const Uses = () => {
  return (
    <Layout title={'Uses'}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Workflow setup
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section>
            <UseGridItem
              id="workflow"
              title="Workflow setup"
              thumbnail={thumbnailWorkflow}
            >
              Workflow is the process that I use to create projects. This
              section is where I put my configs and setup.
            </UseGridItem>
          </Section>

          <Section>
            <UseGridItem
              id="macbook"
              title="Macbook setup"
              thumbnail={thumbnailMacbook}
            >
              This section is where I setup my Macbook. Including monitor
              config, keyboard mapping, windows tiling and other stuff.
            </UseGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
        </Section>

        <Heading as="h3" fontSize={20} mb="4">
          Workspace
        </Heading>
        <Text>
          Welcome to my Equipment page! Here, I showcase the essential gear and
          equipment that I rely on in my daily workflow. From my laptops to
          productivity tools, you&apos;ll find a wide range of items that I use
          to create content and build projects. I hope you find this helpful!
        </Text>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <UseGridItem
              id="workspace"
              title="My Workspace"
              thumbnail={thumbnailWorkspace}
            >
              This is where the magic happens! I spend most of my time here
              working on projects and creating funny stuffs.
            </UseGridItem>
          </Section>
          <Section>
            <UseGridItem
              id="nj80"
              title="NJ80 Keyboard"
              thumbnail={thumbnailKeyboard}
            >
              My primary keyboard is the NJ80, a 75% mechanical keyboard with
              Gateron Brown switches. I love the compact layout and the tactile
              feel of the switches.
            </UseGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Uses

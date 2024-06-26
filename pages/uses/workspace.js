import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import { Meta, Title, WorkImage } from '@/components/title'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, List, ListItem } from '@chakra-ui/react'

const Workspace = () => {
  return (
    <Layout title={'Workspace'}>
      <Title content={'uses'} href={'/uses'}>
        Workspace
      </Title>
      {/* fix grammar error in the sentence below */}
      <Paragraph>
        This workspace is where all my projects are built. My setup are pretty
        basic.
      </Paragraph>
      <List ml={4} mb={4}>
        <ListItem>My setup</ListItem>
        <ListItem>
          <Meta>Monitor</Meta>1 (27&quot; curved Dell - S2721GHF)
        </ListItem>
        <Meta>Keyboard</Meta>{' '}
        <ListItem>
          <Link href="/uses/nj80" color={'white'}>
            Keydous NJ80 <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Monitor Arm</Meta> Human Monition
        </ListItem>
      </List>
      <WorkImage
        alt={'workspace setup'}
        src={'/images/workspace/setup/thumbnail_setup_1.jpg'}
        title={'workspace setup'}
      />
      <WorkImage
        alt={'workspace setup'}
        src={'/images/workspace/setup/thumbnail_setup_3.jpg'}
      />
    </Layout>
  )
}
export default Workspace

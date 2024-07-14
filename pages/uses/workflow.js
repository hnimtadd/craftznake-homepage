import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import { Meta, PostImage, Title } from '@/components/title'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, List, ListItem } from '@chakra-ui/react'

const UseWorkflow = () => {
  return (
    <Layout title="Workflow">
      <Title content={'uses'} href={'/uses'}>
        Workflow
      </Title>
      <Paragraph>
        Currently, my workflow is mainly in terminal, so this section will focus
        on the terminal workflow. I&apos;ve been work with terminal for around 2
        years, there&apos;re a lot of cool stuff that I want to introduce to
        you. By utilizing the terminal, I can make my workflow more efficient
        and productive.
      </Paragraph>
      <Paragraph>
        Basically, my setup consists of Nvim(using for editing text), Fish (for
        shell), Lazygit (improve git flow), and Tmux(terminal multiplexer).
      </Paragraph>
      <List ml={4} mb={4}>
        <ListItem>
          <Meta>Config file</Meta>
          <Link href="https://github.com/craftznake/dotfiles.git">
            Github <ExternalLinkIcon />
          </Link>
        </ListItem>
      </List>
      <PostImage
        alt={'workflow_overview'}
        src={'/images/workflow/terminal/terminal_1.png'}
        title={'Alacritty + Nvim + Tmux + Fish'}
      />
      <PostImage
        alt={'tmux as terminal multiplexer'}
        src={'/images/workflow/terminal/tmux_1.png'}
        title={'tmux as terminal multiplexer'}
      />
      <PostImage
        alt={'nvim dashboard'}
        src={'/images/workflow/terminal/nvim_dashboard.png'}
        title={'My Nvim dashboard'}
      />
      <PostImage
        alt={'nvim dashboard'}
        src={'/images/workflow/terminal/nvim_dashboard_transparent.png'}
        title={'My Nvim dashboard with transparent background'}
      />
      <PostImage
        alt={'nvim lazygit'}
        src={'/images/workflow/terminal/nvim_lazygit_normal.png'}
        title={'Lazy Git'}
      />
      <PostImage
        alt={'nvim telescope'}
        src={'/images/workflow/terminal/nvim_telescope_normal.png'}
        title={'Telescope finder'}
      />
    </Layout>
  )
}

export default UseWorkflow

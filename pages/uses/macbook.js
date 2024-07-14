import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import { Meta, Title, PostImage } from '@/components/title'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Link, List, ListItem } from '@chakra-ui/react'

//TODO: add image list or caseroul
const UseMacbook = () => {
  return (
    <Layout title={'Macbook'}>
      <Title content={'uses'} href={'/uses'}>
        Macbook <Badge>10/2023</Badge>
      </Title>
      <Paragraph>
        This is the third laptop I&apos;ve owned, and I&apos;ve been using it
        for approximately a year. So far, I am still quite satisfied with its
        performance. It is capable of handling almost every task I need to do,
        and I rarely encounter any performance issues that would prompt me to
        consider an upgrade.
      </Paragraph>
      <Paragraph>
        I have installed various tools on this computer, including a note-taking
        application (Obsidian), window tiling (yabai), keyboard mapping
        (karabiner), and more.
      </Paragraph>
      <Paragraph>
        I think I&apos;ll focus on the window tiling and keyboard mapping this
        post. The note taking application will be covered in another post as
        it&apos; a little complicated.
      </Paragraph>
      <Paragraph>
        I&apos;m a big fan of nvim, so I prefer to perform all tasks using only
        the keyboard. That&apos;s why I need to customize the keyboard mappings
        because the default ones don&apos;t suit my needs. I use the Caps Lock
        key as the hyper key, and most of my key mappings revolve around this
        hyper key. This allows me to navigate through my system using Vim-motion
        key style. It fulfills all my requirements, and I find it really
        impressive.
      </Paragraph>
      <Paragraph>
        I use Yabai as a window tiling manager, which is an alternative to i3 in
        Linux OS (I am already familiar with it since my previous computer ran
        Linux). It assists me in organizing screen space more effectively and
        allows for quick navigation between windows.
      </Paragraph>
      <List ml={4} mb={4}>
        <ListItem>
          <Meta>Model</Meta> Apple Macbook Pro 14 inch
        </ListItem>
        <ListItem>
          <Meta>Chip</Meta> Apple M series
        </ListItem>
        <ListItem>
          <Meta>RAM</Meta> 16GB
        </ListItem>
        <ListItem>
          <Meta>Storage</Meta> 512GB
        </ListItem>
        <ListItem>
          <Meta>My yabai config</Meta>
          <Link href="https://github.com/craftznake/dotfiles.git">
            Github at /.config/yabai <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>My simple keymapping(skhd) config</Meta>
          <Link href="https://github.com/craftznake/dotfiles.git">
            Github at /.config/skhd <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Karabiner config</Meta>
          <Link href="https://github.com/craftznake/dotfiles.git">
            Github at /.config/karabiner <ExternalLinkIcon />
          </Link>
        </ListItem>
      </List>
      <PostImage
        alt={'My macbook setup'}
        src={'/images/workflow/macbook/macbook_1.png'}
        title={'Yabai + Skhd + Karabiner'}
      />
    </Layout>
  )
}
export default UseMacbook

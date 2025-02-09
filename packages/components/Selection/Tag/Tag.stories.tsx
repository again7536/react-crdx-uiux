import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';
import TagGroup from './TagGroup';
import TagLink from './TagLink';

export default {
  title: 'Selection/Tag',
  component: TagGroup,
} as Meta;

type Story = StoryObj<typeof TagGroup>;
export const Primary: Story = {
  args: {
    children: [<Tag>태그</Tag>, <TagLink>태그링크</TagLink>],
  },
};

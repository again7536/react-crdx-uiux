import type { Meta, StoryObj } from '@storybook/react';

import SkipLink from './SkipLink';

export default {
  title: 'Discover/SkipLink',
  component: SkipLink,
} as Meta;

type Story = StoryObj<typeof SkipLink>;
export const Primary: Story = {
  args: {
    children: '본문 바로가기',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import MainMenu from './MainMenu';

export default {
  title: 'Discover/MainMenu',
  component: MainMenu,
} as Meta;

type Story = StoryObj<typeof MainMenu>;
export const Primary: Story = {
  args: {},
};

import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

export default {
  title: 'Input/Textarea',
  component: Textarea,
} as Meta;

type Story = StoryObj<typeof Textarea>;
export const Primary: Story = {
  args: {
    label: '텍스트 입력',
    maxLength: 100,
  },
};

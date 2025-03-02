import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput';
import Button from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';

export default {
  title: 'Input/TextInput',
  component: TextInput,
} as Meta;

type Story = StoryObj<typeof TextInput>;
export const Primary: Story = {
  args: {
    label: '텍스트 입력',
    hint: '힌트 텍스트',
    size: 'medium',
    onDelete: () => {},
    type: 'password',
  },
};

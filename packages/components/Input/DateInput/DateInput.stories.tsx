import type { Meta, StoryObj } from '@storybook/react';

import DateInput from './DateInput';

export default {
  title: 'Input/DateInput',
  component: DateInput,
} as Meta;

type Story = StoryObj<typeof DateInput>;
export const Primary: Story = {
  args: {
    label: '텍스트 입력',
    maxLength: 100,
  },
};

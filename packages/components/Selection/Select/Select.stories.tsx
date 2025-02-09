import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

export default {
  title: 'Selection/Select',
  component: Select,
} as Meta;

type Story = StoryObj<typeof Select>;
export const Primary: Story = {
  args: {
    label: '기본',
    id: 'select-1',
    hint: '힌트 텍스트',
    children: (
      <>
        <option value="">항목1</option>
        <option value="">항목2</option>
      </>
    ),
    disabled: false,
  },
};

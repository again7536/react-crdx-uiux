import type { Meta, StoryObj } from '@storybook/react';

import SelectSorting from './SelectSorting';

export default {
  title: 'Selection/SelectSorting',
  component: SelectSorting,
} as Meta;

type Story = StoryObj<typeof SelectSorting>;
export const Primary: Story = {
  args: {
    id: 'select-1',
    children: (
      <>
        <option value="">항목1</option>
        <option value="">항목2</option>
      </>
    ),
    disabled: false,
  },
};

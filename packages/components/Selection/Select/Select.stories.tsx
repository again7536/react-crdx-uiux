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

export const Disabled: Story = {
  args: {
    label: '비활성화',
    id: 'select-2',
    hint: '힌트 텍스트',
    children: (
      <>
        <option value="">항목1</option>
        <option value="">항목2</option>
      </>
    ),
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: '오류',
    id: 'select-3',
    hint: '힌트 텍스트',
    children: (
      <>
        <option value="">항목1</option>
        <option value="">항목2</option>
      </>
    ),
    isError: true,
  },
};

export const Complete: Story = {
  args: {
    label: '완료',
    id: 'select-4',
    hint: '힌트 텍스트',
    children: (
      <>
        <option value="">항목1</option>
        <option value="">항목2</option>
      </>
    ),
    isComplete: true,
  },
};

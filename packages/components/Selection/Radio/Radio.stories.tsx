import type { Meta, StoryObj } from '@storybook/react';

import Radio from './Radio';

export default {
  title: 'Selection/Radio',
  component: Radio,
} as Meta;

type Story = StoryObj<typeof Radio>;
export const Primary: Story = {
  args: {
    label: '기본',
    id: 'radio-1',
  },
};

export const Large: Story = {
  args: {
    label: '기본',
    id: 'radio-2',
    size: 'large',
  },
};

export const Description: Story = {
  args: {
    label: '기본',
    id: 'radio-3',
    description: '부가적인 설명이 들어갑니다.',
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화',
    id: 'radio-4',
    disabled: true,
  },
};

export const Chip: Story = {
  args: {
    label: '칩',
    id: 'radio-5',
    type: 'chip',
  },
};

export const ChipDisabled: Story = {
  args: {
    label: '칩',
    id: 'radio-6',
    type: 'chip',
    disabled: true,
  },
};

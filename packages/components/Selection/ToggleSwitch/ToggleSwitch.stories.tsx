import type { Meta, StoryObj } from '@storybook/react';

import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'Selection/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

type Story = StoryObj<typeof ToggleSwitch>;
export const Primary: Story = {
  args: {
    id: 'toggle-switch',
    children: 'Toggle Switch',
  },
};

export const Disabled: Story = {
  args: {
    id: 'toggle-switch',
    children: 'Toggle Switch',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    id: 'toggle-switch',
    children: 'Toggle Switch',
    size: 'large',
  },
};

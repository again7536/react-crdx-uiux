import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import Icon from '../../Others/Icon/Icon';

export default {
  title: 'Action/Button',
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    color: 'primary',
    children: '버튼',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: '버튼',
  },
};

export const Tertiary: Story = {
  args: {
    color: 'tertiary',
    children: '버튼',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: '버튼',
  },
};

export const IconButton: Story = {
  args: {
    variant: 'icon',
    children: <Icon name="login-go" />,
  },
};

export const IconButtonBorder: Story = {
  args: {
    variant: 'icon-border',
    children: <Icon name="login-go" />,
  },
};

export const Xsmall: Story = {
  args: {
    size: 'xsmall',
    children: '버튼',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: '버튼',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: '버튼',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: '버튼',
  },
};

export const Xlarge: Story = {
  args: {
    size: 'xlarge',
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '버튼',
  },
};

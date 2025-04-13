import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from './Breadcrumb';

export default {
  title: 'Discover/Breadcrumb',
  component: Breadcrumb,
} as Meta;

type Story = StoryObj<typeof Breadcrumb>;
export const Primary: Story = {
  args: {
    paths: [
      { label: '홈', href: '#', home: true },
      { label: '서비스 신청', href: '#' },
      { label: '서비스 신청2', href: '#' },
      { label: '서비스 신청3', href: '#' },
      { label: '서비스 신청4', href: '#' },
      { label: '서비스 신청5', href: '#' },
    ],
  },
};

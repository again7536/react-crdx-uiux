import type { Meta, StoryObj } from '@storybook/react';
import InPageNavigation from './InPageNavigation';

const meta: Meta<typeof InPageNavigation> = {
  title: 'Discover/InPageNavigation',
  component: InPageNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InPageNavigation>;

export const Default: Story = {
  args: {
    title: '장애아동수당',
    caption: '빠른이동',
    items: [
      { label: '서비스 개요', href: '#section_01' },
      { label: '서비스 상세', href: '#section_02' },
      { label: '신청 방법 및 절차', href: '#section_03' },
      { label: '제출 서류', href: '#section_04' },
      { label: '함께 신청할 수 있는 서비스', href: '#section_05' },
      { label: '부가정보', href: '#section_06' },
      { label: '정보 변경 내역', href: '#section_07' },
    ],
    actions: [
      {
        label: '온라인 신청하기',
        info: '장애아동수당 외 1건',
      },
    ],
  },
  render: (args) => {
    return (
      <div style={{ position: 'relative' }}>
        <InPageNavigation {...args} />
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './Pagination';
import { useState } from 'react';

export default {
  title: 'Discover/Pagination',
  component: Pagination,
} as Meta;

type Story = StoryObj<typeof Pagination>;
export const Primary: Story = {
  args: {
    totalPages: 100,
    currentPage: 1,
    onPageChange: () => {},
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  },
};

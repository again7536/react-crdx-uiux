import type { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";

export default {
  title: "Action/Link",
  component: Link,
} as Meta;

type Story = StoryObj<typeof Link>;
export const Primary: Story = {
  args: {
    children: "버튼",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import Identifier from "./Identifier";

export default {
  title: "Identity/Identifier",
  component: Identifier,
} as Meta;

type Story = StoryObj<typeof Identifier>;
export const Default: Story = {
  args: {
    children: "이 누리집은 대한민국 공식 전자정부 누리집입니다.",
  },
};

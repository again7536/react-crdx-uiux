import type { Meta, StoryObj } from "@storybook/react";

import Masthead from "./Masthead";

export default {
  title: "Identity/Masthead",
  component: Masthead,
} as Meta;

type Story = StoryObj<typeof Masthead>;
export const Default: Story = {
  args: {
    children: "이 누리집은 대한민국 공식 전자정부 누리집입니다.",
  },
};

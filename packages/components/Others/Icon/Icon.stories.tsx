import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

export default {
  title: "Icon/Icon",
  component: Icon,
} as Meta;

type Story = StoryObj<typeof Icon>;
export const Default: Story = {
  args: {
    name: "flag",
  },
};

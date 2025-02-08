import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

export default {
  title: "Selection/Checkbox",
  component: Checkbox,
} as Meta;

type Story = StoryObj<typeof Checkbox>;
export const Primary: Story = {
  args: {
    label: "기본",
    id: "checkbox-1",
  },
};

export const Large: Story = {
  args: {
    label: "기본",
    id: "checkbox-2",
    size: "large",
  },
};

export const Description: Story = {
  args: {
    label: "기본",
    id: "checkbox-3",
    description: "부가적인 설명이 들어갑니다.",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    id: "checkbox-4",
    disabled: true,
  },
};

export const Chip: Story = {
  args: {
    label: "칩",
    id: "checkbox-5",
    type: "chip",
  },
};

export const ChipDisabled: Story = {
  args: {
    label: "칩",
    id: "checkbox-5",
    type: "chip",
    disabled: true,
  },
};

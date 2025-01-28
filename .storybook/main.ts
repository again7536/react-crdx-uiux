import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "../packages"),
          },
        ],
      },
    });
  },
};
export default config;

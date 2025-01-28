import type { Preview } from "@storybook/react";
import "krds-uiux/resources/scss/component/output.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

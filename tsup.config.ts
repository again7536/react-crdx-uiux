import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["packages/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
});

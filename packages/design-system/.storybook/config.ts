import { configure } from "@storybook/html";

function loadStories() {
  // automatically import all files ending in *.stories.tsx
  const req = require.context("../src", true, /\.stories\.tsx$/);

  req.keys().forEach(req);
}

configure(loadStories, module);

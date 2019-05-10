import atImport from "postcss-import";
import cssNano from "cssnano";
import path from "path";
import presetEnv from "postcss-preset-env";
import purgeCss from "@fullhuman/postcss-purgecss";

export default ctx => {
  const contentForCtx = ctx.file.replace(
    path.basename(ctx.file),
    "**/*.{tsx,html}"
  );

  return {
    plugins: [
      atImport,
      presetEnv({
        features: {
          "nesting-rules": true
        }
      }),
      ...(ctx.env === "production"
        ? [
            purgeCss({
              content: [contentForCtx],
              defaultExtractor: content =>
                content.match(/[A-Za-z0-9-_:/]+/g) || []
            }),
            cssNano
          ]
        : [])
    ]
  };
};

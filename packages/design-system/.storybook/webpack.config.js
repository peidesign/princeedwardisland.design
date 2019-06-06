module.exports = ({ config }) => {
  const isProd = process.env.NODE_ENV === "production";
  const isDev = process.env.NODE_ENV === "development";

  config.module.rules.push(
    {
      test: /\.stories\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        }
      ]
    }
  );

  config.resolve.extensions.push(".ts", ".tsx");

  console.log(isProd);

  if (!isProd) {
    config.module.rules.push({
      test: /\.stories\.(ts|tsx)$/,
      loaders: [require.resolve("@storybook/addon-storysource/loader")],
      enforce: "pre"
    });
  }

  return config;
};

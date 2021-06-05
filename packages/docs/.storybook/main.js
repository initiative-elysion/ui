module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: require('../../../babel.config.js'),
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-essentials",
    "storybook-addon-paddings",
    "storybook-addon-grid/preset",
    "@storybook/addon-storysource"
  ],
  typescript: {
    reactDocgen: "none"
  }
}
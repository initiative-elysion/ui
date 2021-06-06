module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      
      options: {
        babelOptions: require('../../../babel.config.js'),
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-essentials',
    'storybook-addon-paddings',
    'storybook-addon-grid/preset',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
          prettierConfig: require('path').resolve(__dirname, '../../../.prettierrc')
        },
        rule: {
          include: [require('path').resolve(__dirname, '../../packages/src/components/')]
        }
      },
    }
  ],
  typescript: {
    reactDocgen: 'none'
  }
}
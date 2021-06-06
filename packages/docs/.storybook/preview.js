import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    sort: 'requiredFirst'
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  grid: {
    gridOn: true,
    columns: 12,
    gap: '30px',
    gutter: '15px',
    maxWidth: '1140px',
  },
  paddings: {
    values: [
      { name: 'Small', value: '16px' },
      { name: 'Medium', value: '32px' },
      { name: 'Large', value: '64px' },
    ],
  },
}
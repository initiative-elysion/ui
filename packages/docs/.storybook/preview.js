import { DocsPage, DocsContainer } from '@storybook/addon-docs';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  grid: {
    gridOn: true,
    columns: 12,
    gap: '20px',
    gutter: '50px',
    maxWidth: '1024px',
  },
  paddings: {
    values: [
      { name: 'Small', value: '16px' },
      { name: 'Medium', value: '32px' },
      { name: 'Large', value: '64px' },
    ],
    default: 'Medium',
  },
}
const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

const baseConfig = {
  url: 'https://blog.iasql.com',
};
const localConfig = {
  url: 'http://localhost:3000'
};
const config = process.env.IASQL_ENV === 'local' ? Object.assign(baseConfig, localConfig) : baseConfig;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'IaSQL',
  tagline: 'AWS Infrastructure as SQL',
  url: config.url,
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  customFields: config,

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          width: '70',
          alt: 'logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.png',
          href: 'https://iasql.com',
          target: '_self',
        },
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Home',
                to: 'https://iasql.com',
                target: '_self',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/iasql',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/infrasql',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});

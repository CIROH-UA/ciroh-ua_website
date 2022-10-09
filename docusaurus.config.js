// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cooperative Institute for Research to Operations in Hydrology',
  tagline: 'CIROH - Nextgen for Hydrological forecasting and operations',
  url: 'http://ciroh.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ciroh_logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alabama Water Institute', // Usually your GitHub org/user name.
  projectName: 'AlabamaWaterInstitute', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/AlabamaWaterInstitute/data_access_examples/blob/main/README.md',
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
      navbar: {
        title: 'CIROH',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ciroh_logo.png',          
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial/tutorial-intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'About',
          },
          {
            href: 'https://github.com/AlabamaWaterInstitute',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About CIROH',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [              
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/alabama-water-institute/mycompany/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AlabamaWater',
              },
            ],
          },
          {
            title: 'More',
            items: [              
              {
                label: 'GitHub',
                href: 'https://github.com/AlabamaWaterInstitute',
              },
              {
                label: 'AWI - Alabama Water Institute',
                href: 'http://ovpred.ua.edu/alabama-water-institute/',
              },
              {
                label: '2i2c-CIROH GitHub',
                href: 'https://github.com/2i2c-org/awi-ciroh-image'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CIROH - The University of Alabama`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

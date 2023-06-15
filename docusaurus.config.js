// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cooperative Institute for Research to Operations in Hydrology',
  staticDirectories: ['static','img'],
  tagline: 'CIROH - Nextgen for Hydrological forecasting and operations',
  url: 'http://ciroh.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ciroh_logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CIROH-UA', // Usually your GitHub org/user name.
  projectName: 'CIROH-UA', // Usually your repo name.

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
           editUrl:'https://github.com/CIROH-UA/ciroh-ua_website/edit/main/',
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
            docId: 'membersandpartners/membersandpartners-intro',
            position: 'left',
            label: 'Members and Partners',
          },
          {
            type: 'doc',
            docId: 'products/products-intro',
            position: 'left',
            label: 'Products',
          },
          {
            type: 'doc',
            docId: 'services/2i2c-intro',
            position: 'left',
            label: 'Services',
          }, 
          {
            href: '/about',
            label: 'About us',
            position: 'right',
          },
          {
            href: '/contact',
            label: 'Contact us',
            position: 'right',
          },
          {
            href: 'https://github.com/CIROH-UA',
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
                to: '/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [              
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/uaciroh/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/UA_CIROH',
              },
            ],
          },
          {
            title: 'More',
            items: [              
              {
                label: 'GitHub',
                href: 'https://github.com/CIROH-UA',
              }
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

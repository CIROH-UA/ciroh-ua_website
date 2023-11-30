// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "CIROH DocuHub",
  staticDirectories: ["static", "img"],
  tagline: "Cooperative Institute for Research to Operations in Hydrology",
  url: "http://ciroh.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/docuhub-logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "CIROH-UA", // Usually your GitHub org/user name.
  projectName: "CIROH-UA", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/CIROH-UA/ciroh-ua_website/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      stylesheets: [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        // ... other stylesheets
      ],
      navbar: {
        title: "CIROH DocuHub",
        logo: {
          alt: "CIROH Logo",
          src: "img/docuhub-logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "products/intro",
            position: "left",
            label: "Products",
          },
          {
            type: "doc",
            docId: "services/intro",
            position: "left",
            label: "Services",
          },
          {
            type: "doc",
            docId: "education/education",
            position: "left",
            label: "Education",
          },
          {
            href: "/blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "/about",
            label: "About us",
            position: "right",
          },
          // {
          //   href: 'https://github.com/CIROH-UA',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "About CIROH",
                to: "/about",
              },
              {
                label: "Visit ciroh.org",
                href: "https://ciroh.org",
              },
            ],
          },
          {
            title: "Follow us on",
            items: [
              {
                html: `
                <a href="https://ciroh.org" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH" style="margin-left:-15px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="CIROH on YouTube" width="70" height="60" />
              </a>
              <a href="https://ciroh.org" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:-15px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="CIROH on LinkedIn" width="70" height="60" />
              </a>
              <a href="https://ciroh.org" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:-25px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/702/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="CIROH on Facebook" width="70" height="60" />
              </a> 
                  
                `,
              },
              {
                html: `
                <a href="https://ciroh.org" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:0px;">
                <img src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" alt="CIROH on Instagram" width="45" height="45" />
              </a>
              <a href="https://ciroh.org" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:5px;">
                <img src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" alt="CIROH on X" width="40" height="40" />
              </a>
              <a href="https://ciroh.org" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:5px;">
                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="CIROH on GitHUb" width="40" height="40" />
              </a>
                
                `,
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
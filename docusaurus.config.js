import {themes as prismThemes} from 'prism-react-renderer';

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
        blog: {
          blogTitle: 'DocuHub blog!',
          blogDescription: 'A DocuHub powered blog!',
          postsPerPage: 'ALL',
          authorsMapPath: 'blog/authors.yaml',
        },
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
          {to: 'blog', label: 'Blog', position: 'right'},
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
            type: "doc",
            docId: "policies/intro",
            position: "left",
            label: "Policies and Best Practices",
          },
          {
            href: "/about",
            label: "About us",
            position: "right",
          },
          {
            href: "/contribute",
            label: "Contribute",
            position: "right",
          },
          {
            href: 'https://github.com/CIROH-UA/ciroh-ua_website',
             label: 'Repo',
             position: 'right',
          },
          {
            href: `http://portal.ciroh.org/`,
              label: 'Portal',
              position: 'right',
          }
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
              {
                label: "Visit portal.ciroh.org",
                href: "http://portal.ciroh.org",
              },
            ],
          },
          {
            title: "Follow us on",
            items: [
              {
                html: `
                <a href="https://www.youtube.com/@UA_CIROH" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH" style="margin-left:-15px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="CIROH on YouTube" width="70" height="60" />
              </a>
              <a href="https://www.linkedin.com/company/uaciroh/" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:-15px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="CIROH on LinkedIn" width="70" height="60" />
              </a>
              <a href="https://www.facebook.com/UACIROH/" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:-25px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/702/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="CIROH on Facebook" width="70" height="60" />
              </a> 
                  
                `,
              },
              {
                html: `               
              <a href="https://twitter.com/UA_CIROH" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:5px;">
                <img src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" alt="CIROH on X" width="40" height="40" />
              </a>
              <a href="https://github.com/CIROH-UA" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:5px;">
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config; 
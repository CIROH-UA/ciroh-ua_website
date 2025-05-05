import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CIROH DocuHub",
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
        gtag: {
          trackingID: 'G-7KD31X6H62',
          anonymizeIP: true,
        },
        blog: false, // Blogs and its settings are now in the custom blog plugin below. Its because we have tags based filters in community impact page. Those filters are coming from Blog posts.
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

  plugins: [
    // Lunr Search Plugin for search functionality
    [
      require.resolve('docusaurus-lunr-search'), 
      {
        languages: ['en'], // language codes for search
      }
    ],
    
    // Draw.io Plugin for embedding diagrams
    ['drawio', {}],
    
    // Custom Blog Plugin
    [
      './plugins/plugin-content-blog.js', 
      {
        blogTitle: "DocuHub blog!",
        blogDescription: "A DocuHub powered blog!",
        postsPerPage: "ALL", // Display all posts on a single page
        path: "blog", // Path to the blog posts
        authorsMapPath: "authors.yaml", // Path to the authors' mapping file
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: true,
        },
      },
      stylesheets: [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        // ... other stylesheets
      ],
      navbar: {
        title: "DocuHub",
        logo: {
          alt: "CIROH Logo",
          src: "img/docuhub-logo.png",
        },
        items: [
          { to: "blog", label: "Blog", position: "right" },
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
            href: "/impact",
            label: "Community Impact",
            position: "left",
          },
          {
            type: 'dropdown',
            label: 'Learn',
            position: 'left',
            items:[
              {
                type: "doc",
                docId: "education/education",
                label: "Education",
              },
              {
                type: "doc",
                docId: "policies/intro",
                label: "Policies",
              },
            ]
          },
                    
          
          {
            href: "/news",
            label: "News",
            position: "right",
          },
          {
            href: "https://portal.ciroh.org/", // Research portal URL
            label: "Portal",
            position: "right",
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Education',
                href: '/docs/education/'
              },
              {
                label: 'Contact Us',
                href: '/contact'
              },
              {
                label: 'Contribute',
                href: '/docs/contribute'
              },
              {
                label: 'Feeback',
                href: 'https://forms.office.com/r/5ww7qRWwwf'
              },
              {
                label: 'CIROH Portal',
                href: 'http://portal.ciroh.org/'
              }
            ]
          },
          {
            title: 'About CIROH',
            items: [
              {
                label: 'About Us',
                href: 'https://ciroh.ua.edu/about/'
              },
              {
                label: 'Members & Partners',
                href: 'https://ciroh.ua.edu/about/ciroh-partners/'
              },
              {
                label: 'Contact CIROH',
                href: 'https://ciroh.ua.edu/contact-us/'
              },
              {
                label: 'DocuHub Repository',
                href: 'https://github.com/CIROH-UA/ciroh-ua_website'
              }
            ]
          },
          {
            title: "Follow us on",
            items: [
              {
                html: `
                <div class="footer-social-links">
                <a href="https://www.youtube.com/@UA_CIROH" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH" style="margin-left:-15px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="CIROH on YouTube" width="70" height="60" />
              </a>
              <a href="https://www.linkedin.com/company/uaciroh/" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:-15px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="CIROH on LinkedIn" width="70" height="60" />
              </a>
              <a href="https://www.facebook.com/UACIROH/" target="_blank" rel="noreferrer noopener" aria-label="Visit CIROH"  style="margin-left:-25px">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/702/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="CIROH on Facebook" width="70" height="60" />
              </a> 
              </div>
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
        copyright: `<div class="footer__funding">
        This project received funding under award NA22NWS4320003 from NOAA Cooperative Institute Program. 
        The statements, findings, conclusions, and recommendations are those of the author(s) and do not 
        necessarily reflect the views of NOAA.
      </div>
      <div class="footer__bottom">
        Copyright © ${new Date().getFullYear()} CIROH - The University of Alabama
      </div>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    
};

module.exports = config;

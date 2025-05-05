import DocsLogo from '@site/static/img/contribute/docuhub_logo.png';

import DocsEditDark from '@site/static/img/contribute/docs_edit_dark.png';
import DocsEditLight from '@site/static/img/contribute/docs_edit_light.png';

import DocsPRDark from '@site/static/img/contribute/docuhub_pr_dark.png';
import DocsPRLight from '@site/static/img/contribute/docuhub_pr_light.png';

import DocsMDDark from '@site/static/img/contribute/docuhub_md_dark3.png';
import DocsMDLight from '@site/static/img/contribute/docuhub_md_light3.png';

import GitHubLogoLight from '@site/static/img/contribute/github_logo_light.png';
import GitHubLogoDark from '@site/static/img/contribute/github_logo_dark.png';

import TypingGraphic from '@site/static/img/graphics/why-docuhub-5.png'

export const contributeSimpleDocsCards = [
    {
      imgSrcLight: DocsLogo,
      imgSrcDark: DocsLogo,
      imgAlt: 'Visit the Documentation',
      cardTitle: '1. Visit the documentation',
      cardDescription: 'Visit docs.ciroh.org and navigate to the page you wish to modify.',
    },
    {
      imgSrcLight:DocsEditLight ,
      imgSrcDark: DocsEditDark,
      imgAlt: 'Edit page',
      cardTitle: '2. Edit page',
      cardDescription: 'Click on "Edit page" at the bottom of the page to make any necessary changes.',
    },
    {
      imgSrcLight: DocsPRLight,
      imgSrcDark: DocsPRDark,
      imgAlt: 'Submit a pull request',
      cardTitle: '3. Submit a Pull Request',
      cardDescription: 'Submit a pull request with your changes to the repository.',
    }
  ];
  
  export const contributeBlogsDocsCards = [
    {
      imgSrcLight:TypingGraphic,
      imgSrcDark: TypingGraphic,
      imgAlt: 'Write your blog post',
      cardTitle: '1. Write your blog post',
      cardDescription: 'Blog posts submitted to CIROH DocuHub should discuss projects that make use of CIROH\'s cyberinfrastructure.',
    },
    {
      imgSrcLight:DocsMDLight,
      imgSrcDark: DocsMDDark,
      imgAlt: 'Pull Request Template',
      cardTitle: '2. Fill out the issue template',
      cardDescription: 'Click the button below to access and fill out the blog post issue template with your project\'s information and the content of your blog post.',
      
    },
    {
      imgSrcLight: DocsPRLight,
      imgSrcDark: DocsPRDark,
      imgAlt: 'Submit the request form',
      cardTitle: '3. Submit the request form',
      cardDescription: 'Submit the filled-out issue template for your blog posts. CIROH\'s tech team will review your PR for publishing shortly.',
    }
  ];

  export const contributeProductsDocsCards = [
    {
      imgSrcLight:GitHubLogoLight,
      imgSrcDark: GitHubLogoDark,
      imgAlt: 'Upload your project to GitHub',
      cardTitle: '1. Upload your project to GitHub',
      cardDescription: 'Ensure that your project is publicly visible on GitHub and includes an informative README.md file.',
    },
    {
      imgSrcLight:DocsMDLight,
      imgSrcDark: DocsMDDark,
      imgAlt: 'Pull Request Template',
      cardTitle: '2. Fill out the issue template',
      cardDescription: 'Click the button below to access and fill out the product page issue template with your project\'s information.',
    },
    {
      imgSrcLight: DocsPRLight,
      imgSrcDark: DocsPRDark,
      imgAlt: 'Submit the request form',
      cardTitle: '3. Submit the request form',
      cardDescription: 'Submit the filled-out issue template for your product. CIROH\'s tech team will review your submission shortly.',
    }
  ];
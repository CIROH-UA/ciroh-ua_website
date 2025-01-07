# How to Contribute to CIROH DocuHub?

Thank you for your interest in contributing to CIROH's DocuHub, our technical documentation site! We appreciate contributions in different ways, from commenting on and adding project details to submitting pull requests (PRs). This guide will help you understand the process of contributing code to the CIROH DocuHub.

Our website is constructed using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Video Tutorial: 

The following video is a step-by-step guide on how to make minor edits, major edits, and test changes locally:

import VideoPlayer from '/src/components/VideoPlayer.js';

<VideoPlayer url="https://youtu.be/B8wp_eTW204?feature=shared"  />



## Minor Edits

To make minor edits, follow these steps:

1. Visit [docs.ciroh.org](https://docs.ciroh.org) and navigate to the page you wish to modify.
2. Click on "Edit page" at the bottom of the page to make any necessary changes.
3. Submit a Pull Request.
4. An admin will review and merge your changes.

## Major Edits

For significant modifications, please adhere to these steps:

1. Fork the repository from https://github.com/CIROH-UA/ciroh-ua_website.
2. After forking, implement your changes and commit them to your local repository.
3. Open a pull request. Once submitted, an admin will review and merge it.
4. GitHub Actions will automatically compile and publish the updates.

If you encounter any issues or have inquiries, please feel free to email us at ciroh-it-admin@ua.edu. Your contributions are highly valued!


=========================================

### Testing Changes Locally:

1. If not already installed, download and install the LTS version of Node.js from [here](https://nodejs.org/en).
2. To build and run the project locally, execute the following commands:

``` 
npm install
npm run build
npm run start
```

### Local Development

```
$ npm run start
```

This command launches a local development server and opens a browser window. Changes are typically reflected instantly without requiring a server restart.

### Build Process

```
$ npm run build
```

This command generates static content within the `build` directory, suitable for hosting via any static content service.

### Deployment

To deploy the website, compile the project into a deployable package:

```
$ npm run build
```

This will create a build directory within your project folder. You can then deploy the contents of this directory to your web server.

### Cheatsheet

- [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [tina.io](https://tina.io/)
- [Infima](https://infima.dev/docs/getting-started/introduction)

## Email us

For general inquiries, contact us at: ciroh-it-admin@ua.edu

To add content to this docusite, contact us at: ciroh-it-admin@ua.edu

## CIROH Slack channel

Connect with us on CIROH Slack channel : [ciroh-ua-it-admin](https://cirohworkspace.slack.com/archives/C057BLQB867)




# How to write a new Blog?

## Adding posts

### What file name to use?

DocuHub will extract a YYYY-MM-DD date from many patterns such as `YYYY-MM-DD-my-blog-post-title.md` or `YYYY/MM/DD/my-blog-post-title.md`. This enables you to easily group blog posts by year, by month, or to use a flat structure.

### Example (with Metadata/Front matter)

To publish in the blog, create a Markdown file within the blog directory.
For example, create a file at `/blog/2019-09-05-hello-docuhub.md`

e.g.

```
---
title: Welcome DocuHub
description: This is my first post on DocuHub.
slug: welcome-DocuHub
authors:
  - name: John Doe
    title: Co-creator of Product 1
    url: <Youe github product or external article link>
    image_url: <Author pic url>
  - name: Jane Doe
    title: Co-creator of Product 2
    url: <Youe github product or external article link>
    image_url: <Author pic url>
tags: [hello, docuhub, nextgen]
hide_table_of_contents: false
---

Welcome to this blog. This blog is created with [**DocuHub 2**](https://docs.ciroh.org/).

<!-- truncate -->

This is my first post on DocuHub.

A whole bunch of exploration to follow.
```

## What is Metadata/Front Matter

The front matter is useful to add more metadata to your blog post, for example, author information, but Docusaurus will be able to infer all necessary metadata without the front matter.

Front matter is provided at the very top of the file, enclosed by three dashes ---. The content is parsed as YAML.

```
---
title: My Doc Title
more_data:
  - Can be provided
  - as: objects
    or: arrays
---
```


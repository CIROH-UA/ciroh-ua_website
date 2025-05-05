---
sidebar_position: 2
title: "Working with the DocuHub repository"
description: "Learn how to submit pull requests to DocuHub and test changes locally."
tags: [CIROH, DocuHub, Contribute]
---

# Working with the DocuHub repository

DocuHub is hosted on GitHub, which offers plenty of options to contribute your changes to the site.

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

## Testing changes locally

> Please be sure to create a fork using the steps above before continuing.

1. If you haven't already, download and install the LTS version of Node.js from [here](https://nodejs.org/en).
2. To build and run the project locally, navigate to the project directory in your command line interface of choice.
3. Execute the following commands:

``` 
npm install
npm run build
npm run start
```

To quickly test out your changes, use this command:
```
$ npm run start
```
This command launches a local development server and opens a browser window. Changes are typically reflected instantly without requiring a server restart.

To deploy the website, you can instead compile the project into a deployable package:
```
$ npm run build
```
This will create a build directory within your project folder. You can then deploy the contents of this directory to your web server.

## Video Tutorial: 

Still need some extra help? If so, the following video is a step-by-step guide on how to make minor edits, major edits, and test changes locally:

import VideoPlayer from '/src/components/VideoPlayer.js';

<VideoPlayer url="https://youtu.be/B8wp_eTW204?feature=shared"  />
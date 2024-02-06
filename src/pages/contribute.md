# How to Contribute Code?

Thank you for your interest in contributing to the CIROH DocuHub - CIROH's technical documentation site! We welcome contributions in various forms, whether it's commenting on and adding CIROH project details or submitting pull requests (PRs). In this guide, we'll walk you through the process of contributing code to the CIROH DocuHub.

Our website is constructed using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Minor Changes

For minor changes, follow these steps:

1. Visit [docs.ciroh.org](https://docs.ciroh.org) and go to the page you want to edit.
2. Click on "Edit page" at the end of the page to add/update any content.
3. Create a Pull Request.
4. Your changes will be reviewed and merged by an admin.

## Major Changes

For significant changes, please follow these steps:

1. Go to https://github.com/CIROH-UA/ciroh-ua_website and fork the repo.
2. Once forked, make your changes and commit the changes in your local repository.
3. Create a pull request. Once submitted, admin will review and merge the pull request.
4. GitHub Actions will automatically build and publish the new changes.

If you encounter any issues or have questions, please don't hesitate to send an email to ciroh-it-admin@ua.edu. We appreciate your contributions!


=========================================

### Steps to test the changes in local machine:

1. Download and Install node js LTS version from https://nodejs.org/en if not already installed.

2. How to build and run this project locally.

``` 
npm install
npm run build
npm run start
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

To deploy the website, we need to compile this project to deployable package. 

```
$ npm run build
```

above command will create **build** directory in your project folder. We can now deploy the content of that directory to the web server. 

### Cheatsheet

- [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [tina.io](https://tina.io/)
- [Infima](https://infima.dev/docs/getting-started/introduction)

### Contributors
- Arpita Patel (apatel54@ua.edu)

## Email us

For general inquiries, contact us at : 'ciroh-it-admin@ua.edu'

Have a content to add to this docusite contact us at : 'ciroh-it-admin@ua.edu'


## CIROH Slack channel

Connect with us on CIROH Slack channel : ciroh-ua-it-admin
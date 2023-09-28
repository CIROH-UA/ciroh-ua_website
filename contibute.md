# How to Contribute Code

Thank you for your interest in contributing to CIROH technical documentation site! From commenting on and adding CIROH project details and sending PRs, all contributions are welcome. In this document, we'll cover the steps to contributing code to CIROH Docusite.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

For major changes:
    1. When contibuting to this repository, please first open an issue ticket and submit new issue.
    2. On the Issue ticket, under Development click on "Create a branch".
    3. Create a new branch and checkout locally.
    4. Make your changes in the branch and commit the changes.
    NOTE: Follow the steps below to test the changes locally.

For a minor changes:
    Go to "docs.ciroh.org" and follow the steps below:

    - Click on Edit page for adding new content.
    - Create a Pull Request.
    - Changes will be reviewed and Merged by admin.

Send email to : ciroh-it-admin@ua.edu if anything.

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

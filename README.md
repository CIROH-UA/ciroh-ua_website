# CIROH Documentation Site

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Workflow Swimlanes

![Workflow](https://static.swimlanes.io/c4b9a06048747d15188a73db0c296085.png)

### Installation

steps in a summary
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


### How do you test build folder locally?

[Reference Article](https://medium.com/swlh/need-a-local-static-server-here-are-several-options-bbbe77e59a11)

we need to run **live-server** inside **build** directory, which let you see how actual published version will look like. 

```
cd into build directory ....
$ npx live-server
```

This should open localhost:8080 with your published site.


-------
using lite-server

```
npx lite-server
```

-------
using http-server

```
npx http-server
```

### Cheatsheet

- [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [tina.io](https://tina.io/)
- [Infima](https://infima.dev/docs/getting-started/introduction)

### Contributors
- Arpita Patel (apatel54@ua.edu)

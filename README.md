# Domain7 Challenge Documentation

[![N|Solid](https://media.glassdoor.com/sqll/911998/domain7-squarelogo-1484939599315.png)](https://domain7.com/)

## Environment Setup

Reccommended node version: `v10.1.0`

After cloning the repository, in the root folder create a file called `.env`
Inside, simply add the following text (using your API key):

```
NEWS_API_KEY="<YOUR API KEY HERE>"
```

At this point, install the project dependencies:

```
$ npm install
```

The project has webpack configurations for both development and production. To build for production, simply run the command:

```
$ npm run prod
```

The contents of the build will be available in the `dist` folder, located at the project's root.

To start the `wepback-dev-server` run the command:

```
$ npm run dev
```

You should now have a server running on `localhost:8080`

## Primary Technologies and Development Tools

* React - A JavasScript library for building user interfaces.
* Webpack - JavaScript module bundler.
* Babel - A Javascript compiler.
* Axios - Promise based HTTP client.
* Styled Components - Visual primitives for the components. Use ES6 and CSS to style applications.
* ESLint - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## Considerations

* Services - Ordinarily I would create a service module for axios requests, but with only a single endpoint being hit in a single component, this seemed unnecessary.
* Redux - Due to the size of the application, I opted out of any advanced state management for the sake of simplicity.
* Secret Keys - As a front-end only application, I needed to store my secret keys somewhere private. I chose to use a gitignored .env file. Unfortunately, this means the API key will still end up in the webpack bundle. In an ideal scenerio, I would be routing this request through a backend (where the keys are stored) instead in order to keep the API key truly private.

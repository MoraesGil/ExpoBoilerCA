# Boiler Clean Architecture Expo
a boiler plate to start a project with Login using.
Expo React Native, Hooks, Recoil, TDD, Clean Architecture, SOLID, eslint airbnb, prettier

> ## Principles

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance
* Small Commits

> ## Design Patterns

* Factory
* Adapter
* Composite
* Decorator
* Dependency Injection
* Composition Root
* Builder
* Proxy

> ## Methodologies and Designs

* TDD
* Clean Architecture
* DDD
* Reactive Programming
* Responsive Layout
* Conventional Commits
* GitFlow
* Modular Design
* Dependency Diagrams
* Use Cases
* Continuous Integration
* Continuous Delivery
* Continuous Deployment

> ## Typescript Features 

* Advanced POO
* Interface
* Type Alias
* Namespace
* Module
* Utility Types
* Path Modularization
* Build
* Deploy
* Generics

> ## Tests Features

* Unit test
* Integration Test
* E2E test 
* Test Doubles
* Mocks
* Stubs
* Spies
* Fakes
* Dummies
# BoilerPlate Clean Architeture  

![Book reference](https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL.jpg )
![concepet img](./public/clean-architecture.jpeg)

# Technical overview

### Table of Contents

-   [Typescript](#typescript)
-   [Code overview](#code-overview)
-   [Available NPM Commands](#available-npm-commands)
-   [Other documentation for this service](#other-documentation-for-this-service)
-   [Local Development](#local-development) 
-   [Production build](#production-build)
-   [Project Descripition](#Critique)
 
 
## TypeScript

This project uses [TypeScript](https://wiki.indeed.com/display/FrontEnd/TypeScript) for production build and local development mode. 
 
the main entry point file (`/src/main/index.ts`).

## Code overview

This is a front-end TypeScript/JavaScript web app with support for universal React. 

All source code lives in `src` directory:

```
├── README.md
├── app
├── app.json
├── assets
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov-report
│   │   ├── base.css
│   │   ├── block-navigation.js
│   │   ├── favicon.png
│   │   ├── index.html
│   │   ├── prettify.css
│   │   ├── prettify.js
│   │   ├── remote-authentication.ts.html
│   │   ├── sort-arrow-sprite.png
│   │   ├── sorter.js
│   │   └── src
│   │       ├── App.tsx.html
│   │       ├── application
│   │       │   └── usecases
│   │       │       └── remote-authentication
│   │       │           ├── index.html
│   │       │           └── mock-authentication.ts.html
│   │       ├── data
│   │       │   ├── protocols
│   │       │   │   └── http
│   │       │   │       ├── http-response.ts.html
│   │       │   │       └── index.html
│   │       │   ├── test
│   │       │   │   ├── index.html
│   │       │   │   ├── mock-http-client.ts.html
│   │       │   │   └── mock-http-post.ts.html
│   │       │   └── usecases
│   │       │       └── authentication
│   │       │           ├── index.html
│   │       │           └── remote-authentication.ts.html
│   │       ├── domain
│   │       │   ├── data
│   │       │   │   ├── test
│   │       │   │   │   ├── index.html
│   │       │   │   │   ├── mock-http-client.ts.html
│   │       │   │   │   └── mock-http-clint.ts.html
│   │       │   │   └── usecases
│   │       │   │       └── authentication
│   │       │   │           ├── index.html
│   │       │   │           └── remote-authentication.ts.html
│   │       │   ├── errors
│   │       │   │   ├── index.html
│   │       │   │   ├── invalid-credentials-error.ts.html
│   │       │   │   └── unexpected-error.ts.html
│   │       │   ├── protocols
│   │       │   │   ├── http-client.ts.html
│   │       │   │   └── index.html
│   │       │   └── test
│   │       │       ├── index.html
│   │       │       └── mock-authentication.ts.html
│   │       ├── index.html
│   │       ├── infra
│   │       │   ├── axios-http-client
│   │       │   │   ├── axios-http-client.ts.html
│   │       │   │   ├── index.html
│   │       │   │   └── mock-axios.ts.html
│   │       │   ├── http
│   │       │   │   └── axios-http-client
│   │       │   │       ├── axios-http-client
│   │       │   │       │   ├── axios-http-client.ts.html
│   │       │   │       │   └── index.html
│   │       │   │       ├── axios-http-client.ts.html
│   │       │   │       └── index.html
│   │       │   └── test
│   │       │       ├── index.html
│   │       │       └── mock-axios.ts.html
│   │       └── presentation
│   │           ├── constants
│   │           │   ├── Colors.ts.html
│   │           │   ├── Layout.ts.html
│   │           │   └── index.html
│   │           └── pages
│   │               ├── SignIn
│   │               │   ├── index.html
│   │               │   ├── index.tsx.html
│   │               │   └── styles.ts.html
│   │               └── login
│   │                   ├── index.html
│   │                   └── login.tsx.html
│   └── lcov.info
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── App.tsx
│   ├── application
│   │   └── usecases
│   │       └── remote-authentication
│   │           ├── mock-authentication.ts
│   │           ├── remote-authentication.spec.ts
│   │           └── remote-authentication.ts
│   ├── domain
│   │   ├── errors
│   │   │   ├── index.ts
│   │   │   ├── invalid-credentials-error.ts
│   │   │   └── unexpected-error.ts
│   │   ├── models
│   │   │   ├── account-model.ts
│   │   │   └── index.ts
│   │   ├── protocols
│   │   │   ├── http-client.ts
│   │   │   └── index.ts
│   │   └── usecases
│   │       ├── authentication.ts
│   │       └── index.ts
│   ├── infra
│   │   ├── axios-http-client
│   │   │   ├── axios-http-client.spec.ts
│   │   │   ├── axios-http-client.ts
│   │   │   ├── index.ts
│   │   │   └── mock-axios.ts
│   │   └── mock-http.ts
│   └── presentation
│       └── theme
├── tsconfig-eslint.json
└── tsconfig.json
 
``` 

 
 
## Local development

### Step 1: Installation

This web app requires Node LTS/dubnium (v10.16+).

Switch to required Node version with

```bash
nvm use
```

Install app dependencies with

```bash
npm i
``` 

### Step 2: Running the local dev server

Start local development server with

```bash
npm run start:dev
```

This will start three processes in parallel:

-   Node.js server using [`ts-node-dev`](https://github.com/whitecolor/ts-node-dev) 
-   webpack bundling for the server-side templates

In local development mode, the app will be available at [`http://localhost:3000`](http://localhost:3000)

All changes to the client source code will be automatically re-compiled
and updated in the browser using [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/).

Changes to the server code will trigger `ts-node-dev` to automatically restart Node.js server.
 


## Production build

### Step 1: Installation

This web app requires Node LTS/dubnium (v10.16+).

Switch to required Node version with

```bash
nvm use
```

Install app dependencies with

```bash
npm i
```   

### Step 2: Running the local dev server

Start local development server with

```bash
npm run start
```

This will start three processes in parallel:

-   Node.js server using [`ts-node-dev`](https://github.com/whitecolor/ts-node-dev) 
-   webpack bundling for the server-side templates

In local production mode, the app will be available at [`http://localhost:3000`](http://localhost:3000)

## Available NPM commands
 | Command             | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| npm run start       | start expo server in development (no live-reload)                               |
| npm run android     | start expo server in development on Android Emulator or Device (no live-reload) |
| npm run ios         | start expo server in development on Ios Emulator or Device (no live-reload)     |
| npm run lint        | ESLint statically analyzes your code to quickly find problems.                  |
| npm run lint:fix    | ESLint finds can be automatically fixed                                         |
| npm run test        | Execute Jest tests                                                              |
| npm run test:watch  | Execute Jest tests and keep watching for changes                                |
| npm run test:staged | Execute Jest test of staged files only                                          |
| npm run test:ci     | Run all tests and check coverage                                                |
| npm run check       | Check pagekes updates available                                                 |
| npm run prepare     | Run commands to prepare the application                                         |
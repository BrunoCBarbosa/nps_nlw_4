# API

## Description
The api is created with NodeJs based in Typescript and Yarn package. Use `yarn init` to create `packaje.json`
#

## DEPENDENCES
- express
#

## DEV DEPENDENCE
- Typescript
- TS-NODE-DEV
#

## TYPESCRIPT
Dependence to work with typescript, `yarn add typescript -D`, to create it, and `yarn tsc --init` to create `tsconfig.json`, setting files.
#

## TS-NODE-DEV
Depend to convert automatically TS to JS, use it to run your API, to install use `yarn add ts-node-dev -D`. To run it use `ts-node-dev (path)`.
### NOTE: 
You can create a script in `package.json` to be easy your command, for example: `"scripts": {"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"},`.
With `--transpile-only` the server don't look the types and `--ignore-watch node_modules` ignore the directory when run the program. 
#
# CornerStone ES6 ⚛

![Herb](static/images/logo.png)

A Rollup boilerplate with babel and node-sass.

## Getting Started

If you don't have Node.js already,

* [Node](https://nodejs.org/)

To install local project dependencies, run:

  `npm install`

## Building
All of the build scripts are run through `npm`. Here are some common tasks:

`npm run build` - Rebuild the project into the `out` folder.

`npm run watch` - Rebuild the project and watch for changes.

`npm run serve` - Start a BrowserSync server, serving the `out` folder.

`npm run prod`  - Rebuild the project for production; this will take a little extra time.


run `npm run watch`, then `npm run serve` in another window/tab for development

##### Static Dependencies
Some of the dependencies are included as static external scripts, because the are incompatible with Rollup, they slow down the build process too much, or they aren't available through NPM.

| Library         | Version |
| --------------- | -------:|
| Font Awesome    | 4.7.0   |
| Normalize.css   | 5.0.0   |
| TweenMax        | 1.19.0  |

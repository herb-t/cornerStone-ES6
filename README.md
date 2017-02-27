# CornerStone ES6 - a simple project seed with ES6

## Getting Started

If you don't have Node.js already,

* [Node](https://nodejs.org/)

To install local project dependencies, run:

  `npm install`

### Running the Dev build
Run these processes in two separate console windows:

  process 1: `npm run watch` to build into the `out` folder

  process 2: `npm run serve` to serve what is in the `out` folder

### NPM scripts

`npm run clean`: rimraf out gae/static

`npm run serve`: browser-sync start --server out --files out --no-ghost-mode --no-notify --no-open

`npm run watch`: npm-run-all clean mkdir --parallel watch:`*`

`npm run build`: npm-run-all clean mkdir --parallel build:`*`

// Hack: npm run has poor cross-platform env var support.
if (process.env.DEBUG === undefined) process.env.DEBUG = 'build:*';

const fs = require('fs');
const debug = require('debug')('build:scss');
const sass = require('node-sass');
const {watch, args} = require('./build-util');

let building = false;

function build() {
  if (building) return; // block builds until they finish

  debug('bundling');

  building = true;

  renderBundle('./src/index.scss');
}

function renderBundle(file) {

  let output = args.prod === true ? 'compressed' : 'expanded';

  sass.render({
    file: file,
    includePaths: [ 'src/styles/base', 'src/styles' ],
    outFile: './out/index.css',
    outputStyle: output
  }, writeBundle);

};

function writeBundle(err, result) {
  if(err) return error(err);

  if (!err){
    fs.writeFile('./out/index.css', result.css, done);
  }
};

const error = (err) => {
  debug(`error while bundling\n File: ${err.file} | Line: ${err.line} | ${err.message}`);
  building = false;
};

function done(err) {
  if (err) return error(err);

  debug(`bundled`);
  building = false;
};

if (args.watch) {
  watch('src', {include: /(scss)$/gi}, build);
}

build();

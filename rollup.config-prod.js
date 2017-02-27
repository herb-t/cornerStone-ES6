const vue = require('rollup-plugin-vue');
const string = require('rollup-plugin-string');
const commonjs = require('rollup-plugin-commonjs');
const noderesolve = require('rollup-plugin-node-resolve');
const nodeglobals = require('rollup-plugin-node-globals');

module.exports = {

  context: 'window',
  format: 'iife',
  entry: 'src/index.js',
  dest: 'out/index.js',

  sourceMap: false,
  useStrict: true,
  exports: 'none',
  indent: false,

  plugins: [

    // import glsl files as strings
    string({ include: 'src/**/*.glsl' }),

    commonjs(), // best-effort translation from CJS module format to ES6 module format

    nodeglobals(), // shim node.js globals like `process` so that node.js packages work

    // resolve module paths using the node_modules folder
    noderesolve({ jsnext: true, browser: true }),

  ]

};

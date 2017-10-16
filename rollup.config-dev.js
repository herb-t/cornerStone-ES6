const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const eslint = require('rollup-plugin-eslint');
const noderesolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue');

module.exports = {
  context: 'window',
  format: 'iife',
  entry: 'src/index.js',
  dest: 'out/index.js',

  sourceMap: 'inline',
  useStrict: true,
  exports: 'none',
  indent: false,

  external: [
    'vue'
  ],

  globals: {
    'vue': 'Vue'
  },

  plugins: [
    // lint first
    eslint({ throwError: true }),

    // best-effort translation from CJS module format to ES6 module format
    commonjs(),

    vue({ include: 'src/**/*.vue', compileTemplate: true }), // import vue templates as render functions

    // resolve module paths using the node_modules folder
    noderesolve({ jsnext: true, browser: true }),

    babel({ runtimeHelpers: true, exclude: 'node_modules/**' })
  ]
};

// Hack: npm run has poor cross-platform env var support.
if (process.env.DEBUG === undefined) process.env.DEBUG = 'build:*';

const fs = require('fs');
const path = require('path');
const child = require('child_process');
const debug = require('debug')('build:draco');

function findOBJFiles(dir) {

  const results = [];

  fs.readdirSync(dir).forEach(file => {

    file = dir + '/' + file;

    const stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {

      const children = findOBJFiles(file);
      results.push(...children);

    } else if (file.slice(-3) === 'obj') {

      results.push(file);

    }

  });

  return results;

}

function buildDRCFromOBJ(objpath) {

  const drcpath = objpath.slice(0, -3) + 'drc';

  try {

    debug(`building "${ objpath }" to "${ drcpath }"`);

    child.execSync(`draco_encoder -i "${ objpath }" -o "${ drcpath }"`);

  } catch(err) {

    debug(err);

  }

}

findOBJFiles('static/geo').map(buildDRCFromOBJ);

var fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');

const { TOKENS } = require('./tokens');

async function doit() {
  console.log("TOKENS: " + JSON.stringify(TOKENS, null, 2));
}

doit();

console.log(process.cwd());

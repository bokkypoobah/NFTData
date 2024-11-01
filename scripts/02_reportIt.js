var fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');

const { TOKENS } = require('./tokens');

async function doit() {
  const tokens = [];
  // console.log("TOKENS: " + JSON.stringify(TOKENS, null, 2));
  for (const [tokenId, d1] of Object.entries(TOKENS)) {
    // console.log(tokenId + " => " + JSON.stringify(d1));
    tokens.push({ tokenId, ...d1 });
  }

  tokens.sort((a, b) => {
    return parseInt(b.tokenId) - parseInt(a.tokenId);
  });

  console.log("tokens: " + JSON.stringify(tokens, null, 2));
}

doit();

console.log(process.cwd());

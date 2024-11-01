var fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');

const { TOKENS } = require('./tokens');

async function doit() {
  const tokens = [];
  for (const [tokenId, d1] of Object.entries(TOKENS)) {
    let attributeCount = 0;
    for (const a of d1.attributes) {
      if (a.value != "None") {
        attributeCount++;
      }
    }
    tokens.push({ tokenId, attributeCount, ...d1 });
  }
  tokens.sort((a, b) => {
    if (a.attributeCount == b.attributeCount) {
      return a.tokenId - b.tokenId;
    } else {
      return b.attributeCount - a.attributeCount;
    }
  });

  // console.log("top 50 by high attribute counts: " + JSON.stringify(tokens.slice(0, 50), null, 2));
  let row = 0;
  let output = "<html><head><title>Report</title></head><body>";
  output = output + "<table><tr><th>#</th><th>Attribute Count</th><th>Token Id</th><th>Image</th><th>Attributes</th></tr>";
  for (const token of tokens.slice(0, 100)) {
    // console.log(++row + "\t" + token.attributeCount + "\t" + token.tokenId + "\t" + token.owner + "\t" + token.attributes.map(e => e.key.toString() + ':' + e.value.toString()).join("\t"));
    output = output + "<tr><td>" + (++row) + "</td><td>" + token.attributeCount + "</td><td><a href='https://blur.io/eth/asset/0x42069abfe407c60cf4ae4112bedead391dba1cdb/" + token.tokenId + "' target='_blank'>" + token.tokenId + "</a></td><td><img src='" + token.image + "' width='100' /></td><td>" + token.attributes.map(e => e.key.toString() + ':' + e.value.toString()).join(", ") + "</td></tr>";
  }
  output = output + "</table></body></html>";
  // console.log(output);

  const OUTPUTFILE = "output.html";
  (async () => {
    await fs.writeFile(OUTPUTFILE, output, (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + OUTPUTFILE);
    });
  })();


  // tokens.sort((a, b) => {
  //   if (a.attributeCount == b.attributeCount) {
  //     return b.tokenId - a.tokenId;
  //   } else {
  //     return a.attributeCount - b.attributeCount;
  //   }
  // });
  // console.log("top 50 by low attribute counts: " + JSON.stringify(tokens.slice(0, 50), null, 2));
}

doit();

console.log(process.cwd());

var fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');

const NFTADDRESS = "0x42069abfe407c60cf4ae4112bedead391dba1cdb"; // CryptoDickButt

const downloadFile = (async (url, path) => {
  const res = await fetch(url, { timeout: 10000 });
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", reject);
    fileStream.on("finish", resolve);
  });
});

async function doit() {
  const filename = "output.json";
  let continuation = null;
  const tokens = {};
  do {
    let url = "https://api.reservoir.tools/tokens/v7?collection=" + NFTADDRESS ;
    url = url + (continuation != null ? "&continuation=" + continuation : '');
    url = url + "&includeAttributes=true&sortBy=updatedAt&limit=1000";
    console.log(url);
    try {
      await downloadFile(url, filename);
    } catch (e) {
      console.error("Error downloading: " + filename);
    }

    try {
      var data = JSON.parse(fs.readFileSync(filename, "utf8"));
      continuation = data && data.continuation;
      for (const token of (data && data.tokens || [])) {
        const tokenId = token.token.tokenId;
        const name = token.token.name;
        const owner = token.token.owner;
        console.log("tokenId: " + tokenId + ", name: " + name + ", owner: " + owner);
        const attributes = [];
        for (const attribute of token.token.attributes) {
          attributes.push({ key: attribute.key, value: attribute.value });
        }
        console.log("  attributes: " + JSON.stringify(attributes, null, 2));
        tokens[tokenId] = {
          name,
          owner,
          attributes,
        }
      }
    } catch (e) {
      console.log("Error in file: " + filename);
    }
  } while (continuation != null);
  const TOKENSDATA = "tokens.js";
  (async () => {
    await fs.writeFile(TOKENSDATA, "const TOKENS=" + JSON.stringify(tokens) + ";\nmodule.exports = { TOKENS };", (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + TOKENSDATA);
    });
  })();
}

doit();

console.log(process.cwd());

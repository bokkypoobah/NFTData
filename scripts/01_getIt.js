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
      // console.log("data.continuation: " + JSON.stringify(data.continuation));
      continuation = data && data.continuation;
      // if (data.assets == null || data.assets.length == 0) {
      //   console.log("Assets missing for: " + i);
      // }
      // for (let j = 0; j < data.assets.length; j++) {
      //   const asset = data.assets[j];
      //   osrecords[asset.token_id] = asset;
      // }
    } catch (e) {
      console.log("Error in file: " + filename);
    }


  } while (continuation != null);
}

doit();

console.log(process.cwd());

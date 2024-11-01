var fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');

# Customise your NFT collection address here
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
    url = url + "&includeAttributes=true&sortBy=updatedAt&includeTopBid=true&includeLastSale=true&limit=500";
    // url = url + "&sortBy=updatedAt&includeTopBid=true&includeLastSale=true&limit=1000";
    console.log(url);
    // TODO: Add sleep
    try {
      await downloadFile(url, filename);
    } catch (e) {
      console.error("Error downloading: " + filename);
    }

    try {
      var data = JSON.parse(fs.readFileSync(filename, "utf8"));
      continuation = data && data.continuation;
      for (const tokenData of (data && data.tokens || [])) {
        const token = tokenData.token;
        // console.log("token: " + JSON.stringify(token, null, 2));
        const tokenId = token.tokenId;
        const name = token.name;
        const owner = token.owner;
        const image = token.image;
        // console.log("tokenId: " + tokenId + ", name: " + name + ", owner: " + owner);
        const attributes = [];
        for (const attribute of (token.attributes || [])) {
          attributes.push({ key: attribute.key, value: attribute.value });
        }
        // console.log("  attributes: " + JSON.stringify(attributes, null, 2));

        const lastSaleTimestamp = token.lastSale && token.lastSale.timestamp || null;
        const lastSaleCurrency = token.lastSale && token.lastSale.price && token.lastSale.price.currency && token.lastSale.price.currency.symbol || null;
        const lastSaleAmount = token.lastSale && token.lastSale.price && token.lastSale.price.amount && token.lastSale.price.amount.native || null;
        const lastSaleAmountUSD = token.lastSale && token.lastSale.price && token.lastSale.price.amount && token.lastSale.price.amount.usd || null;
        const lastSale = {
          timestamp: lastSaleAmount && lastSaleTimestamp || null,
          currency: lastSaleAmount && lastSaleCurrency || null,
          amount: lastSaleAmount || null,
          amountUSD: lastSaleAmount && lastSaleAmountUSD || null,
        };
        const market = tokenData.market;
        const priceSource = market.floorAsk && market.floorAsk.source && market.floorAsk.source.domain || null;
        const priceExpiry = market.floorAsk && market.floorAsk.validUntil && parseInt(market.floorAsk.validUntil) || null;
        const priceCurrency = market.floorAsk && market.floorAsk.price && market.floorAsk.price.currency && market.floorAsk.price.currency.symbol || null;
        const priceAmount = market.floorAsk && market.floorAsk.price && market.floorAsk.price.amount && market.floorAsk.price.amount.native || null;
        const priceAmountUSD = market.floorAsk && market.floorAsk.price && market.floorAsk.price.amount && market.floorAsk.price.amount.usd || null;
        const price = {
          source: priceAmount && priceSource || null,
          expiry: priceAmount && priceExpiry || null,
          currency: priceAmount && priceCurrency || null,
          amount: priceAmount || null,
          amountUSD: priceAmount && priceAmountUSD || null,
        };
        const topBidCurrency = market.topBid && market.topBid.price && market.topBid.price.currency && market.topBid.price.currency.symbol || null;
        const topBidAmount = market.topBid && market.topBid.price && market.topBid.price.amount && market.topBid.price.amount.native || null;
        const topBidAmountUSD = market.topBid && market.topBid.price && market.topBid.price.amount && market.topBid.price.amount.usd || null;
        const topBidNetAmount = market.topBid && market.topBid.price && market.topBid.price.netAmount && market.topBid.price.netAmount.native || null;
        const topBidNetAmountUSD = market.topBid && market.topBid.price && market.topBid.price.netAmount && market.topBid.price.netAmount.usd || null;
        const topBid = {
          currency: topBidAmount && topBidCurrency || null,
          amount: topBidAmount || null,
          amountUSD: topBidAmount && topBidAmountUSD || null,
          netAmount: topBidAmount && topBidNetAmount || null,
          netAmountUSD: topBidAmount && topBidNetAmountUSD || null,
        };
        tokens[tokenId] = {
          name,
          owner,
          image,
          topBid,
          price,
          lastSale,
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

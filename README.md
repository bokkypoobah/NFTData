# NFTData
Extract NFT Data. Listed CryptoDickButt Season 3, sorted by attribute count descending in this case.

<kbd><img src="images/Sample_20241101.png" width="600"/></kbd>

<br />

<hr />

Install node-fetch 2.6.6 (later versions require some module configuration):

```
cd scripts
npm install node-fetch@2.6.6

```

Execute [scripts/01_getIt.js](scripts/01_getIt.js) to retrieve all token data within a collection using the [Reservoir API](https://docs.reservoir.tools/reference/gettokensv7), with output saved in [scripts/tokens.js](scripts/tokens.js). Set the address of your desired ERC-721 or ERC-1155 NFT collection in the `NFTADDRESS` address:

```
cd scripts
node 01_getIt.js

...
tokenId: 1837, name: CryptoDickbutt #1837, owner: 0xe267f356949c80ab2d98ac444d12e0018324f97e
  attributes: [
  {
    "key": "Background",
    "value": "Ocean Mist"
  },
  {
    "key": "Hat",
    "value": "None"
  },
  {
    "key": "Skin",
    "value": "Mid"
  },
  {
    "key": "Mouth",
    "value": "None"
  },
  {
    "key": "Nose",
    "value": "None"
  },
  {
    "key": "Body",
    "value": "Bikini"
  },
  {
    "key": "Hand",
    "value": "Wine"
  },
  {
    "key": "Butt",
    "value": "None"
  },
  {
    "key": "Eyes",
    "value": "Clout"
  },
  {
    "key": "Dick",
    "value": "None"
  },
  {
    "key": "Special",
    "value": "None"
  },
  {
    "key": "Shoes",
    "value": "Bunny Slippers"
  }
]
Data written to file: tokens.js
```

Execute [scripts/02_reportIt.js](scripts/02_reportIt.js) to generate [scripts/output.html](scripts/output.html). View this file in your browser. Customise as required.

```
$ node 02_reportIt.js
Data written to file: output.html
```

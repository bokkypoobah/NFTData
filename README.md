# NFTData
Extract NFT Data

Install node-fetch 2.6.6 (later versions require some module configuration):

```
cd scripts
npm install node-fetch@2.6.6

```

Execute [scripts/01_getIt.js](scripts/01_getIt.js) to generate [scripts/tokens.js](scripts/tokens.js):

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

Execute [scripts/02_reportIt.js](scripts/02_reportIt.js) view your data. Customise this script as required:

```
$ node 02_reportIt.js
1	10	3528	0x46f655abf896301b72eb27b76f5e063899b9067c	Background:Sunset	Body:Backpack	Skin:Mid	Eyes:Heart	Mouth:Cigar	Nose:None	Hat:Buns	Butt:Wounded	Special:None	Hand:Lifesaver	Shoes:Rollerskates	Dick:Purpy
2	10	1533	0xe126b3e5d052f1f575828f61feba4f4f2603652a	Background:Picnic Day	Skin:Dark	Mouth:Drool	Eyes:Blindfold	Hat:Fez	Hand:None	Butt:None	Dick:Chicken	Special:Buddy	Body:Bee Wings	Nose:Piggy	Shoes:Socks & Sandals
3	10	458	0x213996f4d1a2c05dfe0b47f4cb43b56c013943d6	Background:Ocean Mist	Skin:Mid	Mouth:Drool	Nose:None	Eyes:Cyborg	Body:Sash	Butt:Wounded	Hand:Pencil	Special:None	Shoes:Trainers	Dick:Flower	Hat:Hero
4	9	5267	0xf4ac06201c1aef8881bbed49877ceed64364ae13	Background:Picnic Day	Mouth:Cigar	Nose:None	Body:Ballerina	Shoes:Roman Sandals	Skin:Skeleton	Butt:None	Special:None	Hand:Keyboard	Eyes:Eyelashes	Dick:Tentacle	Hat:Fur Hat
5	9	5234	0x10c4e404da79f86a580a13b03c31f807fe217994	Background:Stone Grey	Skin:Light	Body:Backpack	Hat:None	Mouth:Drool	Eyes:Potter	Shoes:Roman SandalButt:Wounded	Dick:None	Special:None	Hand:Flag	Nose:Pierced
6	9	5182	0xddfdcb21c935e8432a559cf689c83695b27a4177	Background:Sunset	Skin:Dark	Body:None	Eyes:Googly	Mouth:Drool	Shoes:Roman Sandals	Butt:None	Special:None	Hat:Jester	Dick:Flower	Hand:Luggage	Nose:Pierced
7	9	5164	0x7c54effe7bc3906b6ffe7390c8bf9afd67089409	Background:Grassy Knoll	Skin:Dark	Nose:None	Body:Bikini	Shoes:Roman Sandals	Hat:Horns	Butt:None	Hand:Gavel	Special:None	Mouth:Pierced	Dick:Carrot	Eyes:Designer
8	9	5163	0x91894ac4475a99a2ad95e2c044b0990a0a6e9676	Background:Sunset	Skin:Mid	Eyes:None	Mouth:None	Shoes:Roman Sandals	Body:Sash	Hat:Straw Hat	Special:None	Butt:Reddish	Nose:Pierced	Hand:Megaphone	Dick:Fuse
9	9	4986	0xaf3d89a1939e14e8d799c107369ac356a306626b	Background:Grassy Knoll	Skin:Light	Hat:Afro	Mouth:None	Nose:None	Body:Bikini	Hand:Skateboard	Butt:Wounded	Shoes:Chucks	Special:None	Eyes:Steampunk	Dick:Umbrella
10	9	4960	0x8bf2b644c73133899aceb3039ea79107db52cb62	Background:Picnic Day	Body:None	Skin:Mid	Mouth:None	Hat:Trucker	Nose:None	Shoes:Roman SandalDick:Scorpion	Butt:Reddish	Special:Buddy	Eyes:Eyelashes	Hand:Megaphone
11	9	4920	0x55cf34223929a9d893c1ea402735a3a6fc6e5f74	Background:Stone Grey	Skin:Dark	Hand:Wine	Shoes:None	Body:Sash	Butt:None	Special:None	Mouth:Pierced	Dick:Scorpion	Nose:Pierced	Hat:Cowboy	Eyes:Blue
12	9	4866	0x28dc2d4361dd64f0030c4b1ffc78029c3434731f	Background:Ocean Mist	Skin:Dark	Body:Chest Hair	Nose:None	Hat:Bowl Cut	Butt:None	Eyes:Clout	Special:None	Shoes:Trainers	Mouth:Pierced	Dick:Cannon	Hand:Spiked Club
13	9	4852	0x9f6ae0370d74f0e591c64cec4a8ae0d627817014	Background:Ocean Mist	Body:None	Skin:Mid	Eyes:Googly	Mouth:Drool	Nose:None	Special:None	Hand:Boxing Glove	Hat:Jester	Butt:Reddish	Dick:Umbrella	Shoes:Socks & Sandals
14	9	4803	0x1ba28ff812689905be578ce42fea80030bcfcf11	Background:Picnic Day	Skin:Mid	Eyes:Ski Goggles	Mouth:Cigar	Body:Boxers	Shoes:None	Butt:Wounded	Hat:Army	Dick:None	Special:None	Hand:Lifesaver	Nose:Pierced
15	9	4685	0x6ed3364e510dba82d7a8cd8f9d5d435a40427870	Background:Stone Grey	Skin:Dark	Mouth:Drool	Nose:None	Hat:Long Hair	Shoes:Roman Sandals	Body:Overalls	Butt:None	Special:None	Dick:Cannon	Eyes:Steampunk	Hand:Flamethrower
16	9	4644	0x5382859146010ac16e142b6708f8e178e77f66bc	Background:Picnic Day	Skin:Zombie	Body:Peed Pants	Eyes:Ski Goggles	Mouth:Cigar	Nose:None	Butt:None	Hand:Gavel	Special:None	Shoes:Knight	Hat:Exposed Brain	Dick:Rocket
17	9	4542	0x987dad22e28fce25574d0b728b376c6ec20cd7f5	Background:Grassy Knoll	Skin:Dark	Body:Chest Hair	Mouth:Drool	Nose:None	Eyes:Cyborg	Butt:None	Special:None	Shoes:Knight	Hand:Boxing Glove	Dick:Old Sock	Hat:Dino
18	9	4390	0x534dc5c0b39de89778aa9637fc7131913ad705ae	Background:Ocean Mist	Skin:Light	Eyes:Googly	Mouth:None	Nose:None	Hat:Captain	Body:Overalls	Butt:Wounded	Hand:Gavel	Special:None	Dick:Old Sock	Shoes:Rocket
19	9	4377	0xa816d5f2333817b0843eb85e01bba823885a913c	Background:Ocean Mist	Skin:Dark	Body:Chest Hair	Mouth:Drool	Nose:None	Eyes:Potter	Butt:None	Special:None	Shoes:Knight	Dick:Pierced	Hand:Camera	Hat:Fur Hat
20	9	4366	0x46f655abf896301b72eb27b76f5e063899b9067c	Background:Sunset	Eyes:Green	Mouth:Drool	Hand:None	Skin:Skeleton	Body:Overalls	Butt:None	Special:None	Shoes:Gym Socks	Nose:Piggy	Hat:Hero	Dick:Rocket
21	9	4259	0x8258df8c7f2e0bf29e656d821fb903394ad6b79e	Background:Stone Grey	Eyes:Single Lens	Mouth:Drool	Nose:None	Skin:Ape	Hand:Wine	Butt:None	Hat:Birthday Hat	Dick:None	Shoes:Trainers	Special:Buddy	Body:Bee Wings
22	9	4207	0xf19bc58f747d6ea11959bf2a0fa81e53285546ac	Background:Ocean Mist	Skin:Dark	Body:Tracksuit	Hat:Santa	Mouth:Cigar	Shoes:None	Butt:None	Eyes:Mascara	Special:None	Nose:Pierced	Dick:Rocket	Hand:Trident
23	9	4142	0x7fb232e07e7479523dabddf0aa8a65112ebc9836	Background:Ocean Mist	Skin:Light	Mouth:Drool	Nose:None	Hat:Long Hair	Butt:None	Special:None	Dick:Flame	Hand:Flowers	Shoes:Pegleg	Eyes:White Mask	Body:Pox
24	9	3984	0x2658b7a45fef1983bccdb0e0a0e3f2a6420c6ea2	Background:Stone Grey	Skin:Mid	Hat:Miner	Mouth:Cigar	Nose:None	Body:Boxers	Eyes:Swimming Goggles	Shoes:Roman Sandals	Butt:None	Hand:Torch	Special:None	Dick:Fuse
25	9	3959	0x9f6ae0370d74f0e591c64cec4a8ae0d627817014	Background:Stone Grey	Skin:Dark	Body:Backpack	Mouth:None	Nose:None	Butt:None	Hat:Your Future	Hand:Boxing Glove	Shoes:Gym Socks	Eyes:Steampunk	Special:Buddy	Dick:Rocket
26	9	3882	0x01630a80ca2b3a9da2f21d7af6e78414f2f2954e	Background:Ocean Mist	Skin:Dark	Eyes:Googly	Mouth:Cigar	Nose:None	Body:Ballerina	Hat:Long Hair	Butt:None	Special:None	Shoes:Trainers	Dick:Elephant Trunk	Hand:Megaphone
27	9	3808	0x0d180db31e2469268aaed6e2afbcb49c170c218d	Background:Picnic Day	Nose:None	Body:Ballerina	Skin:Ape	Hand:None	Shoes:Roman Sandals	Butt:Wounded	Eyes:Hippie	Special:None	Mouth:Pierced	Dick:Elephant Trunk	Hat:Cute Ears
28	9	3673	0x83b00f9858c3a11ceee2f3f55c3b3c523a3c9620	Background:Stone Grey	Skin:Dark	Hat:Franky	Mouth:Drool	Eyes:Blindfold	Nose:None	Body:Ballerina	Butt:None	Shoes:Chucks	Special:None	Hand:Megaphone	Dick:Fox
29	9	3635	0xf36b233161d4d6ffc011906f906a04864475fe41	Background:Ocean Mist	Skin:Light	Eyes:Single Lens	Body:Chest Hair	Mouth:None	Butt:None	Special:None	Shoes:Knight	Dick:Dynamite	Hand:Scythe	Nose:Piggy	Hat:Mullet
30	9	3629	0xf36b233161d4d6ffc011906f906a04864475fe41	Background:Ocean Mist	Skin:Dark	Mouth:Drool	Nose:None	Body:Bikini	Eyes:Potter	Butt:None	Special:None	Shoes:Trainers	Hand:Spiked Club	Dick:Oh Canada	Hat:Witch
31	9	3511	0x8d1db0c2fce84a914c7d9bc291980d79d0d8e8c3	Background:Stone Grey	Skin:Dark	Hat:Afro	Eyes:Ski Goggles	Mouth:Drool	Nose:None	Body:BoxerHand:None	Butt:None	Shoes:Chucks	Dick:Umbrella	Special:Shiba
32	9	3291	0x161df6693a3faf54ae5ea6790cc43ef8bc68dc72	Background:Grassy Knoll	Skin:Dark	Eyes:Heart	Mouth:Cigar	Hand:None	Hat:Long Hair	Body:Sash	Butt:None	Shoes:Chucks	Special:None	Dick:Pierced	Nose:Pierced
33	9	3256	0x15bd77ccacf2da39b84f0c31fee2e451225bb190	Background:Stone Grey	Skin:Dark	Body:Chest Hair	Mouth:Drool	Eyes:Nerd	Nose:None	Hand:None	Butt:Wounded	Special:None	Dick:Flower	Hat:Bunny	Shoes:Socks & Sandals
34	9	3144	0xfabfa10906af70dc7fadbb49d4f5b68883fd56d5	Background:Picnic Day	Skin:Light	Body:Chest Hair	Mouth:Drool	Hat:Fez	Nose:None	Shoes:None	Butt:Wounded	Eyes:Hippie	Special:None	Hand:Keyboard	Dick:Fuse
35	9	3126	0x5511ce8264dff56edbc0dc1714f0e5be0dae635f	Background:Ocean Mist	Skin:Dark	Body:Peed Pants	Nose:None	Shoes:Roman Sandals	Butt:None	Eyes:Masquerade	Hand:Torch	Special:None	Hat:Jester	Dick:Dynamite	Mouth:Clown
36	9	3112	0xa428642f9cbb0e11f699bba752f309dd6079a351	Background:Grassy Knoll	Skin:Light	Hat:None	Eyes:Googly	Mouth:None	Body:Overalls	Butt:Wounded	Special:None	Shoes:Trainers	Dick:Pierced	Nose:Pierced	Hand:Megaphone
37	9	3073	0x6bc194da8fb853656b07e22385f377412e88e0c2	Background:Picnic Day	Skin:Zombie	Hat:None	Eyes:Ski Goggles	Mouth:Cigar	Nose:None	Body:Ballerina	Shoes:Roman Sandals	Butt:Wounded	Special:None	Dick:Old Sock	Hand:Camera
38	9	3012	0xc6400a5584db71e41b0e5dfbdc769b54b91256cd	Background:Grassy Knoll	Skin:Mid	Eyes:Single Lens	Mouth:None	Nose:None	Butt:Wounded	Dick:None	Shoes:Trainers	Hat:Jester	Special:Shiba	Hand:Camera	Body:Pox
39	9	2968	0x821020d081652df0a704822897c1fa064963304f	Background:Grassy Knoll	Skin:Light	Body:Peed Pants	Mouth:Drool	Hand:None	Eyes:Potter	Hat:Horns	Butt:None	Special:None	Shoes:Knight	Dick:Cannon	Nose:Pierced
40	9	2931	0xf05a057920a514c1a03dfa49b7a1aaeb0cfd89f8	Background:Stone Grey	Skin:Light	Mouth:None	Eyes:Potter	Body:Sash	Butt:None	Special:None	Shoes:Trainers	Nose:Pierced	Hand:Scythe	Dick:Oh Canada	Hat:Ogre
41	9	2906	0x7509cc94d13ff5365cd1159d0cd0599200b16041	Background:Picnic Day	Skin:Mid	Mouth:Drool	Nose:None	Hat:Balaclava	Body:Overalls	Butt:None	Special:None	Dick:Chicken	Eyes:Designer	Hand:Scythe	Shoes:Socks & Sandals
42	9	2842	0x577e25fb901a5bdc2e1853cc169146dfd2eaffff	Background:Sunset	Skin:Dark	Body:Backpack	Eyes:None	Mouth:None	Butt:Wounded	Special:None	Shoes:Knight	Dick:Cannon	Nose:Pierced	Hand:Hero's Sword	Hat:Antennae
43	9	2829	0xa85a41a9c2228f21742a5ae1fae36302d11e5ddf	Background:Sunset	Skin:Dark	Mouth:Cigar	Nose:None	Body:Ballerina	Hand:Wine	Eyes:Swimming Goggles	Hat:Mohawk	Butt:None	Special:None	Shoes:Knight	Dick:Flower
44	9	2804	0x821020d081652df0a704822897c1fa064963304f	Background:Sunset	Skin:Light	Eyes:Green	Mouth:Cigar	Nose:None	Body:Ballerina	Hand:None	Butt:Wounded	Special:None	Dick:Elephant Trunk	Hat:Jester	Shoes:Rocket
45	9	2795	0xa87c2b663e32965b4ae768208772e81639d4ef53	Background:Stone Grey	Body:Backpack	Skin:Mid	Mouth:None	Hat:Long Hair	Eyes:Potter	Shoes:Roman SandalButt:None	Special:None	Nose:Squid	Hand:Spiked Club	Dick:Flower
46	9	2713	0x7109721443af414ae6324e7082cf38419806cb40	Background:Grassy Knoll	Skin:Vampire	Mouth:Cigar	Nose:None	Body:Bikini	Hat:Mohawk	Butt:None	Eyes:Masquerade	Shoes:Chucks	Special:None	Hand:Boxing Glove	Dick:Pierced
47	9	2619	0x7a65cd0ad11e7329f534b5b65113997cf75e3546	Background:Grassy Knoll	Skin:Mid	Eyes:Ski Goggles	Mouth:None	Nose:None	Hand:Wine	Hat:MohawkButt:Wounded	Special:None	Dick:Elephant Trunk	Body:Tuxedo	Shoes:Bunny Slippers
48	9	2614	0x7921dcfa9f14dc980d7e8f946b7bd223624c3db9	Background:Grassy Knoll	Skin:Dark	Eyes:Heart	Mouth:Cigar	Nose:None	Body:Ballerina	Hand:None	Hat:Captain	Shoes:Chucks	Special:None	Butt:Reddish	Dick:Fuse
49	9	2374	0x98725bea9caf118e3e31a0fe480b887f81f45bd7	Background:Ocean Mist	Skin:Light	Body:Chest Hair	Nose:None	Hand:None	Eyes:Potter	Shoes:Chucks	Hat:Siren	Special:None	Mouth:Pierced	Dick:Chicken	Butt:Reddish
50	9	2291	0xef16a708b9feeaa44aea2eae66b0a6df4951f5b6	Background:Grassy Knoll	Skin:Mid	Eyes:Ski Goggles	Mouth:Drool	Nose:None	Body:Vampire Cape	Shoes:None	Hat:Straw Hat	Butt:Wounded	Special:None	Dick:Elephant Trunk	Hand:Flowers
51	9	2226	0xbaa50b649494f1b947b75ca80d9cc108313ebe33	Background:Stone Grey	Skin:Light	Body:None	Nose:None	Hat:Captain	Shoes:Roman Sandals	Butt:Wounded	Eyes:Hippie	Special:None	Mouth:Pierced	Hand:Keyboard	Dick:Fuse
52	9	2091	0xe3b663b534f5d48e6d6381758b97186804225ccc	Background:Grassy Knoll	Skin:Light	Eyes:None	Mouth:Drool	Hat:Miner	Body:Ballerina	Shoes:Roman SandalButt:None	Special:None	Nose:Squid	Hand:Keyboard	Dick:Rocket
53	9	2027	0x3a27a89d203fdd6f241c43b4ccc667dff10f32a6	Background:Ocean Mist	Skin:Mid	Hat:Miner	Mouth:None	Body:Vampire Cape	Butt:None	Eyes:Masquerade	Shoes:Chucks	Hand:Gavel	Special:None	Nose:Pierced	Dick:Old Sock
54	9	2016	0xf19bc58f747d6ea11959bf2a0fa81e53285546ac	Background:Stone Grey	Skin:Zombie	Mouth:None	Body:Vampire Cape	Butt:None	Shoes:Chucks	Hat:Siren	Special:None	Nose:Squid	Eyes:Eyelashes	Hand:Scythe	Dick:Fuse
55	9	1906	0xfc278dd0a2757f24f80d4b5fdadee36314df76cb	Background:Stone Grey	Skin:Light	Mouth:None	Nose:None	Body:Bikini	Butt:Wounded	Hat:Your Future	Eyes:Mascara	Hand:Gavel	Special:None	Shoes:Trainers	Dick:Dynamite
56	9	1861	0x10c4e404da79f86a580a13b03c31f807fe217994	Background:Sunset	Body:Tracksuit	Skin:Mid	Hat:Karen	Mouth:None	Nose:None	Special:None	Shoes:Rollerskates	Dick:Dynamite	Eyes:Eyelashes	Hand:Camera	Butt:Gassy
57	9	1840	0xcc2087dce130215374172b89173aa5620e8529c8	Background:Ocean Mist	Skin:Mid	Eyes:Googly	Body:Chest Hair	Mouth:None	Nose:None	Hand:None	Hat:Siren	Shoes:Gym Socks	Butt:Reddish	Dick:Carrot	Special:Buddy
58	9	1748	0x8beecb6752b64f6f79af293737441b6fa8d14e86	Background:Grassy Knoll	Skin:Light	Mouth:None	Hat:Fez	Eyes:Cyborg	Body:Sash	Butt:None	Special:None	Dick:Chicken	Shoes:Knight	Nose:Pierced	Hand:Flowers
59	9	956	0x7ae8e425f57660ffb53d65d79254acafe506283f	Background:Ocean Mist	Skin:Dark	Body:Peed Pants	Mouth:Cigar	Nose:None	Hat:Swimming Cap	Butt:None	Eyes:Masquerade	Hand:Gavel	Special:None	Shoes:Trainers	Dick:Chicken
60	9	929	0xc6a4434619fce9266bd7e3d0a9117d2c9b49fd87	Background:Stone Grey	Skin:Light	Mouth:Cigar	Nose:None	Hat:Captain	Hand:Pencil	Butt:None	Eyes:Hippie	Shoes:Chucks	Special:None	Dick:Chicken	Body:Jumpsuit
61	9	878	0x79457a036ba1c59399353233c765f004e7c06adf	Background:Ocean Mist	Skin:Light	Body:None	Butt:None	Eyes:Masquerade	Shoes:Chucks	Special:None	Mouth:Pierced	Hand:Keyboard	Dick:Elephant Trunk	Nose:Pierced	Hat:Pharaoh
62	9	870	0xc6400a5584db71e41b0e5dfbdc769b54b91256cd	Background:Grassy Knoll	Skin:Dark	Eyes:Ski Goggles	Mouth:None	Nose:None	Body:Ballerina	Special:None	Hand:Spiked Club	Butt:Reddish	Shoes:Basketball	Hat:Cowboy	Dick:Spidey
63	9	842	0x44f2afb689aea37ab17feb2420f17f9a3e851307	Background:Stone Grey	Skin:Light	Mouth:Cigar	Nose:None	Body:Boxers	Shoes:None	Butt:Wounded	Hat:Your Future	Eyes:Hippie	Dick:None	Hand:Keyboard	Special:Buddy
64	9	838	0x88f3afa9757779a957b75890d2ff410d00d623a2	Background:Grassy Knoll	Skin:Light	Body:None	Eyes:Ski Goggles	Mouth:None	Hat:Captain	Butt:None	Shoes:Knight	Hand:Boxing Glove	Special:Shiba	Nose:Pierced	Dick:Purpy
65	9	808	0xaf411754a8a25c9b6dd6c40bbb0988043e1fdaee	Background:Picnic Day	Skin:Light	Body:Chest Hair	Nose:None	Eyes:Swimming Goggles	Hat:Straw Hat	Dick:None	Special:None	Hand:Scythe	Mouth:Clown	Shoes:Basketball	Butt:Gassy
66	9	743	0x987dad22e28fce25574d0b728b376c6ec20cd7f5	Background:Stone Grey	Skin:Zombie	Body:None	Hat:Santa	Mouth:Cigar	Eyes:Nerd	Nose:None	Butt:Wounded	Hand:Torch	Special:None	Dick:Chicken	Shoes:Gym Socks
67	9	669	0x3110cbaad657bab2f5c5a8dc6c5e276e5a4c6e32	Background:Ocean Mist	Skin:Zombie	Mouth:None	Hat:Trucker	Nose:None	Body:Vampire Cape	Butt:Wounded	Special:None	Shoes:Trainers	Dick:Umbrella	Hand:Flamethrower	Eyes:Third Eye
68	9	415	0x103d90f1b6901f3ce4cd95543d6b8901f9629031	Background:Sunset	Skin:Dark	Body:Backpack	Nose:None	Butt:None	Special:None	Mouth:Pierced	Shoes:Gym Socks	Dick:Carrot	Eyes:Eyelashes	Hand:Flowers	Hat:Cowboy
69	9	345	0x6cef15e37392f13d0873dc18497ca8087c681e01	Background:Grassy Knoll	Skin:Dark	Body:None	Nose:None	Eyes:Potter	Butt:Wounded	Special:None	Shoes:Rollerskates	Dick:Flower	Mouth:Clown	Hat:Bunny	Hand:Flowers
70	9	323	0x700e3990defb8a2efa87a7a9165c5dec57f69576	Background:Picnic Day	Skin:Mid	Mouth:Drool	Hat:Trucker	Eyes:Swimming Goggles	Butt:None	Dick:None	Hand:Torch	Special:None	Shoes:Trainers	Body:Bee Wings	Nose:Pierced
71	9	240	0xe84b59500c00fe0890292cf3aa64ab45b18d7bb2	Background:Stone Grey	Skin:Light	Body:None	Eyes:Single Lens	Butt:None	Hat:Your Future	Special:None	Hand:Boxing Glove	Shoes:Gym Socks	Nose:Pierced	Mouth:Clown	Dick:Old Sock
72	9	190	0x73e4a2b60cf48e8baf2b777e175a5b1e4d0c2d8f	Background:Stone Grey	Skin:Zombie	Mouth:Cigar	Nose:None	Body:Sash	Butt:None	Eyes:Welding Mask	Hat:Army	Dick:None	Shoes:Knight	Hand:Lifesaver	Special:Shiba
73	9	167	0xa210cc608eefbb34ebea4525ed6515fe94d6036d	Background:Picnic Day	Body:Backpack	Skin:Mid	Eyes:Alien	Mouth:Drool	Nose:None	Hand:None	Butt:Wounded	Special:None	Dick:Fuse	Hat:Bunny	Shoes:Basketball
74	8	5348	0x193f0ee42a199a0cecd479a9f09ba293eb1ca357	Background:Sunset	Hat:Karen	Eyes:Googly	Nose:None	Skin:Ape	Butt:None	Dick:None	Special:None	Mouth:Pierced	Hand:Spiked Club	Body:Bee Wings	Shoes:Basketball
75	8	5340	0xa5aae71a91c5720dbd2a48c3f3ced35dcb96b0ae	Background:Ocean Mist	Mouth:None	Hat:Trucker	Nose:None	Body:Bikini	Skin:Ape	Shoes:Roman SandalButt:Wounded	Eyes:Clout	Dick:None	Special:None	Hand:Camera
76	8	5331	0xc43c1c4523ef357fd47121c1fa3c3255a1587afc	Background:Sunset	Body:None	Skin:Mid	Eyes:Ski Goggles	Mouth:Cigar	Hat:Long Hair	Butt:None	Dick:None	Special:None	Nose:Squid	Hand:Lifesaver	Shoes:Gym Socks
77	8	5314	0x577e25fb901a5bdc2e1853cc169146dfd2eaffff	Background:Grassy Knoll	Skin:Dark	Body:None	Mouth:Cigar	Nose:None	Butt:None	Hat:Birthday Hat	Special:None	Dick:Pierced	Shoes:Gym Socks	Eyes:Designer	Hand:Hero's Sword
78	8	5300	0xc7fca07e9005f0b1327f1a2ccaaff3afc18cb936	Background:Stone Grey	Skin:Mid	Eyes:Ski Goggles	Mouth:None	Nose:None	Hat:Long Hair	Body:Sash	Butt:None	Shoes:Chucks	Dick:None	Special:Shiba	Hand:Flamethrower
79	8	5261	0xfb797bdf4116bd4e3a09d633881335122075b0fc	Background:Sunset	Mouth:None	Body:Bikini	Skin:Ape	Hand:None	Hat:Straw Hat	Butt:None	Eyes:Mascara	Special:None	Nose:Squid	Shoes:Gym Socks	Dick:Fuse
80	8	5259	0x54b5c13a3e08eb3444ac1e4b095a7ec3f3841dbe	Background:Sunset	Body:Backpack	Skin:Mid	Mouth:None	Butt:None	Eyes:Hippie	Shoes:Chucks	Dick:None	Special:None	Hat:Sombrero	Nose:Pierced	Hand:Scythe
81	8	5252	0x3c71982c02b15418070ce1a53a1d7efb9500aa48	Background:Stone Grey	Skin:Light	Body:Tracksuit	Eyes:Green	Mouth:Drool	Hand:None	Shoes:Roman SandalButt:None	Hat:Birthday Hat	Dick:None	Special:None	Nose:Pierced
82	8	5223	0x53c0283bf0ffa3cd2682366a47a3a1aabe455bee	Background:Picnic Day	Skin:Light	Eyes:Ski Goggles	Mouth:None	Nose:None	Body:Bikini	Hat:Buns	Shoes:None	Butt:None	Hand:Flag	Special:Buddy	Dick:Flower
83	8	5220	0x3a4bed67a33ac757088d2e05828306d54eb04958	Background:Picnic Day	Skin:Dark	Body:Backpack	Eyes:Single Lens	Hat:Santa	Mouth:None	Nose:None	Butt:None	Special:None	Hand:Lifesaver	Shoes:Socks & Sandals	Dick:Rocket
84	8	5212	0x8a6490d9e24fe8871ae40e73d387f474c329760d	Background:Picnic Day	Skin:Dark	Body:Chest Hair	Mouth:None	Eyes:Swimming Goggles	Shoes:Roman Sandals	Butt:None	Hat:Your Future	Dick:None	Special:None	Hand:Flag	Nose:Pierced
85	8	5178	0xb582578ddc4be6dcdfe6735f293f788cace93f6c	Background:Stone Grey	Skin:Mid	Mouth:Drool	Nose:None	Eyes:Potter	Hat:Balaclava	Body:Overalls	Butt:None	Dick:None	Special:None	Shoes:Trainers	Hand:Lifesaver
86	8	5173	0xd3fd068d8dfaa1c5509f70d16679d04e45412c7b	Background:Stone Grey	Mouth:None	Nose:None	Skin:Skeleton	Body:Overalls	Butt:None	Special:None	Shoes:Trainers	Hat:Jester	Dick:Umbrella	Hand:Flowers	Eyes:Gas Mask
87	8	5161	0x4680cb63563472cac10236c07d288580d8d7b52a	Background:Grassy Knoll	Skin:Dark	Body:None	Eyes:Single Lens	Mouth:None	Hat:Trucker	Nose:None	Butt:Wounded	Special:None	Hand:Boxing Glove	Dick:Old Sock	Shoes:Bunny Slippers
88	8	5157	0x94cf1e26c7e8bfa0a453f7b4612bc788a868039c	Background:Grassy Knoll	Skin:Light	Body:None	Hat:Afro	Mouth:Drool	Hand:None	Shoes:None	Special:None	Nose:Squid	Eyes:Eyelashes	Dick:Old Sock	Butt:Gassy
89	8	5153	0xa307064b05b598c47aca897b1a42f0c84bfc52ac	Background:Picnic Day	Skin:Zombie	Hat:Afro	Mouth:None	Nose:None	Body:Bikini	Eyes:Swimming Goggles	Butt:None	Hand:Torch	Special:None	Dick:Fuse	Shoes:Basketball
90	8	5150	0x0f8ffba9392901d0d50bd2f89bc3f70c716f9317	Background:Stone Grey	Skin:Mid	Eyes:Heart	Nose:None	Hand:None	Hat:Long Hair	Butt:None	Special:None	Mouth:Clown	Dick:Rocket	Body:Ruffles	Shoes:Bunny Slippers
91	8	5143	0xb700e098e48ce189a08b63c484a06a59e2afcbe5	Background:Grassy Knoll	Skin:Dark	Mouth:None	Nose:None	Body:Boxers	Butt:None	Special:None	Shoes:Trainers	Hand:Lifesaver	Hat:Jester	Dick:Old Sock	Eyes:White
92	8	5137	0xc31d1442fd3a27cb0e27a057ab74bf2579b95892	Background:Stone Grey	Skin:Light	Body:None	Hand:None	Butt:None	Shoes:Chucks	Special:None	Nose:Squid	Dick:Elephant Trunk	Hat:Cute Ears	Mouth:Clown	Eyes:White
93	8	5131	0xac66aca609591d6a4a97432eb2e838e533d3bb33	Background:Ocean Mist	Skin:Mid	Mouth:None	Nose:None	Body:Boxers	Hand:None	Butt:Wounded	Eyes:Clout	Shoes:Chucks	Special:None	Dick:Carrot	Hat:Dino
94	8	5130	0x10b2e5df4f5ffab4f98bd625933185e455ddd1c9	Background:Ocean Mist	Skin:Light	Body:None	Hat:Karen	Eyes:Heart	Mouth:Cigar	Nose:None	Butt:None	Special:None	Shoes:Trainers	Dick:Pierced	Hand:Luggage
95	8	5123	0xa652e2b4bf87cd44b6f0b008aa24c360ad4c91fb	Background:Grassy Knoll	Skin:Dark	Mouth:None	Nose:None	Hand:Wine	Hat:Captain	Body:Sash	Butt:Wounded	Dick:None	Special:None	Shoes:Knight	Eyes:Designer
96	8	5101	0xfd949335639895dd8eea45ea880db0b98320f1d6	Background:Picnic Day	Skin:Dark	Body:Peed Pants	Eyes:Alien	Nose:None	Hand:Wine	Shoes:Roman SandalButt:None	Hat:Your Future	Dick:None	Special:None	Mouth:Clown
97	8	5100	0xbd1c32d2c3b3f600736d244c56806ddb5a190b8a	Background:Grassy Knoll	Skin:Light	Eyes:Googly	Mouth:None	Nose:None	Body:Boxers	Hat:Straw Hat	Butt:None	Special:None	Hand:Keyboard	Dick:Dynamite	Shoes:Rocket
98	8	5091	0xb96abc18d24eeda781f83be55ed737056965944b	Background:Picnic Day	Skin:Mid	Mouth:Cigar	Hand:None	Eyes:Potter	Shoes:None	Butt:None	Dick:None	Nose:Squid	Special:Shiba	Body:Ruffles	Hat:Strawberry
99	8	5085	0x3a27a89d203fdd6f241c43b4ccc667dff10f32a6	Background:Picnic Day	Skin:Light	Body:Peed Pants	Nose:None	Hand:None	Shoes:Roman Sandals	Hat:Poop	Butt:Wounded	Eyes:Clout	Dick:None	Special:None	Mouth:Pierced
100	8	5076	0x42e4158e5e109bc379a5e66e20efae56ae1bb885	Background:Ocean Mist	Skin:Dark	Eyes:Ski Goggles	Body:Chest Hair	Mouth:None	Nose:None	Hat:Toque	Butt:None	Special:None	Hand:Boxing Glove	Dick:Carrot	Shoes:Bunny Slippers
```

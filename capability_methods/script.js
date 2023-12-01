// main.js
const fs = require('fs');
const { inputArray } = require('./new.js');
const providers = [
    'https://rpc.ankr.com/arbitrum',
    'https://arbitrum.api.onfinality.io/public',
    'https://arbitrum.meowrpc.com',
    'https://arb1.arbitrum.io/rpc',
    'https://1rpc.io/arb',
    'https://endpoints.omniatech.io/v1/arbitrum/one/public',
    'https://rpc.arb1.arbitrum.gateway.fm',
    'https://arbitrum-one.publicnode.com',
    'https://arbitrum.blockpi.network/v1/rpc/public',
    'https://api.zan.top/node/v1/arb/one/public',
    'https://arbitrum.drpc.org',
    'https://arbitrum-one.public.blastapi.io',
    'https://arb-mainnet.g.alchemy.com/v2/demo',
    'https://arb-mainnet-public.unifra.io'
]
const filteredObject = {};

for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];

    element.forEach(item => {
        const { url, method } = item;

        if (!filteredObject[url]) {
            filteredObject[url] = [];
        }

        filteredObject[url].push(method);
    });
}
console.log("🚀 ~ file: script.js:33 ~ filteredObject:", filteredObject)
const lengthArray = []
providers.forEach(p => {
    lengthArray.push({ provider: p, methodCount: filteredObject[p].length })
})
console.log("🚀 ~ file: script.js:39 ~ lengthArray:", lengthArray)

const providersArray = [
    { provider: 'https://arb1.arbitrum.io/rpc', methodCount: 22 },
    { provider: 'https://rpc.ankr.com/arbitrum', methodCount: 24 },
    { provider: 'https://1rpc.io/arb', methodCount: 28 },
    {
        provider: 'https://arb-mainnet.g.alchemy.com/v2/demo',
        methodCount: 20
    },
    {
        provider: 'https://arbitrum.blockpi.network/v1/rpc/public',
        methodCount: 27
    },
    {
        provider: 'https://arbitrum-one.public.blastapi.io',
        methodCount: 23
    },
    {
        provider: 'https://endpoints.omniatech.io/v1/arbitrum/one/public',
        methodCount: 28
    },
    { provider: 'https://arb-mainnet-public.unifra.io', methodCount: 28 },
    {
        provider: 'https://arbitrum.api.onfinality.io/public',
        methodCount: 28
    },
    { provider: 'https://rpc.arb1.arbitrum.gateway.fm', methodCount: 23 },
    { provider: 'https://arbitrum-one.publicnode.com', methodCount: 28 },
    { provider: 'https://arbitrum.meowrpc.com', methodCount: 28 },
    {
        provider: 'https://api.zan.top/node/v1/arb/one/public',
        methodCount: 19
    },
    { provider: 'https://arbitrum.drpc.org', methodCount: 24 }
]

// Sort the providers based on methodCount in ascending order
providersArray.sort((a, b) => b.methodCount - a.methodCount);
console.log("🚀 ~ file: script.js:79 ~ providersArray:", providersArray)

// Now providersArray is sorted by methodCount in ascending order
providersArray.forEach(sp => {
    console.log(sp.provider);
})

// const gasPrice = [{
//     "url": "https://arb1.arbitrum.io/rpc",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 596
// }, {
//     "url": "https://rpc.ankr.com/arbitrum",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 287
// }, {
//     "url": "https://1rpc.io/arb",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 612
// }, {
//     "url": "https://arb-mainnet.g.alchemy.com/v2/demo",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 1542
// }, {
//     "url": "https://arbitrum.blockpi.network/v1/rpc/public",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 912
// }, {
//     "url": "https://arbitrum-one.public.blastapi.io",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 1229
// }, {
//     "url": "https://endpoints.omniatech.io/v1/arbitrum/one/public",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 617
// }, {
//     "url": "https://arb-mainnet-public.unifra.io",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 2147
// }, {
//     "url": "https://arbitrum.api.onfinality.io/public",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 389
// }, {
//     "url": "https://rpc.arb1.arbitrum.gateway.fm",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 696
// }, {
//     "url": "https://arbitrum-one.publicnode.com",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 852
// }, {
//     "url": "https://arbitrum.meowrpc.com",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 518
// }, {
//     "url": "https://api.zan.top/node/v1/arb/one/public",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 919
// }, {
//     "url": "https://arbitrum.drpc.org",
//     "method": "eth_gasPrice",
//     "status": 200,
//     "time": 923
// }]

// const sortedUrls = gasPrice
//     .slice() // Create a shallow copy of the original array to avoid modifying it
//     .sort((a, b) => a.time - b.time) // Sort by ascending time

// // Extract the sorted URLs into a list
// const sortedUrlsList = sortedUrls.map(item => item.url);

// console.log(sortedUrlsList);


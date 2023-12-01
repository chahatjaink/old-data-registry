const axios = require('axios')
const fs = require('fs')
const methods = require('./methods')
const { body } = require('./callBody')

const providers = [
    'https://arbitrum.llamarpc.com',
    'https://arb1.arbitrum.io/rpc',
    'https://rpc.ankr.com/arbitrum',
    'https://1rpc.io/arb',
    'https://arb-mainnet.g.alchemy.com/v2/demo',
    'https://arbitrum.blockpi.network/v1/rpc/public',
    'https://arbitrum-one.public.blastapi.io',
    'https://endpoints.omniatech.io/v1/arbitrum/one/public',
    'https://arb-mainnet-public.unifra.io',
    'https://arbitrum.api.onfinality.io/public',
    'https://rpc.arb1.arbitrum.gateway.fm',
    'https://arbitrum-one.publicnode.com',
    'wss://arbitrum-one.publicnode.com',
    'https://arbitrum.meowrpc.com',
    'https://api.zan.top/node/v1/arb/one/public',
    'https://arbitrum.drpc.org'
]

const supportedMethods = {};

async function makeRequest(providerUrl, methodName) {
    try {
        const response = await axios.post(providerUrl, {
            jsonrpc: '2.0',
            id: 1,
            ...body[methodName],
        });
        if (response.data.error)
            throw response.data.error

        if (!supportedMethods[providerUrl]) {
            supportedMethods[providerUrl] = [];
        }

        supportedMethods[providerUrl].push(methodName);

        console.log(`Provider: ${providerUrl}, Method: ${methodName}, Result:`, response.data.result);
    } catch (error) {
        console.error(`Provider: ${providerUrl}, Method: ${methodName}, Error:`, error.message);
    }
}

const run = async () => {
    for (const providerUrl of providers) {
        for (const methodName in body) {
            await makeRequest(providerUrl, methodName);
        }
    }
    fs.writeFileSync('supported_methods.json', JSON.stringify(supportedMethods, null, 2));
};

run();
// respObj.push({ url, method: data.method, status: result.status, time: Date.now() - startTime })
// const dataToExport = JSON.stringify(respObj);
// fs.writeFile(filePath, dataToExport, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log(`Data has been exported to ${filePath}`);
//     }
// });
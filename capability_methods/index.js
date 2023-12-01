const { methods } = require('./script')

const axios = require("axios");

const providers = [
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
    'https://arbitrum.meowrpc.com',
    'https://api.zan.top/node/v1/arb/one/public',
    'https://arbitrum.drpc.org'
]
const fs = require('fs');

const respObj = []; // Your array

// Convert the array to JSON format

// Specify the file path where you want to export the data

const url = providers[0];
const headers = {
    "Content-Type": "application/json",
};

const makeRequest = async (data, url, index) => {
    let filePath = `exportedFile.js`;
    try {
        let startTime = Date.now()
        const result = await axios.post(url, data, { headers });
        console.log("🚀 ~ file: index.js:38 ~ makeRequest ~ result:", result.data)
        if (result.data.error || !result.data)
            throw result.data.error
        respObj.push({ url, method: data.method, status: result.status, time: Date.now() - startTime })
        const dataToExport = JSON.stringify(respObj);
        console.log("🚀 ~ file: index.js:42 ~ makeRequest ~ respObj:", respObj.length)

        fs.writeFile(filePath, dataToExport, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log(`Data has been exported to ${filePath}`);
            }
        });
    } catch (e) {
        if (e.response)
            console.error("ERROR: ", e.response.status);
        else
            console.error("ERROR", e.message)
    }
};

const run = async () => {
    for (let p = 0; p < providers.length; p++) {
        let url = providers[p];
        let data = {
            "id": 1,
            "jsonrpc": "2.0",
            "method": "eth_newBlockFilter"
        };
        await makeRequest(data, url, p);
    }
};

run();







const axios = require("axios");

const url = "https://arb1.arbitrum.io/rpc";
const headers = {
    "Content-Type": "application/json",
};

const data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": [
        "0x1b4",
        true
    ]
};

const makeRequest = async (index) => {
    try {
        const startTime = performance.now();
        const result = await axios.post(url, data, { headers });
        const endTime = performance.now();
        const elapsedTime = endTime - startTime;
        console.log(`Request ${index}: Elapsed Time: ${elapsedTime}ms`);
        console.log("TCL: callApi -> index", index);
        console.log("TCL: result", result?.data?.id);
    } catch (e) {
        console.error(e.message);
    }
};

const start = 127000000;
const end = 130000000;

const run = async () => {
    for (let index = start; index < end; index++) {
        await makeRequest(index);
    }
};

run();

const axios = require('axios');
const fs = require('fs');
const arbMethods = {
    "https://arbitrum.llamarpc.com": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arb1.arbitrum.io/rpc": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://rpc.ankr.com/arbitrum": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://1rpc.io/arb": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_newFilter",
        "eth_newPendingTransactionFilter",
        "eth_newBlockFilter",
        "eth_getFilterChanges",
        "eth_getFilterLogs",
        "eth_uninstallFilter",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arb-mainnet.g.alchemy.com/v2/demo": [
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_newFilter",
        "eth_newPendingTransactionFilter",
        "eth_newBlockFilter",
        "eth_getFilterChanges",
        "eth_getFilterLogs",
        "eth_uninstallFilter",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arbitrum.blockpi.network/v1/rpc/public": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_newFilter",
        "eth_newPendingTransactionFilter",
        "eth_newBlockFilter",
        "eth_getFilterChanges",
        "eth_getFilterLogs",
        "eth_uninstallFilter",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arbitrum-one.public.blastapi.io": [
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://endpoints.omniatech.io/v1/arbitrum/one/public": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_newFilter",
        "eth_newPendingTransactionFilter",
        "eth_newBlockFilter",
        "eth_getFilterChanges",
        "eth_getFilterLogs",
        "eth_uninstallFilter",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arb-mainnet-public.unifra.io": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_newFilter",
        "eth_newPendingTransactionFilter",
        "eth_newBlockFilter",
        "eth_getFilterChanges",
        "eth_getFilterLogs",
        "eth_uninstallFilter",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arbitrum.api.onfinality.io/public": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_newFilter",
        "eth_newPendingTransactionFilter",
        "eth_newBlockFilter",
        "eth_getFilterChanges",
        "eth_getFilterLogs",
        "eth_uninstallFilter",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://rpc.arb1.arbitrum.gateway.fm": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arbitrum-one.publicnode.com": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_newFilter",
        "eth_newPendingTransactionFilter",
        "eth_newBlockFilter",
        "eth_getFilterChanges",
        "eth_getFilterLogs",
        "eth_uninstallFilter",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arbitrum.meowrpc.com": [
        "eth_getLogs",
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_newFilter",
        "eth_newPendingTransactionFilter",
        "eth_newBlockFilter",
        "eth_getFilterChanges",
        "eth_getFilterLogs",
        "eth_uninstallFilter",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://api.zan.top/node/v1/arb/one/public": [
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ],
    "https://arbitrum.drpc.org": [
        "eth_getBlockByHash",
        "eth_getBlockByNumber",
        "eth_getBlockReceipts",
        "eth_getBlockTransactionCountByHash",
        "eth_getBlockTransactionCountByNumber",
        "eth_getUncleCountByBlockHash",
        "eth_getUncleByBlockNumberAndIndex",
        "eth_getUncleByBlockHashAndIndex",
        "eth_getUncleCountByBlockNumber",
        "eth_blocknumber",
        "eth_estimateGas",
        "eth_gasPrice",
        "eth_feeHistory",
        "eth_maxPriorityFeePerGas",
        "eth_getTransactionByHash",
        "eth_getTransactionByBlockHashAndIndex",
        "eth_getTransactionByBlockNumberAndIndex",
        "eth_getTransactionReceipt",
        "eth_getTransactionCount",
        "eth_sendRawTransaction",
        "eth_call",
        "eth_getCode",
        "eth_getBalance",
        "eth_accounts",
        "eth_getStorageAt",
        "eth_getProof",
        "net_listening",
        "net_version",
        "eth_createAccessList",
        "eth_chainId",
        "eth_protocolVersion",
        "web3_clientVersion",
        "web3_sha3"
    ]
}

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
const providerMethods = []

for (const prov of providers) {
    if (arbMethods[prov]) {
        providerMethods.push({
            provider: prov,
            methodCount: arbMethods[prov].length,
            methods: arbMethods[prov]
        })
    }
}
console.log("@@@@@@@@@", providerMethods);

providerMethods.sort((a, b) => {
    return b.methodCount - a.methodCount
})

console.log(providerMethods);

const respObj = [];

async function makeRequest(providerUrl) {
    try {
        const startTime = Date.now();
        const response = await axios.post(providerUrl, {
            "id": 1,
            "jsonrpc": "2.0",
            "method": "eth_getBlockByNumber",
            "params": [
                "0x1b4",
                true
            ]
        },
        );
        if (response.data.error)
            throw response.data.error
        if (response.status !== 200) throw new Error("Invalid status code")
        respObj.push({ rpc: providerUrl, status: response.status, time: Date.now() - startTime })

        console.log(`Provider: ${providerUrl}, Result:`, response.data.result);
    } catch (error) {
        console.error(`Provider: ${providerUrl}, Error:`, error.message);
    }
}

const run = async () => {
    for (const providerUrl of providers) {
        await makeRequest(providerUrl);
    }
    respObj.sort((a, b) => a.time - b.time);
    respObj.forEach(res => {
        console.log({ url: res.rpc, failedCount: 0 });
    })
    fs.writeFileSync('capabilityRpc.json', JSON.stringify(respObj, null, 2));
};

run();
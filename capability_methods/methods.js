const methods = [
    "eth_getBlockByHash",
    "eth_blocknumber",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
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
    "eth_getLogs",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_newBlockFilter",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_uninstallFilter",
    "eth_chainId",
    "eth_protocolVersion",
    "net_listening",
    "net_version",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleByBlockNumberAndIndex",
    "eth_getUncleByBlockHashAndIndex",
    "eth_getUncleCountByBlockNumber",
    "eth_estimateGas",
    "eth_gasPrice",
    "eth_feeHistory",
    "eth_maxPriorityFeePerGas",
    "eth_createAccessList",
    "web3_clientVersion",
    "web3_sha3",
    "eth_subscribe",
    "eth_unsubscribe",
]


const categories = {
    "logs": [],
    "block": [],
    "blockNumber": [],
    "gas": [],
    "filter": [],
    "transaction": [],
    "information": [],
    "events": []
};

const methodToCategory = {
    "eth_getBlockByHash": "block",
    "eth_blocknumber": "blockNumber",
    "eth_getBlockByNumber": "block",
    "eth_getBlockReceipts": "block",
    "eth_getBlockTransactionCountByHash": "block",
    "eth_getBlockTransactionCountByNumber": "block",
    "eth_getTransactionByHash": "transaction",
    "eth_getTransactionByBlockHashAndIndex": "transaction",
    "eth_getTransactionByBlockNumberAndIndex": "transaction",
    "eth_getTransactionReceipt": "transaction",
    "eth_getTransactionCount": "transaction",
    "eth_sendRawTransaction": "transaction",
    "eth_call": "transaction",
    "eth_getCode": "transaction",
    "eth_getBalance": "transaction",
    "eth_accounts": "transaction",
    "eth_getStorageAt": "transaction",
    "eth_getProof": "transaction",
    "eth_getLogs": "logs",
    "eth_newFilter": "filter",
    "eth_newPendingTransactionFilter": "filter",
    "eth_newBlockFilter": "filter",
    "eth_getFilterChanges": "filter",
    "eth_getFilterLogs": "filter",
    "eth_uninstallFilter": "filter",
    "eth_chainId": "information",
    "eth_protocolVersion": "information",
    "net_listening": "transaction",
    "net_version": "transaction",
    "eth_getUncleCountByBlockHash": "block",
    "eth_getUncleByBlockNumberAndIndex": "block",
    "eth_getUncleByBlockHashAndIndex": "block",
    "eth_getUncleCountByBlockNumber": "block",
    "eth_estimateGas": "gas",
    "eth_gasPrice": "gas",
    "eth_feeHistory": "gas",
    "eth_maxPriorityFeePerGas": "gas",
    "eth_createAccessList": "transaction",
    "web3_clientVersion": "information",
    "web3_sha3": "information",
    "eth_subscribe": "events",
    "eth_unsubscribe": "events",
}

// Iterate through the methods and categorize them
methods.forEach(method => {
    const category = methodToCategory[method];
    console.log("🚀 ~ file: methods.js:105 ~ category:", category)
    if (category) {
        categories[category].push(method);
    } else {
        console.warn(`Method "${method}" does not belong to any category.`);
    }
});

// Display or use the categorized methods
console.log(categories);





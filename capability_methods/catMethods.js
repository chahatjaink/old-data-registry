const fs = require('fs')
const categorizedMethods = {
    logs: ['eth_getLogs'],
    block: [
        'eth_getBlockByHash',
        'eth_getBlockByNumber',
        'eth_getBlockReceipts',
        'eth_getBlockTransactionCountByHash',
        'eth_getBlockTransactionCountByNumber',
        'eth_getUncleCountByBlockHash',
        'eth_getUncleByBlockNumberAndIndex',
        'eth_getUncleByBlockHashAndIndex',
        'eth_getUncleCountByBlockNumber'
    ],
    blockNumber: ['eth_blocknumber'],
    gas: [
        'eth_estimateGas',
        'eth_gasPrice',
        'eth_feeHistory',
        'eth_maxPriorityFeePerGas'
    ],
    filter: [
        'eth_newFilter',
        'eth_newPendingTransactionFilter',
        'eth_newBlockFilter',
        'eth_getFilterChanges',
        'eth_getFilterLogs',
        'eth_uninstallFilter'
    ],
    transaction: [
        'eth_getTransactionByHash',
        'eth_getTransactionByBlockHashAndIndex',
        'eth_getTransactionByBlockNumberAndIndex',
        'eth_getTransactionReceipt',
        'eth_getTransactionCount',
        'eth_sendRawTransaction',
        'eth_call',
        'eth_getCode',
        'eth_getBalance',
        'eth_accounts',
        'eth_getStorageAt',
        'eth_getProof',
        'net_listening',
        'net_version',
        'eth_createAccessList'
    ],
    information: [
        'eth_chainId',
        'eth_protocolVersion',
        'web3_clientVersion',
        'web3_sha3'
    ],
    events: ['eth_subscribe', 'eth_unsubscribe']
}

const supported_methods = {
    "https://arbitrum.llamarpc.com": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "transaction",
        "information"
    ],
    "https://arb1.arbitrum.io/rpc": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "transaction",
        "information"
    ],
    "https://rpc.ankr.com/arbitrum": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "transaction",
        "information"
    ],
    "https://1rpc.io/arb": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "filter",
        "transaction",
        "information"
    ],
    "https://arb-mainnet.g.alchemy.com/v2/demo": [
        "block",
        "gas",
        "filter",
        "information"
    ],
    "https://arbitrum.blockpi.network/v1/rpc/public": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "filter",
        "transaction",
        "information"
    ],
    "https://arbitrum-one.public.blastapi.io": [
        "block",
        "blockNumber",
        "gas",
        "transaction",
        "information"
    ],
    "https://endpoints.omniatech.io/v1/arbitrum/one/public": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "filter",
        "transaction",
        "information"
    ],
    "https://arb-mainnet-public.unifra.io": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "filter",
        "transaction",
        "information"
    ],
    "https://arbitrum.api.onfinality.io/public": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "filter",
        "transaction",
        "information"
    ],
    "https://rpc.arb1.arbitrum.gateway.fm": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "transaction",
        "information"
    ],
    "https://arbitrum-one.publicnode.com": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "filter",
        "transaction",
        "information"
    ],
    "https://arbitrum.meowrpc.com": [
        "logs",
        "block",
        "blockNumber",
        "gas",
        "filter",
        "transaction",
        "information"
    ],
    "https://api.zan.top/node/v1/arb/one/public": [
        "blockNumber",
        "gas",
        "information"
    ],
    "https://arbitrum.drpc.org": [
        "block",
        "blockNumber",
        "gas",
        "transaction",
        "information"
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
const providerResp = {}

for (const prov of providers) {
    let arr = []
    let methods
    if (supported_methods[prov]) {
        methods = supported_methods[prov]
        console.log("🚀 ~ file: catMethods.js:187 ~ methods:", methods)
        methods.forEach(element => {
            console.log("🚀 ~ file: catMethods.js:189 ~ element:", element)
            const category = categorizedMethods[element]
            if (category)
                arr = arr.concat(category)
        });
        providerResp[prov] = arr
    }
}

fs.writeFileSync('arbitrum_methods.json', JSON.stringify(providerResp, null, 2));
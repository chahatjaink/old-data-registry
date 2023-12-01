const body = {
    logs: {
        "jsonrpc": "2.0",
        "method": "eth_getLogs",
        "params": [{}],
        "id": 1
    },
    block: {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_getBlockByNumber",
        "params": [
            "0x1b4",
            true
        ]
    },
    blockNumber: {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_blockNumber"
    },
    gas: {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_gasPrice"
    },
    filter: {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_newBlockFilter"
    },
    transaction: {
        "jsonrpc": "2.0",
        "method": "eth_getTransactionCount",
        "params": [
            "0x87860891155D73BcB4F2Ab523FfFb4b75D3D7aB2",
            "latest"
        ],
        "id": 1
    },
    information: {
        "jsonrpc": "2.0",
        "method": "web3_clientVersion",
        "params": [],
        "id": 1
    }
}

module.exports = { body }
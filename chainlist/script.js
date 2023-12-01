const { fetchData } = require("./index");
const ENVIORMENT = "arbitrum";
const environmentConfig = {
  arbitrum: [
    { url: "https://arb1.arbitrum.io/rpc", failedCount: 0 },
    { url: "https://1rpc.io/arb", failedCount: 0 },
    {
      url: "https://endpoints.omniatech.io/v1/arbitrum/one/public",
      failedCount: 0,
    },
    { url: "https://arbitrum.blockpi.network/v1/rpc/public", failedCount: 0 },
    { url: "https://arbitrum.meowrpc.com", failedCount: 0 },
    { url: "https://rpc.ankr.com/arbitrum", failedCount: 0 },
    { url: "https://arb-mainnet-public.unifra.io", failedCount: 0 },
    { url: "https://arbitrum.api.onfinality.io/public", failedCount: 0 },
    { url: "https://arbitrum-one.publicnode.com", failedCount: 0 },
    { url: "https://rpc.arb1.arbitrum.gateway.fm", failedCount: 0 },
    { url: "https://arb-mainnet.g.alchemy.com/v2/demo", failedCount: 0 },
  ],
  ethereum: [
    // "https://arb1.arbitrum.io/rpc",
    { url: "https://1rpc.io/eth", failedCount: 0 },
    { url: "https://ethereum.blockpi.network/v1/rpc/public", failedCount: 0 },
    { url: "https://eth.meowrpc.com", failedCount: 0 },
    { url: "https://rpc.ankr.com/eth", failedCount: 0 },
    // 'https://eth-mainnet.public.blastapi.io',
  ],
  // Add more environments and their corresponding PROVIDERS arrays here
};  
const websiteURL = "https://chainlist.org/";

let chainId;
if (ENVIORMENT === "arbitrum") chainId = 42161;
else if (ENVIORMENT === "ethereum") chainId = 1;

async function updateProviders() {
  let jsonData;
  try {
    jsonData = await fetchData(websiteURL, chainId);
  } catch (error) {
    console.error(error.message);
    return;
  }
  const newRpc = jsonData.pageProps.chain.rpc.map((rpc) => {
    return rpc.url;
  });
  console.log("TCL: newRpc", newRpc);
  const filteredEndpoints = newRpc.filter((endpoint) => {
    const lowercaseEndpoint = endpoint.toLowerCase();
    return !lowercaseEndpoint.includes("api_key");
  });
  console.log("TCL: filteredEndpoints", filteredEndpoints);
  const uniqueEndpoints = filteredEndpoints.filter(
    (endpoint) =>
      !environmentConfig[ENVIORMENT].some((item) => item.url === endpoint)
  );
  environmentConfig[ENVIORMENT].push(
    ...uniqueEndpoints.map((url) => ({ url, failedCount: 0 }))
  );
  console.log(environmentConfig[ENVIORMENT]);
}

updateProviders()

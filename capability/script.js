// const axios = require("axios");
require("dotenv").config();
let PROVIDERS = JSON.parse(process.env.PROVIDERS);

// Make a GET request
// async function getUser() {
//   try {
//     const response = await axios.get(
//       "https://chainlist.org/_next/data/I4YpYpIGsSWnh3Io9Qikf/chain/42161.json?chain=42161"
//     );
//     console.log(response.data.pageProps.chain.rpc);
//     const result = response.data.pageProps.chain.rpc.map((element) => {
//       return element.url;
//     }).filter((element) => !PROVIDERS.includes(element));
    
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUser();

const capabilities = require("./capabilities");

console.log("TCL: PROVIDERS", PROVIDERS);
// console.log("TCL: capabilities", capabilities);

function calcCapabilities() {
  const providersWithMethods = PROVIDERS.map((p) => {
    const host = new URL(p).hostname;
    const methodCount = capabilities[host]?.methods.length || 0;
    const time = capabilities[host]?.time || 0;
    return { provider: p, methodCount, time };
  });

  const sortedProviders = providersWithMethods.sort((a, b) => {
    // Sort by method count in descending order (highest to lowest)
    if (b.methodCount !== a.methodCount) {
      return b.methodCount - a.methodCount;
    }
    // If method count is equal, sort by time in ascending order (lowest to highest)
    return a.time - b.time;
  });

  sortedProviders.forEach((provider) => {
    console.log(provider.provider, "has capabilities");
    console.log("Method Count:", provider.methodCount);
    console.log("Response Time:", provider.time);
  });

  return sortedProviders.map((provider) => provider.provider);
}

const sortedProviderList = calcCapabilities();
console.log("Sorted PROVIDERS:", sortedProviderList);
// const axios = require('axios');

// async function getSupportedMethods() {
//   const providerUrl = 'https://rpc.ankr.com/arbitrum'; // Replace with the actual provider URL
//   const response = await axios.post(providerUrl, {
//     jsonrpc: '2.0',
//     method: 'rpc_modules',
//     params: [],
//     id: 1,
//   });

//   if (response.data && response.data.result) {
//     const supportedModules = response.data.result;
//     console.log('Supported Modules:', supportedModules);
//   } else {
//     console.log('No valid response for supported modules');
//   }
// }

// getSupportedMethods();

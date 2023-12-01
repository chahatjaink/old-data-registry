const axios = require("axios");
const cheerio = require("cheerio");

async function fetchBuildIdFromScriptSrc(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const scriptTags = $("script[src]");
    const filteredScriptTags = scriptTags.filter((index, element) => {
      const src = $(element).attr("src");
      return src.includes("_buildManifest.js");
    });
    const buildIds = filteredScriptTags
      .map((index, element) => {
        const src = $(element).attr("src");
        const match = src.match(/\/_next\/static\/(.+?)\/_buildManifest.js/);
        return match ? match[1] : null;
      })
      .get();
    return buildIds.filter((buildId) => buildId !== null);
  } catch (error) {
    throw new Error("Error fetching website: " + error.message);
  }
}

async function fetchChainData(buildId, chainId) {
  try {
    const apiUrl = `https://chainlist.org/_next/data/${buildId}/chain/${chainId}.json?chain=${chainId}`;
    const response = await axios.get(apiUrl);
    const jsonData = response.data;
    return jsonData;
  } catch (error) {
    throw new Error("Error fetching JSON data: " + error.message);
  }
}

async function fetchData(websiteURL, chainId) {
  const buildIds = await fetchBuildIdFromScriptSrc(websiteURL);
  if (buildIds.length > 0) {
    const buildId = buildIds[0];
    const jsonData = await fetchChainData(buildId, chainId);
    return jsonData;
  } else {
    throw new Error("No build IDs found in script src attributes.");
  }
}

module.exports = { fetchData };


// // Example usage:

// const websiteURL = "https://chainlist.org/";
// const chainId = 42161;
// const rpcs = fetchData(websiteURL, chainId)
//   .then((jsonData) => {
//     const newRpc = jsonData.pageProps.chain.rpc.map((rpc) => {
//       return rpc.url;
//     });
//     console.log("TCL: newRpc", newRpc);
//     const filteredEndpoints = newRpc.filter((endpoint) => {
//       const lowercaseEndpoint = endpoint.toLowerCase();
//       return !lowercaseEndpoint.includes("api_key");
//     });
//     console.log("TCL: filteredEndpoints", filteredEndpoints);
//     return filteredEndpoints;
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// rpcs.then((data) => {
//   console.log(data);
// });

// console.log("TCL: newRpc", newRpc);

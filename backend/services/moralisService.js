const Moralis = require("moralis").default;

async function startMoralis(apiKey) {
  await Moralis.start({
    apiKey,
  });
}

module.exports = { startMoralis };
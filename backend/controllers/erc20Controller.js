const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

async function getErc20s(address, requestedChain) {
  let chain;
  switch (requestedChain) {
    case 'ethereum':
      chain = EvmChain.ETHEREUM;
      break;
  }

  const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });

  const tokens = tokenBalances.result.map((token) => token.display());

  return tokens;
}

module.exports = { getErc20s };

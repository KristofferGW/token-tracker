const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

async function getWalletsWithBalance(walletAddresses, tokenContracts, requestedChain) {
  let chain;
  switch (requestedChain) {
    case 'ethereum':
      chain = EvmChain.ETHEREUM;
      break;
    case 'polygon':
      chain = EvmChain.POLYGON;
      break;
  }

  const walletBalances = [];

  for (const address of walletAddresses) {
    const tokenBlances = await Moralis.EvmApi.token.getWalletTokenBalances({
      address,
      chain,
      tokenAddresses: tokenContracts
    });

    const formattedBalances = tokenBlances.result.map((token) => token.display());

    walletBalances.push({ address, balances: formattedBalances });
  }

  return walletBalances;
}

module.exports = { getWalletsWithBalance };

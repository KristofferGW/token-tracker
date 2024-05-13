const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

async function fetchErc20Balances(address, chain) {
    const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
    });

    const tokens = tokenBalances.result.map((token) = token.display());

    console.log(tokens);
}

fetchErc20Balances("0x0Ef8296c36b7AcfD82F0b8d35A70bf43E8D23bd4", EvmChain.ETHEREUM);
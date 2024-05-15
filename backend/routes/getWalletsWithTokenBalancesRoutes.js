const express = require("express");
const getWalletsWithTokenBalancesController = require("../controllers/getWalletsWithBalanceController");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { addresses, tokens, chain } = req.query;
    if (!addresses || !tokens || !chain) {
        return res.status(400).json({ error: "Addresses, tokens, and chain are required" });
    }

    const walletAddresses = addresses.split(",");
    const tokenContracts = tokens.split(",");

    const data = await getWalletsWithTokenBalancesController.getWalletsWithBalance(walletAddresses, tokenContracts, chain);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

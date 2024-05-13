const express = require("express");
const erc20Controller = require("../controllers/erc20Controller");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { address, chain } = req.query;
    if (!address || !chain) {
        return res.status(400).json({ error: "Address and chain are required" });
    }

    const data = await erc20Controller.getErc20s(address, chain);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

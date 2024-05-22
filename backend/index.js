require("dotenv").config();
const express = require("express");
const cors = require("cors");
const getWalletsWithTokenBalancesRoutes = require("./routes/getWalletsWithTokenBalancesRoutes");
const { startMoralis } = require("./services/moralisService");

const app = express();
const port = process.env.PORT || 3000;
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

app.use(cors());

app.use(express.json());

app.use("/getWalletsWithTokenBalances", getWalletsWithTokenBalancesRoutes);

const startServer = async () => {
  try {
    await startMoralis(MORALIS_API_KEY);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();

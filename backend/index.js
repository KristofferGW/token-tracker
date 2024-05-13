require("dotenv").config();
const express = require("express");
const erc20Routes = require("./routes/erc20Routes");
const { startMoralis } = require("./services/moralisService");

const app = express();
const port = process.env.PORT || 3000;
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

// Middleware
app.use(express.json());

// Routes
app.use("/erc20s", erc20Routes);

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

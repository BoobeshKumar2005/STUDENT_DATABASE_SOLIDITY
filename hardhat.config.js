const { buildModule } = require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://sepolia.infura.io/v3/9daff4d9c5a8429da591b115ebfe205b",
      accounts: [process.env.PRIVATE_KEY]
    }
  },

  }

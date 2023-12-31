require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      remappings: [
        // Add your remappings here
        // "@openzeppelin=import-path-to-openzeppelin-contracts",
        // "@chainlink/contracts:node_modules/@chainlink/contracts/",
        // Add more remappings as needed
      ],
    }
  },
}

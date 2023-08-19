require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.18",

  networks: {
    'Nova': {
      url: 'https://nova.arbitrum.io/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
    
    'EncodeOrbit': {
      url: 'http://localhost:8449',
      accounts: [process.env.PRIVATE_KEY],
    },

  },

  etherscan: {
    apiKey: {
      "Nova": "abc",
      "EncodeOrbit": "abc"
    },

    customChains: [
      {
        network: "Nova",
        chainId: 42170,
        urls: {
          apiURL: "https://api-nova.arbiscan.io/api",
          browserURL: '',
        },
      },

      {
        network: "EncodeOrbit",
        chainId: 7288857111,
        urls: {
          apiURL: "http:localhost:4000/api",
          browserURL: '',
        },
      },
    ],

  },
}
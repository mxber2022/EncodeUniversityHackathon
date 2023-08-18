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
  },

  etherscan: {
    apiKey: {
      "Nova": "abc"
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
    ],

  },
}

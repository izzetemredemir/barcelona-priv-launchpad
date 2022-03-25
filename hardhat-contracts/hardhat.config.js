require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("hardhat-laika")
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

    defaultNetwork: 'avash',
    networks: {
      avash: {
        url: 'http://localhost:9650/ext/bc/C/rpc',
        gasPrice: 225000000000,
        chainId: 43112,
        accounts: [process.env.PK]
      },
      
      fuji: {
        url: 'https://api.avax-test.network/ext/bc/C/rpc',
        gasPrice: 225000000000,
        chainId: 43113,
        accounts: [process.env.PK]
      },
      subnet: {
        url: 'http://127.0.0.1:9650/ext/bc/2rzaCaGkqKnRBjcxoFVbSyJCUW58xhyTThDu5JR2T5fCqgCa19/rpc',
        gasPrice: 50000000000,
        chainId: 43214,
        timeout: 900000000,
        accounts: [process.env.PK]
      },
      local: {
        url: 'http://localhost:8545',
      },
    },
    etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: {
       
      }
    },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  
};

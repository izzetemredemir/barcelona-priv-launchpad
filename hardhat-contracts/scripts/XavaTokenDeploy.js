const { ethers } = require("hardhat");


async function main() {
    // We get the contract to deploy
    const TokenFactory = await ethers.getContractFactory("XavaToken");

    const supply = ethers.utils.parseUnits("100000000")
    const name = "Xava";
    const symbol = "Xava";
    
    const decimals = 18;
  
    const token = await TokenFactory.deploy(name,symbol,supply,decimals);

    console.log(`${name} Token deployed to: ${token.address} `);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
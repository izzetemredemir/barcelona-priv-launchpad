const hre = require("hardhat");
//const { getSavedContractAddresses, saveContractAddress} = require('./utils')
const { ethers, web3 } = hre

const adminContract = "";

const allocationStakingContract = "";

async function main() {
    //const contracts = getSavedContractAddresses()[hre.network.name];

    const SalesFactory = await ethers.getContractFactory("SalesFactory");
    const salesFactory = await SalesFactory.deploy(adminContract, allocationStakingContract);
    await salesFactory.deployed();

    //saveContractAddress(hre.network.name, "SalesFactory", salesFactory.address);
    console.log('Sales factory deployed to: ',salesFactory.address);
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

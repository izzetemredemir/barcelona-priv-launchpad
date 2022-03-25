const hre = require("hardhat");
//const { getSavedContractAddresses, saveContractAddress} = require('./utils')
const { ethers, web3 } = hre

const adminContract = "0x0000000000000000000000000000000000000000";

const allocationStakingContract = "0x0000000000000000000000000000000000000000";

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

const hre = require("hardhat");
const { getSavedContractAddresses } = require('./utils')
const { ethers, web3 } = hre

async function main() {

    const contracts = getSavedContractAddresses()[hre.network.name];
    const admin = await hre.ethers.getContractAt('Admin', contracts['Admin']);
    await admin.addAdmin('0x3f243FdacE01Cfd9719f7359c94BA11361f32471')
    
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

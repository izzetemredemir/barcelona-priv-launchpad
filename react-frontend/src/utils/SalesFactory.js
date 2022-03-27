

const  Web3  =  require('web3');
const web3 =   new Web3( new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/33f6636f58a726bee5b27d6b/avalanche/testnet'));  
const contractABI = require('../SalesFactory-abi.json')
const contractAddress = "0x4695F06EdAd1D483Cd8B8DC872acFD141A17798D";

const contract = new web3.eth.Contract(contractABI, contractAddress);


   export const  getNumberOfSalesDeployed = async()=> {
    const result = await contract.methods.getNumberOfSalesDeployed().call(); 
    return result;
  }  

  export const  getAllSales = async(startIndex,endIndex)=> {
    const result = await contract.methods.getAllSales(startIndex,endIndex).call(); 
    return result;
  }  
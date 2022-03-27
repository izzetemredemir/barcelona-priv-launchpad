const  Web3  =  require('web3');
const web3 =   new Web3( new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/YOUR_MORALIS_KEY/avalanche/testnet'));  
const contractABI = require('../XavaToken-abi.json')
const contractAddress = "0x0559F0E9Cd9519D0360c845930E8233fF49174C2";

const contract = new web3.eth.Contract(contractABI, contractAddress);



   export const  getBalanceOf = async(user)=> {
    const result = await contract.methods.balanceOf(user).call(); 
    return result;
  }  

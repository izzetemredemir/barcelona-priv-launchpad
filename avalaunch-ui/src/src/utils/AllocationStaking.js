const  Web3  =  require('web3');
const web3 =   new Web3( new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/33f6636f58a726bee5b27d6b/avalanche/testnet'));  
const contractABI = require('../AllocationStaking-abi.json')
const contractAddress = "0x0aaf76049a205474C8afE1b0348a8846b4300674";

const contract = new web3.eth.Contract(contractABI, contractAddress);



   export const  getDepositFeePercent = async()=> {
    const result = await contract.methods.depositFeePercent().call(); 
    return result;
  }  
  export const  getDepositFeePrecision = async()=> {
    const result = await contract.methods.depositFeePrecision().call(); 
    return result;
  }  

  export const  getTotalRewards = async()=> {
    const result = Web3.utils.fromWei( await contract.methods.totalRewards().call(),'ether'); 
    return result;
  }  

 
  export const  getStartTimestamp = async()=> {
    const result = await contract.methods.startTimestamp().call(); 
    return result;
  }  

  export const  getEndTimestamp = async()=> {
    const result = await contract.methods.endTimestamp().call(); 
    return result;
  }  

  export const  getPaidOut = async()=> {
    const result = await contract.methods.paidOut().call(); 
    return result;
  }    

  export const  getTotalPending = async()=> {
    const result = await contract.methods.totalPending().call(); 
    return result;
  }  
  
  

  export const  getDeposited = async(user)=> {
    const result = await contract.methods.deposited(0,user).call(); 
    console.log(result);
    return result;
  }  

  export const deposit = async( contractAddress, _amount, ) => {

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

   const transactionParameters = {
   to: contractAddress, 
   from: window.ethereum.selectedAddress, 

   'data': window.contract.methods.deposit( 0,    parseInt(_amount) ).encodeABI()
};


   try {
   const txHash = await window.ethereum
       .request({
           method: 'eth_sendTransaction',
           params: [transactionParameters],
       });
   return {
       success: true,
       status: "https://testnet.snowtrace.io/tx/" + txHash
   }
   } catch (error) {
   return {
       success: false,
       status: "Error: " + error.message
   }
}
  }

  
  export const withdraw = async(  _amount, ) => {

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

   const transactionParameters = {
   to: contractAddress, 
   from: window.ethereum.selectedAddress, 

   'data': window.contract.methods.withdraw( 0,    parseInt(_amount) ).encodeABI()
};


   try {
   const txHash = await window.ethereum
       .request({
           method: 'eth_sendTransaction',
           params: [transactionParameters],
       });
   return {
       success: true,
       status: "https://testnet.snowtrace.io/tx/" + txHash
   }
   } catch (error) {
   return {
       success: false,
       status: "Error: " + error.message
   }
}
  }
  
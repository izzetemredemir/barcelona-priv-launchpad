

const  Web3  =  require('web3');
const web3 =   new Web3( new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/33f6636f58a726bee5b27d6b/avalanche/testnet'));  
const contractABI = require('../AvalaunchSale-abi.json');

const contractAddress = "0x487487EA7EE8Ae9a678B2aaA729B2dE83ba2fE04";
const contract =  new web3.eth.Contract(contractABI,contractAddress);


   export const  getCurrentRoundd = async(contractAddress)=> {   
   
   try{
    const result = await contract.methods.getCurrentRound().call(); 

    return result;
   }catch(err) {
    console.log(err.message);
    return "Error";
  }
   


  }  

  export const  getNumberOfRegisteredUsers = async(contractAddress)=> {
    let contract = new web3.eth.Contract(contractABI, contractAddress);
    const result = await contract.methods.getNumberOfRegisteredUsers().call(); 
    return result;
  }  
  

  export const  getNumberOfParticipants = async(contractAddress)=> {
    let contract = new web3.eth.Contract(contractABI, contractAddress);
    const result = await contract.methods.numberOfParticipants().call(); 
    return result;
  }  


  export const  isParticipated = async(contractAddress,user)=> {
    let contract = new web3.eth.Contract(contractABI, contractAddress);
    const result = await contract.methods.isParticipated(user).call(); 
    return result;
  } 
 

  export const  getRegistration = async(contractAddress)=> {
    let contract = new web3.eth.Contract(contractABI, contractAddress);
    const result = await contract.methods.registration().call(); 
    return result;
  } 
  

  export const  getSale = async(contractAddress)=> {
    let contract = new web3.eth.Contract(contractABI, contractAddress);
    const result = await contract.methods.sale().call(); 
    return result;
  } 

  export const registerForSale = async( contractAddress, _amount,rounId ) => {

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

   const transactionParameters = {
   to: contractAddress, 
   from: window.ethereum.selectedAddress, 
   gas: "3000000",
   value:_amount,
   'data': window.contract.methods.registerForSale( parseInt(rounId) ).encodeABI()
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



  export const participate = async( contractAddress, pdepositavax,ptokenamount,pAmaountXavaToBurn,proundId ) => {

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

   const transactionParameters = {
   to: contractAddress, 
   from: window.ethereum.selectedAddress, 
   gas: "3000000",
   value:pdepositavax,
   'data': window.contract.methods.participate(  ptokenamount,pAmaountXavaToBurn,proundId  ).encodeABI()
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

  


  export const withdrawEarnings = async( contractAddress ) => {

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

   const transactionParameters = {
   to: contractAddress, 
   from: window.ethereum.selectedAddress, 
   'data': window.contract.methods.withdrawEarnings(  ).encodeABI()
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
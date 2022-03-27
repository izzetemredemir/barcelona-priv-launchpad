require('dotenv').config();
//const  Web3  =  require('web3');
//const web3 =   new Web3( new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/33f6636f58a726bee5b27d6b/avalanche/testnet'));  

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "eth_requestAccounts",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "Wallet Error: " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: "Metamask is required"
      };
    }
  };

  export async function getCurrentWalletConnected  () {
 

    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "eth_requestAccounts",
          };
        } else {
          return {
            address: "",
            status: "Metamask Connect",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "Wallet error:" + err.message,
        };
      }
    } else {
      return {
        address: "",
      status: "Metamask is required",
      };
    }
  };

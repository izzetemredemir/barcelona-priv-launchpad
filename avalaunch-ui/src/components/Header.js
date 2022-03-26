import React from 'react'

import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected} from "../utils/wallet.js";
import "./Header.css"
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import "../utils/CoinbaseWallet";

//

import { Web3Provider } from "@ethersproject/providers";

import { WalletLinkConnector } from "@web3-react/walletlink-connector";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const Header = (props) => {
  function getLibrary(provider) {
    return new Web3Provider(provider);
  }
  
  const { active, chainId, account, activate } = useWeb3React();
  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42],
   });
   
   
    //State variables
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
  

    function addWalletListener() {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
            setWallet(accounts[0]);
            setStatus("");
          } else {
            setWallet("");
            setStatus("");
          }
        });
      } else {
        setStatus(
          "Metamask is required"
        );
      }
    }

    
    useEffect(async () => {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address)
      setStatus(status);
      addWalletListener(); 
    
  
    }, []);
    
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWallet(walletResponse.address);
    };


    return (


      <div className='containert'>
          <div>Connection Status: {active}</div>
    <div>Account: {account}</div>
    <div>Network ID: {chainId}</div>
 
     
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="logo"> <img src='https://i.imgur.com/G5OYSzC.png' alt="" width="100" height="57"/> </a> 
       
        <div className='links'>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center color-white mb-md-0">
          <div className='navlinks'>
          <li><a c href="/" className="nav-link text-white">Home</a></li> 
          <li><a href="/staking" className="nav-link text-white ">Allocation Staking</a></li>
          <li><a href="/sales" className="nav-link text-white">Launch </a></li> 
        </div>
        </ul> 
        </div>

        <div className="col-md-3 text-end">
          
        <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
          <button className="button1" variant="primary" onClick={connectWalletPressed}>
          {walletAddress.length > 0 ? (
            "Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <span>Connect Wallet</span>
          )}</button>






          
        </div>
      </header>
    </div>

   );
  };
  
  export default Header;
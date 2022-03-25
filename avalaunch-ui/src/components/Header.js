import React from 'react'

import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected} from "../utils/wallet.js";



const Header = (props) => {
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
      <div className='container'>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="/staking" className="nav-link px-2 link-dark">Allocation Staking</a></li>
          <li><a href="/sales" className="nav-link px-2 link-dark">Sales</a></li>
        </ul>

        <div className="col-md-3 text-end">
          
          <button variant="primary" onClick={connectWalletPressed}>
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
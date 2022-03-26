import React, { Component } from 'react'

import { useEffect, useState } from "react";

import { getDepositFeePercent, getDepositFeePrecision,getTotalRewards,getStartTimestamp,getEndTimestamp,getPaidOut,getTotalPending,getDeposited,deposit,withdraw} from "../utils/AllocationStaking";

import {getCurrentWalletConnected} from "../utils/wallet";

import {GetAvax_price,GetChainStatus,GetCurrentBlock} from "../utils/covalent";

import SimpleDateTime  from 'react-simple-timestamp-to-date';


const api_key = "ckey_fd0cd939c5f640b0ae183e94e92"
const axios = require('axios');

const TokenInfo = (props) => {

const [avax_price, setAvax_price] = useState();
const [chain_status, setChainStatus] = useState({});
const [current_block, setCurrentBlock] = useState();
useEffect(async () => {


    let url = "https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=avax&key="+api_key

    // avax price
    axios.get(url,    {

    })
    .then(function (response) {
        setAvax_price( response.data.data.items[0].quote_rate);

 
        
      return response.data.data.items[0].quote_rate;
    
    })
    .catch(function (error) {
      console.log(error);
    }); 

    // Get current block 

    let url2 = "https://api.covalenthq.com/v1/43114/block_v2/latest/?quote-currency=USD&format=JSON&key="+api_key
    axios.get(url2,    {
  

   })
   .then(function (response) {

  
       setCurrentBlock(response.data.data.items[0].height);

   
   })
   .catch(function (error) {
     console.log(error);
   }); 
 // GetChainStatus

 let url3 = "https://api.covalenthq.com/v1/chains/status/?quote-currency=USD&format=JSON&key="+api_key
     axios.get(url3,    {
   

    })
    .then(function (response) {
        let tempResp = {
         "name": response.data.data.items[4].name,
        "chain_id":response.data.data.items[4].chain_id,
        "is_testnet":response.data.data.items[4].is_testnet,
     
        "synced_block_height":response.data.data.items[4].synced_block_height,
        "synced_blocked_signed_at":response.data.data.items[4].synced_blocked_signed_at,
    }

    setChainStatus(tempResp);
    
    
    })
    .catch(function (error) {
      console.log(error);
    }); 
       
}, []);


    return (
      <main>
        <div className="Home"> 
        
     <div className='container'>
      Hi {avax_price} {current_block} 

      {chain_status.name}
      {chain_status.chain_id}
      {chain_status.is_testnet}
      {chain_status.synced_block_height}
      {chain_status.synced_blocked_signed_at}
      
  </div>    
  </div>
    </main>    
    )
  }
  export default TokenInfo;

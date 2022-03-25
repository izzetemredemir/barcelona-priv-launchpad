import React, { Component } from 'react'

import { useEffect, useState } from "react";

import { getDepositFeePercent, getDepositFeePrecision,getTotalRewards,getStartTimestamp,getEndTimestamp,getPaidOut,getTotalPending,getDeposited,deposit,withdraw} from "../utils/AllocationStaking";

import {getCurrentWalletConnected} from "../utils/wallet";

import {getBalanceOf} from "../utils/XavaToken";
import SimpleDateTime  from 'react-simple-timestamp-to-date';


const Staking = (props) => {


const [depositFeePercent, setDepositFeePercent] = useState(0);

const [depositFeePrecision, setDepositFeePrecision] = useState(0);

const [totalRewards, setTotalRewards] = useState(0);

const [startTimestamp, setStartTimestamp] = useState();

const [endTimestamp, setEndTimestamp] = useState();

const [paidOut, setPaidOut] = useState();

const [totalPending, setTotalPending] = useState();


const [deposited, setDeposited] = useState();

useEffect(async () => {
  setDepositFeePercent(await getDepositFeePercent());

  setDepositFeePrecision(await getDepositFeePrecision());

  setTotalRewards(await getTotalRewards());

  setStartTimestamp(await getStartTimestamp());

  setEndTimestamp(await getEndTimestamp());

  setPaidOut(await getPaidOut());

  setTotalPending(await getTotalPending());


}, []);




const onDepositPressed = async () => {
  const val =   document.getElementById("depositInput").value;
  let depositSucsess=  await deposit(val);
  console.log(depositSucsess);


};

const onWithdrawPressed = async () => {
  const val =   document.getElementById("withdrwaInput").value;
  let depositSucsess=  await withdraw(val);
  console.log(depositSucsess);


};


const onDepositMaxPressed = async () => {
  let wallet=  await getCurrentWalletConnected();
  
  let tempBalance = await getBalanceOf(wallet.address);

  console.log(wallet);

  document.getElementById("depositInput").value = tempBalance;



};

const onWithdrawMaxPressed = async () => {
  let wallet=  await getCurrentWalletConnected();

  let tempDeposited = await getDeposited(wallet.address);
  setDeposited(tempDeposited);

  document.getElementById("withdrwaInput").value = tempDeposited;


};

    return (
      <main>
        <div className="Home"> 
        
     <div className='container'>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-6 rounded- shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Stake Xava</h4>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-3 mb-4">   
              <li><button id="depoitmax" onClick={onDepositMaxPressed}>Max </button></li>           
            </ul>     
          <div class="input-group">
            <input type="text" className="form-control" id="depositInput" placeholder="XAVA"/>
            <button type="submit"  onClick={onDepositPressed} className="btn btn-primary">Deposit</button>
          </div>      
          </div>
        </div>
      </div>  
      <div class="col">
        <div class="card mb-6 rounded- shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Withdraw Xava</h4>
          </div>
          <div class="card-body">          
            <ul class="list-unstyled mt-3 mb-4">
            <li><button id="erc20" onClick={onWithdrawMaxPressed}>    Max     </button></li>              
            </ul>   
          <div class="input-group">
            <input type="text" className="form-control" id="withdrwaInput" placeholder="XAVA"/>
            <button type="submit"  onClick={onWithdrawPressed} className="btn btn-primary">Withdraw</button>
          </div>    
          </div>
        </div>
      </div>   
    </div>    
      </div>
    <div className="container px-6 py-6" id="featured-3">
    <h2 className="pb-2 border-bottom">XAVA Tokens Staked</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        
        <div className="feature-icon bg-primary bg-gradient">
        </div>
        <h2>Pool Info</h2>
   
        <p>startTimestamp :<SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{startTimestamp}</SimpleDateTime></p>
        <p>endTimestamp :<SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{endTimestamp}</SimpleDateTime></p>
         
      </div>
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">

        </div>
        <h2>Deposit Info</h2>
        <p>Deposit Fee: {depositFeePercent}</p>
        <p>Deposit Fee Precision {depositFeePrecision}</p>
            </div>
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">

        </div>
        <h2>Reward Info</h2>
        <p>Total Rewards {totalRewards}</p>
        <p>Total Pending {totalPending}</p>
        <p>paidOut: {paidOut}</p>
       </div>
    </div>
  </div>    
  </div>
    </main>    
    )
  }
  export default Staking;

import React, { Component } from 'react'

import { useEffect, useState } from "react";

import { getDepositFeePercent, getDepositFeePrecision,getTotalRewards,getStartTimestamp,getEndTimestamp,getPaidOut,getTotalPending,getDeposited,deposit,withdraw} from "../utils/AllocationStaking";

import {getCurrentWalletConnected} from "../utils/wallet";

import {getBalanceOf} from "../utils/XavaToken";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import "./Staking.css"

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
       <img className="allo" src="https://i.imgur.com/fojqmGZ.png"></img>
        
     <div className='container'>
      <div className='cardos'>
      <div class="row row-cols-1 row-cols-md-2 mb-2">
      </div>
     <div className='cardo1'> 
      <div class="col">
        
          <div className='cardo-header-1'>
          
            <h4 className='stake'>Stake BABUSH</h4> <img className="coin2" src="https://i.imgur.com/nOcECOA.png"></img>
          </div>
          
          
          <div class="card-body">
            <div className='balance'>Balance:</div> <div className='balance2'>1500</div>
          <ul className='buttono'> 
              <li><button id="depoitmax"className='bora'onClick={onDepositMaxPressed}>Max </button></li>           
            </ul>     
          <div class="input-group">
            <input type="text" className="form-control" id="depositInput" placeholder="BABUSH"/>
            <div className='buttono2'>
            <button type="submit"  onClick={onDepositPressed} className="butoncuk">Deposit</button>
            </div>
          </div>      
          </div>
        
    
     
      </div> 
     
       </div>    
      <div class="col">
      <div className='cardo1'>
          <div className="cardo-header-2">
            <h4 className="withdraw">Withdraw BABUSH</h4> <img className="coin" src="https://i.imgur.com/nOcECOA.png"></img>
          </div>
          <div class="card-body">    
          <div className='balance'>Balance:</div> <div className='balance2'>2500</div>      
            <ul className='buttono'>
            <button id="erc20" className='bora' onClick={onWithdrawMaxPressed}> Max </button>             
            </ul>   
          <div class="input-group">
            <input type="text" className="form-control" id="withdrwaInput" placeholder="BABUSH"/>
            <button type="submit" className="butoncuk"  onClick={onWithdrawPressed} >Withdraw</button>
          </div>    
          </div>
        </div>
      </div>   
    </div>    
      </div>
    <div className="containerto">
      <div className='babush-header'>
    <h2 className="pb-2">BABUSH Tokens Staked</h2>
    </div>
    <div className='infoo'>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      
      <div className="feature col">
        
        <div className="feature-icon bg-primary bg-gradient">
        </div>
        <div className='info-head'>
        <h2>Pool Info</h2>
        </div>
   
        <p>startTimestamp :<SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{startTimestamp}</SimpleDateTime></p>
        <p>endTimestamp :<SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{endTimestamp}</SimpleDateTime></p>
         
      </div>
      <div className= "info-cardo">
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">

        </div>
         
        <div className='info-head'>
        <h2>Deposit Info</h2>
        </div>
        <p>Deposit Fee: {depositFeePercent}</p>
        <p>Deposit Fee Precision {depositFeePrecision}</p>
            </div>
            </div>
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">

        </div>
        <div className='info-head'>
        <h2>Reward Info</h2>
        </div>
        <p>Total Rewards {totalRewards}</p>
        <p>Total Pending {totalPending}</p>
        <p>paidOut: {paidOut}</p>
       </div>
    </div>
    </div>
  </div>    
  </div>
  <div></div>
  <div></div>
    </main>    
    )
  }
  export default Staking;

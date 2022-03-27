import { wait } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {getCurrentRoundd,getNumberOfRegisteredUsers,getNumberOfParticipants,isParticipated,getRegistration ,getSale,registerForSale,participate,withdrawEarnings} from "../utils/AvalaunchSale";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import {getCurrentWalletConnected} from "../utils/wallet";

const Project = (props) => {


  let [currentRound, setCurrentRound] = useState(12);
  const [numberOfRegisteredUsers, setNumberOfRegisteredUsers] = useState(12);
  const [numberOfParticipants, setNumberOfParticipants] = useState(12);
  let [participated, setParticipated] = useState("Loading...");

  const [myWallet, setWallet] = useState();

  const [registration, setRegistration] = useState({});
  const [sale, setSale] = useState({});

  
  let [searchParams, setSearchParams] = useSearchParams();
  let [id, setId] = React.useState(
    searchParams.get("id")
  );
  
  useEffect(  () => {
    let isMounted = true; 

     if(!id){
      setSearchParams({ id });
     }

     let tempWallet ;


     getRegistration(id).then((value) => {
      if(isMounted ){
  
        setRegistration(value);
  }
    });     
    
     getCurrentWalletConnected().then((wallet) => {
      if(isMounted ){
          tempWallet = wallet.address;
          setWallet(tempWallet);


   
          isParticipated(id,tempWallet).then((part) => {
            if(isMounted ){
        setParticipated(part.toString());
        }
          });       
                 
      }      
    });   
    getCurrentRoundd(id).then((round) => {
      if(isMounted ){
        setCurrentRound(round);
  }
    });      

    getNumberOfParticipants(id).then((value) => {
      if(isMounted ){
        setNumberOfRegisteredUsers(value);
  }
    });      

    getNumberOfParticipants(id).then((value) => {
      if(isMounted ){
        setNumberOfParticipants(value);
  }
    });      


    getNumberOfRegisteredUsers(id).then((value) => {
      if(isMounted ){
        setNumberOfParticipants(value);
  }
    });    

    getSale(id).then((value) => {
      if(isMounted ){
        value[1]= value[1].toString();
        value[2]= value[2].toString();
        value[3]= value[3].toString();
        value[4]= value[4].toString();
        setSale(value);
  }
    });    
    

   

    return () => {
      isMounted = false;
      };



  }, []);
  

  const onRegisterFillPressed = async () => {
    /*const axios = require('axios');

     axios.post('http://localhost:3030/register',    {
      contract: id,
      roundId: '0',
      sender: myWallet

    })
    .then(function (response) {
      console.log(response.data.signature);
      document.getElementById("signature").value = response.data.signature;
    })
    .catch(function (error) {
      console.log(error);
    });*/   

    
    document.getElementById("roundId").value = 0;
      
    document.getElementById("registerForSale").value = 1;

  };

  const onRegisterPressed = async () => {


    
    let roundId = document.getElementById("roundId").value;
      
    let avax = document.getElementById("registerForSale").value ;

    let temp = await registerForSale(id,avax.toString(),roundId);

    console.log(roundId);

    console.log(temp);

  
  };

  
  const onParticipateFillPressed = async () => {

    
    document.getElementById("pdepositavax").value = 0;
      
    document.getElementById("ptokenamount").value = 1;
    document.getElementById("pAmaountXavaToBurn").value = 0;
    document.getElementById("proundId").value = 2;

  };

  const onParticipatePressed = async () => {
    
 
    let pdepositavax = document.getElementById("pdepositavax").value ;      
    let ptokenamount = document.getElementById("ptokenamount").value ;
    let pAmaountXavaToBurn = document.getElementById("pAmaountXavaToBurn").value ;
    let proundId= document.getElementById("proundId").value ;

    let temp = await participate(id,pdepositavax,ptokenamount,pAmaountXavaToBurn,proundId);


    console.log(temp);

  
  };

  

  const onWithdrawEarningsPressed = async () => {
    
    let temp = await withdrawEarnings(id);

    console.log(temp);

  
  };

  

  
  

    return (
      <main>
      <div className="Home"> 
      <img className="allo" src="https://i.imgur.com/nborIOR.png"></img>
      
   <div className='container'>
    <div className='cardos'>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div className="col">
      <div className="card mb-6 rounded- shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">RegisterForSale</h4>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">   
            <li><button id="depoitmax" onClick={onRegisterFillPressed} >Fill Inputs</button></li>           
          </ul>   
          <div className="input-group">
          <input type="text" className="form-control" id="registerForSale" placeholder="Registiration Deposit Avax"/>        
        </div> <br/>   
          <div className="input-group">
          <input type="text" className="form-control" id="signature" placeholder="signature"/>        
        </div><br/>    
        <div className="input-group">
          <input type="text" className="form-control" id="roundId" placeholder="roundId"/>        
        </div>    <br/>   
        <div className="input-group">         
          <button type="submit" onClick={onRegisterPressed}  className="btn btn-primary">Register</button>
        </div>      
        </div>
        </div>  
      </div>
      
    </div>  
     <div className="col">
      <div className="card mb-6 rounded- shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">Participate</h4>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">   
            <li><button id="depoitmax" onClick={onParticipateFillPressed} >Fill Inputs</button></li>           
          </ul>   
          <div className="input-group">
          <input type="text" className="form-control" id="pdepositavax" placeholder="Participate Deposit Avax"/>        
        </div> <br/>   
          <div className="input-group">
          <input type="text" className="form-control" id="ptokenamount" placeholder="Token Amount"/>        
        </div><br/>    
        <div className="input-group">
          <input type="text" className="form-control" id="pAmaountXavaToBurn" placeholder="AmaountXavaToBurn"/>        
        </div><br/> 
        <div className="input-group">
          <input type="text" className="form-control" id="proundId" placeholder="roundId"/>        
        </div>    <br/>   
        <div className="input-group">         
          <button type="submit" onClick={onParticipatePressed}    className="btn btn-primary">Participate</button>
        </div>      
        </div>        
      </div>      
    </div>  
    <div className="col">
      <div className="card mb-6 rounded- shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal"> Withdraw Earnings </h4>
        </div>
        <div className="card-body">          
        <div className="input-group">         
          <button type="submit" onClick={onWithdrawEarningsPressed}    className="btn btn-primary">Withdraw Earnings </button>
        </div>      
        </div>        
      </div>      
    </div>  
    
  </div>    
    </div>
  <div className="container px-6 py-6" id="featured-3">
  <h2 className="pb-2 border-bottom">XAVA Tokens Staked</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">


    <div className="feature col">
      <div className="feature-icon bg-primary bg-gradient">

      </div>
      <div className='sale-info'>
      <h2>Sale Info</h2>   
      <p>Current Round: {currentRound} </p>
      <p>numberOfRegisteredUsers: {numberOfRegisteredUsers} </p>
      <p>numberOfParticipants: {numberOfParticipants}</p>
      <p>Contract: {id}</p>
      </div>

     </div>
     <div className="feature col">
      <div className="feature-icon bg-primary bg-gradient">

      </div>
      <h2>User Info</h2>
      <p>Isparticipated :  {participated}</p>

     </div>
     <div className="feature col">
      <div className="feature-icon bg-primary bg-gradient">
      </div>
      <h2>Register Info</h2>
      <p>startTimestamp :<SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{registration[0]}</SimpleDateTime></p>
        <p>endTimestamp :<SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{registration[1]}</SimpleDateTime></p>
      <p>numberOfRegistrants :  {registration[2]}</p>

     </div>

     <div className="feature col">
      <div className="feature-icon bg-primary bg-gradient">
      </div>
      <h2>Sale Info</h2>
      <p> token|address : {sale[0]}</p>
      <p>isCreated: {sale[1]}</p>
      <p>earningsWithdrawn: {sale[2]}</p>
      <p>leftoverWithdrawn: {sale[3]}</p>
      <p>tokensDeposited:{sale[4]}</p>
      <p>saleOwner:{sale[5]}</p>
      <p>tokenPriceInAVAX:{sale[6]}</p>
      <p>amountOfTokensToSell:{sale[7]}</p>
      <p>totalTokensSold:{sale[8]}</p>
      <p>totalBABUSHRaised:{sale[9]}</p>
      <p>saleEnd :<SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{sale[10]}</SimpleDateTime></p>
        <p>tokensUnlockTime :<SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{sale[11]}</SimpleDateTime></p>

     </div>
  </div>
</div>    

</div>
  </main>     
    );
  }


export default  Project  ;

import { Util } from 'bootstrap'
import React, { Component } from 'react'
import { useEffect, useState } from "react";

import  {getNumberOfSalesDeployed,getAllSales} from "../utils/SalesFactory";

  const Sales = (props) => {

    const [numberOfSalesDeployed, setNumberOfSalesDeployed] = useState(0);
    const [saleList, setSaleList] = useState([]);

    useEffect(async () => {
      let tempSales;
      if(numberOfSalesDeployed ==0){
        tempSales = await getNumberOfSalesDeployed();
        setNumberOfSalesDeployed(tempSales);
      }

      let allSales = await getAllSales(0,tempSales);

      if(saleList.length < tempSales){

      setSaleList(allSales);
      }


    


    
    }, []);
    

    return (
    <div className="Sales"> 
            <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
            <h1 className="display-5 fw-bold">Sales Page</h1>
            <div className="col-lg-6 mx-auto">          
            </div>
        </div>
        <div className="container">
              <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Contract Adress</th>
            <th scope="col">Sale End Date</th>
          </tr>
        </thead>
        <tbody>     
        {saleList.map((object, i) => 
        <tr>         
        <th scope="row">   {i} </th>
        <td><a href={'project?id='+saleList[i]}>Test Token</a></td>
        <td>{saleList[i]}</td>
        <td>@mdo</td>            
      </tr> 
       )}   
               
        </tbody>
      </table>
   
      </div>  
    </div>    
    )
  }

export default Sales;

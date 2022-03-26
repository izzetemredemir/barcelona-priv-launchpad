require('dotenv').config();
const api_key = "ckey_fd0cd939c5f640b0ae183e94e92"
const axios = require('axios');
export const GetAvax_price = async () => {

    let url = "https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=avax&key="+api_key

     axios.get(url,    {


    })
    .then(function (response) {



      return response.data.data.items[0].quote_rate;

    })
    .catch(function (error) {
      console.log(error);
    }); 

  };

  export const GetCurrentBlock = async () => {
    let url = "https://api.covalenthq.com/v1/43114/block_v2/latest/?quote-currency=USD&format=JSON&key="+api_key
     axios.get(url,    {


    })
    .then(function (response) {

        let data = response.data.data.items[0].height;
        console.log(data);

      return data;

    })
    .catch(function (error) {
      console.log(error);
    }); 

  };

  export const GetChainStatus = async () => {

    let url = "https://api.covalenthq.com/v1/chains/status/?quote-currency=USD&format=JSON&key="+api_key
     axios.get(url,    {


    })
    .then(function (response) {
        let tempResp = {
         "name": response.data.data.items[4].chain_id,
        "chain_id":response.data.data.items[4].chain_id,
        "is_testnet":response.data.data.items[4].chain_id,

        "synced_block_height":response.data.data.items[4].chain_id,
        "synced_blocked_signed_at":response.data.data.items[4].chain_id,
    }


      return tempResp;

    })
    .catch(function (error) {
      console.log(error);
    }); 

  };
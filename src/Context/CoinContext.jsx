import { createContext, useEffect, useState } from "react";


  export const coinContext=createContext();


  const CoincontextProvider=(props)=>{
    
const [allCoin,setAllCoin]=useState([])

const [currency,setCurrency]=useState({
    name:"usd",
    symbol:"$",
})


const fetchAllCoins=async()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': ' '
        }
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(response => response.json())
        .then(response => setAllCoin(response))
        .catch(err => console.error(err));
}

useEffect(()=>{
    fetchAllCoins();
},[currency])


const contextVal={
allCoin,currency,setCurrency
}



return(
    <coinContext.Provider value={contextVal}>
        {props.children}
    </coinContext.Provider>
)
 
  }

  export default CoincontextProvider;





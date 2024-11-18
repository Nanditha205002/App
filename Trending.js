// src/pages/Trending.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Trending.css';

function Trending() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_COINGECKO_API}/coins/markets`, {
      params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10 }
    }).then(res => setCoins(res.data));
  }, []);
  
  return (
    <div className="trending-container">
      {coins.map(coin => (
        <div key={coin.id} className="coin-card">
          <img src={coin.image} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>Price: ${coin.current_price}</p>
          <p>24h Change: {coin.price_change_percentage_24h}%</p>
        </div>
      ))}
    </div>
  );
}

export default Trending;

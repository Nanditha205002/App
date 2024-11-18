// src/pages/MarketOverview.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MarketOverview.css';

function MarketOverview() {
  const [coins, setCoins] = useState([]);
  const apiUrl = process.env.REACT_APP_COINGECKO_API;

  useEffect(() => {
    axios.get(`${apiUrl}/coins/markets`, {
      params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 100 }
    }).then((res) => setCoins(res.data));
  }, [apiUrl]);

  return (
    <div className="market-overview">
      <h1>Market Overview</h1>
      <div className="coin-list">
        {coins.map((coin) => (
          <div key={coin.id} className="coin-item">
            <img src={coin.image} alt={coin.name} />
            <h3>{coin.name}</h3>
            <p>Price: ${coin.current_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketOverview;

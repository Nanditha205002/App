// src/pages/CoinDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './CoinDetail.css';

function CoinDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_COINGECKO_API}/coins/${id}`).then(res => setCoin(res.data));
    axios.get(`${process.env.REACT_APP_COINGECKO_API}/coins/${id}/market_chart`, { 
      params: { vs_currency: 'usd', days: '30' } 
    }).then(res => setHistory(res.data.prices));
  }, [id]);

  const chartData = {
    labels: history.map(h => new Date(h[0]).toLocaleDateString()),
    datasets: [{
      label: 'Price (USD)',
      data: history.map(h => h[1]),
      borderColor: 'rgba(75,192,192,1)',
    }]
  };
  
  return coin ? (
    <div className="coin-detail">
      <h1>{coin.name}</h1>
      <p>Current Price: ${coin.market_data.current_price.usd}</p>
      <Line data={chartData} />
    </div>
  ) : <p>Loading...</p>;
}

export default CoinDetail;

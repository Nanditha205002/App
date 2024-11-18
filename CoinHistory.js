// src/pages/CoinHistory.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './CoinHistory.css';

function CoinHistory() {
  const { id } = useParams();
  const [history, setHistory] = useState([]);
  const apiUrl = process.env.REACT_APP_COINGECKO_API;

  useEffect(() => {
    axios.get(`${apiUrl}/coins/${id}/market_chart`, {
      params: { vs_currency: 'usd', days: '365' }
    }).then((res) => setHistory(res.data.prices));
  }, [id, apiUrl]);

  const chartData = {
    labels: history.map(h => new Date(h[0]).toLocaleDateString()),
    datasets: [{
      label: 'Price (USD)',
      data: history.map(h => h[1]),
      borderColor: 'rgba(75,192,192,1)',
    }]
  };

  return (
    <div className="coin-history">
      <h1>Coin History</h1>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default CoinHistory;

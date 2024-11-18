// src/pages/News.js
import React, { useState, useEffect } from 'react';
import './News.css';

function News() {
  const [articles, setArticles] = useState([]);
  
  // You can use a real API to fetch news, or mock data.
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7')
      .then(response => response.json())
      .then(data => {
        // Example mock data
        setArticles([
          { title: "Bitcoin hits new all-time high", description: "Bitcoin has hit a new all-time high..." },
          { title: "Ethereum 2.0 launched", description: "Ethereum 2.0 has been launched with..." },
        ]);
      });
  }, []);

  return (
    <div className="news">
      <h1>Latest Crypto News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;

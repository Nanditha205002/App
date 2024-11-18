// src/pages/Portfolio.js
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const assets = [
    { name: 'Bitcoin', balance: 0.5, price: 50000 },
    { name: 'Ethereum', balance: 1.2, price: 3000 }
  ];

  return (
    <div className="portfolio">
      <h2>Your Portfolio</h2>
      <ul>
        {assets.map(asset => (
          <li key={asset.name}>
            <p>{asset.name}</p>
            <p>Balance: {asset.balance}</p>
            <p>Value: ${asset.balance * asset.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;

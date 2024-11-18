// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Trending from './pages/Trending';
import CoinDetail from './pages/CoinDetail';
import Portfolio from './pages/Portfolio';
import MarketOverview from './pages/MarketOverview';
import CoinHistory from './pages/CoinHistory';
import News from './pages/News';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/market-overview" element={<MarketOverview />} />
        <Route path="/coin-history/:id" element={<CoinHistory />} />
        <Route path="/news" element={<News />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

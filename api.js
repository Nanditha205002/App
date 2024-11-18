// src/services/api.js
import axios from 'axios';

const apiUrl = process.env.REACT_APP_COINGECKO_API;

export const fetchTrendingCoins = () => {
  return axios.get(`${apiUrl}/coins/markets`, {
    params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10 }
  });
};

export const fetchCoinDetails = (id) => {
  return axios.get(`${apiUrl}/coins/${id}`);
};

export const fetchCoinHistory = (id, days = 30) => {
  return axios.get(`${apiUrl}/coins/${id}/market_chart`, {
    params: { vs_currency: 'usd', days }
  });
};

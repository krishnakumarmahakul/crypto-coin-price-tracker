import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import style from './Bitcoindetails.module.css';
import axios from 'axios';

function Bitcoindetails() {
  const { coinId } = useParams(); 
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchCoinDetails = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
        headers: {
          accept: 'application/json',
        },
      });
      setCoin(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, [coinId]);

  useEffect(() => {
    fetchCoinDetails();
  }, [fetchCoinDetails]);

  if (loading) return <p className={style.loading}>Loading...</p>;
  if (error) return <p className={style.error}>{error}</p>;

  return (
    <div className={style.cryptoContainer}>
      <h2>{coin?.name} ({coin?.symbol?.toUpperCase()})</h2>
      {coin?.image?.large ? (
        <img src={coin.image.large} alt={coin.name} className={style.coinImage} />
      ) : (
        <p>Image not available</p>
      )}
      <p>Current Price: <strong>${coin?.market_data?.current_price?.usd?.toLocaleString() || 'N/A'}</strong></p>
      <p>Market Cap: <strong>${coin?.market_data?.market_cap?.usd?.toLocaleString() || 'N/A'}</strong></p>
      <p>24h Change: 
        <span className={coin?.market_data?.price_change_percentage_24h >= 0 ? style.green : style.red}>
          {coin?.market_data?.price_change_percentage_24h?.toFixed(2) || '0.00'}%
        </span>
      </p>
      <h3>Description</h3>
      <p>{coin?.description?.en || 'No description available.'}</p>
      <h3>Categories</h3>
      <ul>
        {coin?.categories?.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <h3>Block Time</h3>
      <p>{coin?.block_time_in_minutes} minutes</p>
      <h3>Hashing Algorithm</h3>
      <p>{coin?.hashing_algorithm || 'N/A'}</p>
    </div>
  );
}

export default Bitcoindetails;
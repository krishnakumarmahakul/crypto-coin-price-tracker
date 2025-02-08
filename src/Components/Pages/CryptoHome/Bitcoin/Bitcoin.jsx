import React, { useState, useEffect } from 'react'
import style from './Bitcoin.module.css'
import axios from 'axios'
function Bitcoin() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
            headers: { accept: "application/json" },
          }
        );
        setCoins(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (

    <>
    <div className={style.cryptoContainer}>
      <h2>Cryptocurrency Market</h2>
      <table className={style.cryptoTable}>
        <thead>

          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td className={style.coinName}>
                <img src={coin.image} alt={coin.name} className={style.coinImage} />
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>

              <td>${coin.current_price.toLocaleString()}</td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td className={coin.price_change_percentage_24h > 0 ? style.green : style.red}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Bitcoin
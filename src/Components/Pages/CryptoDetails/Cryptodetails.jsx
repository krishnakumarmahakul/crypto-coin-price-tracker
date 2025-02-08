import React, { useState } from "react";
import axios from "axios";
import style from "./Cryptodetails.module.css";


function Cryptodetails() {
  const [coinId, setCoinId] = useState("");
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  
  const fetchCoinDetails = async () => {
    if (!coinId) {
      setError("Please enter a coin ID.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      setCoin(response.data);

    } catch (err) {
      setError("Coin not found or API error. Please try again.");
      setCoin(null);
    } finally {
      setLoading(false);
    }

  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCoinDetails();
  };


  return (
    <div className={style.cryptoContainer}>
      
      <form onSubmit={handleSearch} className={style.searchForm}>
        <input
          type="text"
          placeholder="Enter coin ID (e.g., bitcoin, ethereum)"
          value={coinId}
          onChange={(e) => setCoinId(e.target.value)}
          className={style.searchInput}
        />
        <button type="submit" className={style.searchButton}>
          Search
        </button>
      </form>

      {loading && <p className={style.loading}>Loading...</p>}
      {error && <p className={style.error}>{error}</p>}


      
      {coin && (
        <div className={style.coinDetails}>

          <h2>
            {coin.name} ({coin.symbol.toUpperCase()})
          </h2>
          {coin.image?.large ? (
            <img
              src={coin.image.large}
              alt={coin.name}
              className={style.coinImage}
            />
          ) : (
            <p>Image not available</p>
          )}
          <p>
            Current Price:{" "}
            <strong>
              ${coin.market_data?.current_price?.usd?.toLocaleString() || "N/A"}
            </strong>
          </p>
          <p>
            Market Cap:{" "}
            <strong>
              ${coin.market_data?.market_cap?.usd?.toLocaleString() || "N/A"}
            </strong>
          </p>
          <p>
            24h Change:{" "}
            <span
              className={
                coin.market_data?.price_change_percentage_24h >= 0
                  ? style.green
                  : style.red
              }
            >
              {coin.market_data?.price_change_percentage_24h?.toFixed(2) || "0.00"}%
            </span>
          </p>
          <h3>Description</h3>
          <p>{coin.description?.en || "No description available."}</p>
          <h3>Categories</h3>
          <ul>
            {coin.categories?.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
          <h3>Block Time</h3>
          <p>{coin.block_time_in_minutes} minutes</p>
          <h3>Hashing Algorithm</h3>
          <p>{coin.hashing_algorithm || "N/A"}</p>
        </div>
      )}
    </div>
  );
}

export default Cryptodetails;
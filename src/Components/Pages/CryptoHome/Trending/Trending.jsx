import React, { useState, useEffect } from 'react'       
import style from './Trending.module.css'

function Trending() {

    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const trendingCoins = async () => {
            const url = 'https://api.coingecko.com/api/v3/search/trending';
            const options = { method: 'GET', headers: { accept: 'application/json' } };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const Trendingcoins = await response.json();
                console.log(Trendingcoins);
                setTrending(Trendingcoins.coins);
            } catch (error) {
                console.log("the error is ", error);
            }
        };

        trendingCoins();
    }, []);
  return (
    <>
    <div className={style.container}>
                <h1>Trending Coins</h1>
                <ul>
                    {trending.map((coin) => (
                        <li key={coin.item.id}>
                            <img src={coin.item.thumb} alt={coin.item.name} width="20" />
                            {coin.item.name} ({coin.item.symbol}) - ${coin.item.data?.price || "N/A"}
                        </li>
                    ))}
                </ul>
        </div>
    </>
  )
}


export default Trending
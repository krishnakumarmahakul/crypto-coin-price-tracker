import React, { useEffect, useState } from 'react'
import style from './Tpoten.module.css';
function Topten() {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
                );
                const data = await response.json();
                setCoins(data);
            } catch (error) {
                console.error('Error fetching coins:', error);
            }
        };

        fetchCoins();
    },[]);
    return (
        <>
            <div className={style.topcoin}>
                <h2>Top 10 Cryptocurrencies</h2>
                <ul className="coin-list">
                    {coins.map((coin) => (
                        <li key={coin.id} className="coin-item">
                            <img src={coin.image} alt={coin.name} />
                            <span>{coin.name} ({coin.symbol.toUpperCase()}) - ${coin.current_price}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Topten
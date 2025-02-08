import React from "react";
import styles from "./Getstarted.module.css";
import { Link, useNavigate } from "react-router-dom";

function Getstarted() {

    const navigation=useNavigate()
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to CoinGecko Insights</h1>
        <p className={styles.description}>
          CoinGecko is a leading cryptocurrency data provider that tracks market
          prices, volume, and trends of thousands of digital assets. Stay
          updated with real-time crypto data!
        </p>
        <button onClick={() => navigation("/cryptohome")} className={styles.button}>Get Started</button>
      </div>
      
    </>
  );
}

export default Getstarted;

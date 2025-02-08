import React, { useEffect, useState } from 'react';
import style from './Cryptohome.module.css';
import { Link, Outlet } from 'react-router-dom';

const Cryptohome = () => {
  

  return (
    <>
    <div>
        <nav className={style.nav}>
          <Link to="trending">Trending</Link>
          <Link to="topten">Top Ten</Link>
          <Link to="bitcoin">Bitcoin</Link>
          <Link to="/cryptohome/bitcoin/bitcoin">Bitcoin Details</Link>

        </nav>
        
    </div>
    <div className={style.navContainer}>
      <Outlet/>
    </div>
    
    


    </>
  );
};

export default Cryptohome;

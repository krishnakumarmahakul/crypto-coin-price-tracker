import React from 'react';
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';
import coingeko from '../../../assets/coingeko.png'

const Navbar = () => {
    return (
        <>
            <div className={style.navbar}>
                <div className={style.logo}>
                    <img className={style.logoimg} src={coingeko}
                     alt="" />
                </div>
                <ul className={style.navLinks}>
                     <li>
                        <Link to="/cryptohome">Home</Link>
                     </li>
                     <li>
                        <Link to="/catagory">Catagory</Link>
                     </li>
                     <li>
                        <Link to="/cryptodetails">Details</Link>
                     </li>

                </ul>
            </div>
        </>
    );
};

export default Navbar;
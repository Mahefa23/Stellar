import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
           <img src={logo} alt='logo stellar' />
           <div className="link-nav">
                <ul>
                <li><NavLink to="/" >Accueil</NavLink>l</li>
                <li><NavLink to="/" >Mes commandes</NavLink>l</li>
                <li><NavLink to="/" >Contact</NavLink>l</li>
                <li><NavLink to="/boutique" >Boutique</NavLink>l</li>
                </ul>
            </div> 
        </div>
    );
};

export default Navbar;
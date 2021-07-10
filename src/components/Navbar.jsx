import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>
                <Logo />
             </Link>
            <div className='navbar-link-container'>
                <Link to='/'>
                    Landkit
                </Link>
                <Link to='/sample'>
                    Sample
                </Link>
                <Link to='/design'>
                    Design
                </Link>
                <Link to='/pricing'>
                    Pricing
                </Link>
            </div>
            <button class='navbar-button'>
                Buy Now
            </button>
        </div>
    )
}

export default Navbar;
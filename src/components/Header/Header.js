import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="" />
            <div className='nav-info'>
                <a href="/home">Home</a>
                <a href="/Order">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;
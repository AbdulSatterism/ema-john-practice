import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="" />
            <div className='nav-info'>
                <Link to='/'>Shop</Link>
                <Link to="/Order">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;
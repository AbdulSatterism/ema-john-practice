import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../Context/UserContext';
import './Header.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='nav-container'>
            <img src={logo} alt="" />
            <div className='nav-info'>
                <Link to='/'>Shop</Link>
                <Link to="/Order">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button onClick={logOut}>Log Out</button>
                        :
                        <>
                            <Link to='/signup'>Sign Up</Link>
                            <Link to='/login'>Login</Link>
                        </>
                }
                <span className='span'>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;
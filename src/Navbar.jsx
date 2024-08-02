import React from 'react';
import './Navbar.css';
import logo1 from './logo1.svg';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-logo">
                <img src={logo1} id="logo" alt="Logo" />
            </div>
            <div className='nav-items'>
                <div className="nav-item">Home</div>
                <div className="nav-item">Community</div>
                <div className="nav-item">Services</div>
                <div className="nav-item">Businesses</div>
                <div className="nav-item">About us</div>
                <div className="nav-item">Contact Us</div>
            </div>
            <div className='search'>
                <input type="text" placeholder='Enter here' />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Navbar;

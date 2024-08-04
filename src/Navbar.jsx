import React, { useState } from 'react';
import './Navbar.css';
import logo1 from './logo1.svg';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="nav">
            <div className="nav-logo" onClick={toggleMenu}>
                <img src={logo1} id="logo" alt="Logo" className={menuVisible ? 'rotate' : ''} />
                <div className={`menu ${menuVisible ? 'spread' : ''}`}>
                    <ul className='menu-items'>
                        <li>News</li>
                        <li>Maps</li>
                        <li>Parks</li>
                    </ul>
                </div>
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

import React, { useState } from 'react';
import './Navbar.css';
import logo1 from './logo1.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [servicesVisible, setServicesVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const showServices = () => {
        setServicesVisible(true);
    };

    const hideServices = () => {
        setServicesVisible(false);
    };

    return (
        <div className="nav">
            <div className="nav-logo" onClick={toggleMenu}>
                <img src={logo1} id="logo" alt="Logo" className={menuVisible ? 'rotate' : ''} />
                <div className={`menu ${menuVisible ? 'spread' : ''}`}>
                    <ul className='menu-items'>
                        <li>
                            <Link to="/news" style={{ textDecoration: 'none', color: 'white' }} onClick={toggleMenu}>News</Link>
                        </li>
                        <li>
                            <Link to="/parks" style={{ textDecoration: 'none', color: 'white' }} onClick={toggleMenu}>Parks</Link>
                        </li>
                        <li>
                            <Link to="/places" style={{ textDecoration: 'none', color: 'white' }} onClick={toggleMenu}>Places</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='nav-items'>
                <Link to='/CityOne' className="nav-item">
                    <div style={{ textDecoration: 'none', color: 'white' }}>Home</div>
                </Link>
                <Link to='/community' className="nav-item">
                    <div style={{ textDecoration: 'none', color: 'white' }}>Community</div>
                </Link>
                <div 
                    className="nav-item" 
                    onMouseEnter={showServices} 
                    onMouseLeave={hideServices}
                >
                    Services
                    <div className={`dropdown ${servicesVisible ? 'show' : ''}`}>
                        <ul className='dropdown-items'>
                            <li>Education</li>
                            <li>Hospitals</li>
                            <li>Clinics</li>
                            <li>Police Station</li>
                            <li>Transportation</li>
                        </ul>
                    </div>
                </div>
                <Link to='/businesses' className="nav-item">
                    <div style={{ textDecoration: 'none', color: 'white' }}>Businesses</div>
                </Link>
                <Link to='/about' className="nav-item">
                    <div style={{ textDecoration: 'none', color: 'white' }}>About us</div>
                </Link>
                <Link to='/contact' className="nav-item">
                    <div style={{ textDecoration: 'none', color: 'white' }}>Contact Us</div>
                </Link>
            </div>
            <div className='search'>
                <input 
                    type="text" 
                    placeholder='Enter here' 
                />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Navbar;

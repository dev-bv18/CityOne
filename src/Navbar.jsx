import React, { useState } from 'react';
import './Navbar.css';
import logo1 from './logo1.svg';
import { Link, useNavigate } from 'react-router-dom';
import burger from './2line.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("education");
    const [menuVisible, setMenuVisible] = useState(false);
    const [servicesVisible, setServicesVisible] = useState(false);
    const [NavVisible, setNavVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleNav = () => {
        setNavVisible(!NavVisible);
    };

    const showServices = () => {
        setServicesVisible(true);
    };

    const hideServices = () => {
        setServicesVisible(false);
    };

    const handleSearch = () => {
        if (searchInput.trim()) {
            navigate(`/searchresults?query=${encodeURIComponent(searchInput)}`);
        }
    };

    return (
        <div className="nav">
            <div className="nav-logo" onClick={toggleMenu}>
                <img src={logo1} id="logo" alt="Logo" className={menuVisible ? 'rotate' : ''} />
                <p className='new-notif'>new!</p>
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
            <div className={`nav-items ${NavVisible ? 'show' : ''}`}>
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
                            <li>
                                <Link to='/education' style={{ textDecoration: 'none' }} onClick={() => setMenu("education")}>
                                    Education
                                </Link>
                                {menu === "education" ? <hr /> : null}
                            </li>
                            <li>
                                <Link to='/hospital' style={{ textDecoration: 'none' }} onClick={() => setMenu("hospital")}>
                                    Hospitals
                                </Link>
                                {menu === "hospital" ? <hr /> : null}
                            </li>
                            <li>
                                <Link to='/clinics' style={{ textDecoration: 'none' }} onClick={() => setMenu("clinics")}>
                                    Clinics
                                </Link>
                                {menu === "clinics" ? <hr /> : null}
                            </li>
                            <li>
                                <Link to='/police' style={{ textDecoration: 'none' }} onClick={() => setMenu("police")}>
                                    Police Station
                                </Link>
                                {menu === "police" ? <hr /> : null}
                            </li>
                            <li>
                                <Link to='/transport' style={{ textDecoration: 'none' }} onClick={() => setMenu("transport")}>
                                    Transportation
                                </Link>
                                {menu === "transport" ? <hr /> : null}
                            </li>
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
            <div className={`search ${NavVisible ? 'show' : ''}`}>
                <input 
                    type="text" 
                    placeholder='Enter here' 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="burger" onClick={toggleNav}><img src={burger} alt="icon" /></div>
        </div>
    );
};

export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';
import logo1 from './logo1.svg';
import { Link } from 'react-router-dom';
import burger from './2line.svg';

const Navbar = () => {
    const [menu,setMenu]=useState("education");
    const [menuVisible, setMenuVisible] = useState(false);
    const [servicesVisible, setServicesVisible] = useState(false);
    const [NavVisible, setNavVisible] = useState(false);

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
                            <li onClick={()=>{setMenu("education")}}>
                                <Link to='/education' style={{ textDecoration: 'none' }}>Education</Link>
                                {menu==="education"?<hr/>:<></>}
                            </li>
                            <li onClick={()=>{setMenu("hospital")}}>
                                <Link to='/hospital' style={{ textDecoration: 'none'}}>Hospitals</Link>
                                {menu==="hospital"?<hr/>:<></>}
                            </li>
                            <li onClick={()=>{setMenu("clinics")}}>
                                <Link to='/clinics' style={{ textDecoration: 'none' }}>Clinics</Link>
                                {menu==="clinics"?<hr/>:<></>}
                            </li>
                            <li onClick={()=>{setMenu("police")}}>
                                <Link to='/police' style={{ textDecoration: 'none'}}>Police Station</Link>
                                {menu==="police"?<hr/>:<></>}
                            </li>
                            <li onClick={()=>{setMenu("transport")}}>
                                <Link to='/transport' style={{ textDecoration: 'none'}}>Transportation</Link>
                                {menu==="tranport"?<hr/>:<></>}
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
                <input type="text" placeholder='Enter here' />
                <button>Search</button>
            </div>
            <div className="burger" onClick={toggleNav}><img src={burger} alt="icon" /></div>
        </div>
    );
};

export default Navbar;

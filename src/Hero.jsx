import React from 'react';
import './Hero.css';
import Notices from './Notices';
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Welcome to Rourkela</h2>
                <div className="hero-hand-icon">
                    <p>Steel City</p>
                    <p>.</p>
                <p>Green City</p>
                </div>
                <a href="#new">
                    <div className="hero-latest-btn">
                       Events
                    </div>
                </a>
            </div>
            <div className="hero-right">
                <Notices/>
            </div>
           
        </div>
    );
};

export default Hero;

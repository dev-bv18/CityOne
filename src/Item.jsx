import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    // Ensure that props.website is a properly formatted URL
    const websiteUrl = props.website.startsWith('http') ? props.website : `http://${props.website}`;

    return (
        <div className='service'>
            <Link to={`/service/${props.id}`}>
                <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
            </Link>
            <p >{props.name}</p>
            <div className="service-contact">
                <div className='service-phoneno'>
                    <a href="tel:+91">{props.phoneno}</a>
                </div>
                <div className="service-website">
                    <a 
                        href={websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={websiteUrl}
                    >
                        {props.website}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Item;

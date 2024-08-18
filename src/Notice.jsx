import React from 'react';
import './Notice.css';
import { Link } from 'react-router-dom';
import pin from './push-pin.png';

const Notice = (props) => {
    const desc = props.description.substring(0, 20);

    return (
        <div className='notice'>
            <Link to={`/notice/${props.id}`}>
                <h3>
                    <img src={pin} alt="" className='pin' />
                    {props.title} 
                    {props.isLatest && <span className='new-label'>New ! </span>}
                </h3>
                <p className='author'>by {props.author}</p>
                <p className='description'>{desc}....</p>
            </Link>
        </div>
    );
};

export default Notice;

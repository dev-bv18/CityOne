import React, { useEffect, useState } from 'react';
import Item from './Item';
import './NewCollections.css';

const NewCollections = () => {
    const [new_collection, setNew_Collection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollections')
            .then((response) => response.json())
            .then((data) => setNew_Collection(data))
            .catch((error) => console.error('Error fetching new collections:', error));
    }, []);

    return (
        <div id="new" className='new-collections'>
            <h1>NEW SERVICES</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => (
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        phoneno={item.phoneno} 
                        website={item.website} 
                    />
                ))}
            </div>
        </div>
    );
};

export default NewCollections;

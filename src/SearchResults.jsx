import React, { useContext } from 'react';
import { ServiceContext } from './ServiceContext';
import Item from './Item';
import Blank from './Blank';
import './ShopCategory.css';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const { allServices } = useContext(ServiceContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query');

  const filteredServices = allServices.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='service-category'>
      <div className="service-category-products">
        {filteredServices.length > 0 ? (
          filteredServices.map((item, i) => (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              phoneno={item.phoneno} 
              website={item.website} 
            />
          ))
        ) : (
          <Blank/>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

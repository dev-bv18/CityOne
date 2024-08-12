// ServiceCategory.js
import React, { useContext } from 'react';
import { ServiceContext } from './ServiceContext';
import Item from './Item';
import Blank from './Blank';
import './ShopCategory.css';

const ServiceCategory = (props) => {
  const { allServices } = useContext(ServiceContext);

  const filteredServices = allServices.filter(item => props.category === item.category);

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

export default ServiceCategory;

// ServiceContext.js
import React, { createContext, useEffect, useState } from 'react';

export const ServiceContext = createContext(null);

export const ServiceContextProvider = (props) => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allservices')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => setAllServices(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <ServiceContext.Provider value={{ allServices }}>
      {props.children}
    </ServiceContext.Provider>
  );
};
export default ServiceContextProvider;
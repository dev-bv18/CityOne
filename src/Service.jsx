import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Service.css';


const Service = () => {
  const { id } = useParams(); // Get the service ID from the URL
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`https://cityone-backend.onrender.com/service/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setService(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching service:', error);
        setError('Failed to load service');
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchService();
  }, [id]);

  return (
    <div className='service-body'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='main-serv'>
            <img src={service.image} className='service_image' alt="" />
              <div className='service-details'>
           <h1>{service.name}</h1>   
          <h6>({service.category})</h6>
          <p className='name'>site:- <a href={service.website}>{service.website}</a></p>
          <p className='description'>call us:- <a href="tel:+91">{service.phoneno}</a></p>
           </div>
           <p className="data">{service.description}</p>
       
        </div>
      
      )}
    </div>
  );
};

export default Service;

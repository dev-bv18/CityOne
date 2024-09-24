import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const { id } = useParams(); // Get the notice ID from the URL
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch(`https://cityone-backend.onrender.com/notice/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setNotice(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching notice:', error);
        setError('Failed to load notice');
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchNotice();
  }, [id]);

  return (
    <div className='product'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='product-details'>
          <h1>{notice.title}</h1>
          <p className='author'>by {notice.author}</p>
          <p className='description'>{notice.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;

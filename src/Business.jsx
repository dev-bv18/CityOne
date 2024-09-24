import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import './Places.css';
import noimage from './noimage.jpg';

const Business = () => {
  const [places, setBusiness] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // State for selected filter

  useEffect(() => {
    // Function to fetch places data
    const fetchBusiness = async () => {
      try {
        const response = await axios.get('https://cityone-backend.onrender.com/businesses'); // Replace with your server URL
        // Filter out parks and keep other tourist places
        const filteredBusiness = response.data.filter(place => place.types && !place.types.includes('businesses'));
        setBusiness(filteredBusiness);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch places. Please try again later.');
        setLoading(false);
      }
    };

    fetchBusiness();
  }, []);

  // Function to handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter places based on the selected filter option
  const filteredPlaces = places.filter((place) => {
    if (filter === 'all') return true;
    if (filter === 'food') return place.types.includes('restaurant') || place.types.includes('food');
    if (filter === 'shopping') return place.types.includes('shopping_mall') || place.types.includes('store');
    if (filter === 'hotel') return place.types.includes('lodging') || place.types.includes('hotel');
    return true;
  });

  if (loading) return <LoadingScreen />;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="places-container">
      <h1>Businesses in Rourkela</h1>
      <span className='result-count'>Showing {filteredPlaces.length} results</span>

      <select name="filter" id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="shopping">Shopping</option>
        <option value="hotel">Hotel & resorts</option>
      </select>

      {filteredPlaces.length > 0 ? (
        <ul className="places-list">
          {filteredPlaces.map((place) => (
            <li className="place-item" key={place.place_id}>
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${place.place_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="place-link"
              >
                <div className="place-content">
                  <div className="place-data">
                    <h2>{place.name}</h2>
                    <h3>{place.opening_hours ? "Open" : "Closed"}</h3>
                    <p>{place.vicinity}</p>
                    <img src={place.icon} className='place-icon' alt={`${place.name} icon`} />
                    <p className='ratings'>
                      {place.rating ? place.rating : 0}/5 ⭐<br />
                      {place.user_ratings_total ? place.user_ratings_total : 0} total ratings
                    </p>
                  </div>
                  <iframe
                    width="100%"
                    height="200px"
                    frameBorder="0"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA3ps5UVDbLWYSe3PSbFUeyhTdWBT6IywU&q=${place.name},Rourkela,Odisha,India&zoom=14`}
                    allowFullScreen
                    title={place.name}
                  />
                  {place.photos && place.photos.length > 0 ? (
                    <div className="photos-container">
                      {place.photos.map((photo) => (
                        <img
                          key={photo.photo_reference}
                          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyA3ps5UVDbLWYSe3PSbFUeyhTdWBT6IywU`}
                          alt={place.name}
                        />
                      ))}
                    </div>
                  ) : (
                    <img src={noimage} height={200} alt="No image available" />
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No places found.</p>
      )}
    </div>
  );
};

export default Business;

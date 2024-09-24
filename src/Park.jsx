import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Park.css'; // Import the CSS file
import LoadingScreen from './LoadingScreen';
import noimage from './noimage.jpg';

const Parks = () => {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch parks data
    const fetchParks = async () => {
      try {
        const response = await axios.get('https://cityone-backend.onrender.com/parks'); // Replace with your server URL
        // Filter out parks that are permanently closed
        const filteredParks = response.data.filter(park => !park.permanently_closed);
        setParks(filteredParks);
        console.log(filteredParks);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchParks();
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error fetching parks: {error}</p>;

  return (
    <div className="parks-container">
      <h1>Parks in Rourkela</h1>
      <span className='result-count'>Showing {parks.length} results</span>
      {parks.length > 0 ? (
        <ul className="parks-list">
          {parks.map((park) => (
            <a
              href={`https://www.google.com/maps/place/?q=place_id:${park.place_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="park-link"
              key={park.place_id}
            >
              <li className="park-item">
                <div className="park-content">
                  <div className="park-data">
                    <h2>{park.name}</h2><h3>{park.opening_hours?"open":"closed"}</h3>
                    <p>{park.vicinity}</p>
                    <img src={park.icon} className='park-icon' alt={`${park.name} icon`} /><p className='ratings'>{park.rating?park.rating:0}/5 ⭐ <br />{park.user_ratings_total?park.user_ratings_total:0} total ratings</p>
                  </div>
                  <iframe
                width="100%"
                height="200px"
                frameBorder="0"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA3ps5UVDbLWYSe3PSbFUeyhTdWBT6IywU&q=${park.name},Rourkela,Odisha,India&zoom=14`}
                allowFullScreen>
            </iframe>
                  {park.photos && park.photos.length > 0  ? (
                    <div className="photos-container">
                      {park.photos.map((photo) => (
                        <img
                          key={photo.photo_reference}
                          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyA3ps5UVDbLWYSe3PSbFUeyhTdWBT6IywU`}
                          alt={park.name}
                        />
                      ))}
                      
                    </div>
                    
                  ) : (
                   <img src={noimage} height={200}/>
                  )}
                </div>
              </li>
            </a>
          ))}
        </ul>
      ) : (
        <p>No parks found.</p>
      )}
    </div>
  );
};

export default Parks;

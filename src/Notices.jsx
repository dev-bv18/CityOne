import React, { useState, useEffect } from 'react';
import './Notices.css';
import Notice from './Notice';

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch('https://cityone-backend.onrender.com/allnotices')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        // Sort notices by date in descending order (latest notice first)
        const sortedNotices = data.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
        setNotices(sortedNotices); // Update state with sorted notices
      })
      .catch((error) => console.error('Error fetching notices:', error));
  }, []);

  return (
    <div className='board'>
      <h1>Notice Board</h1>
      <hr />
      <ul className="notice-collections">
        {notices.length > 0 ? (
          notices.map((item, index) => (
            <li key={item.id}>
              <Notice
                id={item.id}
                author={item.author}
                description={item.description}
                title={item.title}
                isLatest={index === 0} // Apply 'isLatest' to the first item in the sorted array
              />
            </li>
          ))
        ) : (
          <p className='nonotice'>No notices available</p>
        )}
      </ul>
    </div>
  );
};

export default Notices;

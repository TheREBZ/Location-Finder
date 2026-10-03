import React from 'react'
import "./style/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const App = () => {

  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchLocation = async () => {
          try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setLocation(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
        fetchLocation();
      },[]);
      
  return (
    <>
    <div className='header'>
        <h1>Location Finder</h1>
        <FontAwesomeIcon icon={faEarthAmericas} className='icon' />
    </div>
      <div className='overall-card-container'>
        <div className='card-content'>
          <h2 className='desc'>Find/Track your location anywhere in the world</h2>
          {!loading && location && (<h2 className='desc found'>Found You!</h2>)}
          {loading && (<h2 className='desc find'>Finding your location...</h2>)}
          {error && (<h2 className='desc error'>Error: {error}</h2>)}
          {location && <ol>
            <li>IP Address:<strong>{location.ip}</strong></li>
            <li>Country:<strong>{location.country}</strong></li>
            <li>City:<strong>{location.city}</strong></li>
            <li>ISP:<strong>{location.org}</strong></li>
          </ol>}
          <h2 className='foot'>Created by Rebz :)</h2>
        </div>
      </div>
    </>
  )
}

export default App
import React from 'react'
import "./style/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  fetch("GET https://ipapi.co/{format}/")
  .then (res => res.json())
  return (
    <>
    <div className='header'>
        <h1>Location Finder</h1>
        <FontAwesomeIcon icon={faEarthAmericas} className='icon' />
    </div>
      <div className='overall-card-container'>
        <div className='card-content'>
          <h2 className='desc'>Find/Track any Location anywhere in the world</h2>
          <ol>
            <li>IP Address: <strong>12345</strong></li>
            <li>Country: <strong></strong></li>
            <li>City: <strong></strong></li>
            <li>ISP: <strong></strong></li>
          </ol>
          <h2 className='foot'>Created by Rebz :)</h2>
        </div>
      </div>
    </>
  )
}

export default App
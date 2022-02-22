import React from 'react';
import PropTypes from 'prop-types'; 

import { memo } from 'react';

import '../styles/weatherDetails.css';

export const WeatherDetails = memo(({weatherInformation}) => {
    
  return (
        
        <section className="features__details">
            <div className="details__weather--container">
              <div className="weather__title--container">
                <h3 className="title__title--weather text-light">Weather details</h3>
              </div>
              <div className="weather__information--container">
                <ul className="information__list animate__animated animate__flash">
                <li className="list__information">Tem. °F</li>
                  <li className="list__information">Cloudy</li>
                  <li className="list__information">Humidity</li>
                  <li className="list__information">Wind</li>
                </ul>
                <ul className="information__list--value">
                <li className="list__information--value animate__animated animate__flash">{weatherInformation.loaded && weatherInformation.data.current.temp_f + " °F"}</li>
                  <li className="list__information--value animate__animated animate__flash">{weatherInformation.loaded && weatherInformation.data.current.cloud + "%"}</li>  
                  <li className="list__information--value animate__animated animate__flash">{weatherInformation.loaded && weatherInformation.data.current.humidity + "%"}</li>
                  <li className="list__information--value animate__animated animate__flash">{weatherInformation.loaded && weatherInformation.data.current.wind_kph + " Km/h"}</li>
                </ul>
              </div>
            </div>
          </section>

    )
    
})

WeatherDetails.propTypes = {  

  weatherInformatio: PropTypes.object

}
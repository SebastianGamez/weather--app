import React from 'react';
import PropTypes from 'prop-types'; 

import { memo } from 'react';

import '../styles/weatherShow.css';

export const WeatherShow = memo(({weatherInformation}) => {
    
    return (
        
        <section className="main__show">
          <div className="show__title--container">
             <h1 className="title__title--show text-white display-6 m-4 animate__animated animate__fadeInLeftBig">Weather App</h1> 
          </div>
          <div className="show__information--container">
              <div className="information__temperature--container">
                  <div className="temperature__title--conatiner">
                      <h2 className="title__title--temperature text-light">{weatherInformation.loaded && weatherInformation.data.current.temp_c+"°"}</h2>
                  </div>
              </div>
              <div className="information__city--container">
                  <div className="city__place--conatiner">
                      <h2 className="place__title text-light">{weatherInformation.loaded && weatherInformation.data.location.name}</h2>
                  </div>
                  <div className="city__date--conatiner">
                      <p className="date__title text-light">{weatherInformation.loaded && weatherInformation.data.location.localtime}</p>
                  </div>
              </div>
              <div className="information__draw--container animate__animated animate__bounce">
                  <div className="draw__image--container">
                      <img className="image__image--draw" alt="search" src={(weatherInformation.loaded)? weatherInformation.data.current.condition.icon : null}></img>
                  </div>
                  <div className="draw__description--container">
                      <p className="description__title--draw text-light">{weatherInformation.loaded && weatherInformation.data.current.condition.text}</p>
                  </div>
              </div>
          </div>
        </section>

    )
    
})

WeatherShow.propTypes = {

    weatherInformation: PropTypes.object

}
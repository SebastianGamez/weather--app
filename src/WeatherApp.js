import React from 'react';

import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

import { WeatherDetails } from './components/WeatherDetails';
import { WeatherSearch } from './components/WeatherSearch';
import { WeatherShow } from './components/WeatherShow';

import './styles/weatherApp.css';

export const WeatherApp = () => {

  const [selectWeather, setSelectWeather] = useState("london");
  const [weather, setWeather] = useState("london");
  const [weatherInformation, setWeatherInformation] = useState({loaded: false, data: null});
  const {data, loaded} = useFetch(weather, `https://api.weatherapi.com/v1/current.json?q=${weather}&key=e80f608e129b44688e434948211912`);
  
  useEffect(() => setWeatherInformation({loaded, data}), [data, loaded]);

  return (
  
    <>
    
        <WeatherShow weatherInformation={weatherInformation} />
        <section className="main__features">
          <WeatherSearch selectWeather={selectWeather} setSelectWeather={setSelectWeather} setWeather={setWeather} />
          <WeatherDetails weatherInformation={weatherInformation} />
        </section>

    </>

  );

}



import React from 'react';
import PropTypes from 'prop-types'; 

import { useState, useMemo, memo } from 'react';
import { useFetch } from '../hooks/useFetch';

import { handleOnclick, handleOnchange, handleSubmit } from '../helpers/handlers';
import { showList } from '../helpers/showList';

import '../styles/weatherSearch.css';

export const WeatherSearch = memo(({selectWeather, setSelectWeather, setWeather}) => {

    const {loaded, data} = useFetch(selectWeather, `https://api.weatherapi.com/v1/search.json?q=${selectWeather}&key=e80f608e129b44688e434948211912`);
    const memoShowList = useMemo( () => showList(loaded, data, handleOnclick, setWeather), [loaded, data, setWeather] );
    const [inputValue, setInputValue] = useState("");        
    
    return (
        
        <section className="features__search">
            <div className="search__form--container">
                <form className="form__form--search">
                    <div className="form__location--conatiner">
                        <input 
                          className="location__input"
                          placeholder="Another location"
                          value={ inputValue }
                          onChange={ e => handleOnchange(e, setInputValue, inputValue, setSelectWeather) }
                        />
                    </div>
                    <div className="form__submit--container">
                        <button className="submit__button--form" onClick={ e => handleSubmit(e, inputValue, setSelectWeather) }>
                            <span className="button__image--submit"></span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="search__results--container">
                    { memoShowList }
            </div>
          </section>

    )
    
});

WeatherSearch.propTypes = {

    selectWeather: PropTypes.string,
    setSelectWeather: PropTypes.func,
    setWeather: PropTypes.func

}

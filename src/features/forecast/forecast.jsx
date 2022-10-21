import React from 'react';
import { useState } from 'react';
import './forecast.css'
import { degreesToCompass } from '../../utilities/degreesToCompass';
import { kelvinToFarenheit } from '../../utilities/kalvinToF';
import { weatherApis } from '../../api/apiSlice';
import sun from '../../resources/images/sun.png'
import clouds from '../../resources/images/clouds-icon.png'
import thunderstorm from '../../resources/images/thunderstorm.png'
import rain from '../../resources/images/rain.png'
import smoke from '../../resources/images/smoke.png'
import snow from '../../resources/images/snow.png'
import drizzle from '../../resources/images/drizzle.png'

export default function Forecast() {

    const [cityName, setCityName] = useState({name:"Dallas"})
    const { data, error, isLoading, isSuccess } = weatherApis.endpoints.city.useQuery(cityName.name)

    // var ts = new Date(data?.dt);

    const successCallback = (position) => {
        console.log(position);
        };
      
    const errorCallback = (error) => {
        console.log(error);
        };
      
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    
    const handleChange = ({ target }) => {
        const {name, value} = target;
        setCityName((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(cityName);
        setCityName({ name: "" });
      };

    console.log(data);

    const weatherCondition = data?.weather[0].main;

    let iconImage

    console.log(weatherCondition);

    if (weatherCondition === 'Clear') {
        iconImage = sun    
    } else if (weatherCondition === 'Clouds') {
        iconImage = clouds
    } else if (weatherCondition === 'Thunderstorm') {
        iconImage = thunderstorm
    } else if (weatherCondition === 'Drizzle') {
        iconImage = drizzle
    } else if (weatherCondition === 'Rain') {
        iconImage = rain
    } else if (weatherCondition === 'Snow') {
        iconImage = snow
    } else {
        iconImage = smoke
    };
    
    if (isLoading) {
        return (
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        );
      }  

    
    
    return (
        <div className='forecast-container'>
            <div className='search-form-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='name'
                            placeholder='Enter Location'
                            value={cityName.name}
                        />
                    </div>
                </form>
            </div>
            <div className='main-container'>
                <div className='city-info-container'>
                    <h3>{data?.name}</h3>
                    <h1>{Math.floor(kelvinToFarenheit(data?.main.temp))}<span>&#176;</span></h1>
                    <h3>{data?.weather[0].main}</h3>
                    {/* {<article>{ts.toLocaleDateString()} {ts.toLocaleTimeString()}</article>} */}
                    <h3>Feels like {Math.floor(kelvinToFarenheit(data?.main.feels_like))}<span>&#176;</span></h3>
                </div>
                <div className='weather-conditions-icon-container'>  
                    <img src={iconImage} />
                </div>
            </div>
            <div className='forecast-details-container'>
                <div className='wind-info-container'>
                    <h3>Wind</h3>
                    <h3>{degreesToCompass(data?.wind.deg)} {Math.floor(data?.wind.speed)} mph</h3>
                </div>
                <div className='humidity-info-container'>
                    <h3>Humidity</h3>
                    <h3>{data?.main.humidity}%</h3>
                </div>
            </div>
        </div>
    )
}

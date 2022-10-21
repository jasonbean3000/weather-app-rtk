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
import rainPhoto from '../../resources/images/rainPhoto.png'
import cloudyPhoto from '../../resources/images/cloudyPhoto.webp'
import smokePhoto from '../../resources/images/smokePhoto.jpg'
import clearPhoto from '../../resources/images/clearPhoto.webp'
import thunderstormPhoto from '../../resources/images/thunderstormPhoto.jpeg'
import drizzlePhoto from '../../resources/images/drizzlePhoto.jpeg'
import snowPhoto from '../../resources/images/snowPhoto.jpeg'

export default function Forecast() {

    const [cityName, setCityName] = useState({name:"Dallas"})
    const { data, isLoading } = weatherApis.endpoints.city.useQuery(cityName.name)
    

    let d = new Date(data?.dt*1000);
    console.log(d)

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

    let photo

    console.log(weatherCondition);

    if (weatherCondition === 'Clear') {
        iconImage = sun   
        photo = clearPhoto 
    } else if (weatherCondition === 'Clouds') {
        iconImage = clouds
        photo = cloudyPhoto
    } else if (weatherCondition === 'Thunderstorm') {
        iconImage = thunderstorm
        photo = thunderstormPhoto
    } else if (weatherCondition === 'Drizzle') {
        iconImage = drizzle
        photo = drizzlePhoto
    } else if (weatherCondition === 'Rain') {
        iconImage = rain
        photo = rainPhoto
    } else if (weatherCondition === 'Snow') {
        iconImage = snow
        photo = snowPhoto
    } else {
        iconImage = smoke
        photo = smokePhoto
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
        <div 
            style={{backgroundImage: `url(${photo})`}}
            className='forecast-container'>
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
                <div className='primary-forecast-container'>
                    <div className='city-info-container'>
                        <h3>{data?.name}</h3>
                        <h1>{Math.floor(kelvinToFarenheit(data?.main.temp))}<span>&#176;</span></h1>
                        <h3>{data?.weather[0].main}</h3>
                        {/* {<article>{ts.toLocaleDateString()} {ts.toLocaleTimeString()}</article>} */}
                        <h3>Feels like {Math.floor(kelvinToFarenheit(data?.main.feels_like))}<span>&#176;</span></h3>
                    </div>
                    <div className='weather-conditions-icon-container'>  
                        <img alt='' src={iconImage} />
                    </div> 
                </div>
                <div className='forecast-details-container'>
                    <div className='wind-info-container'>
                        <h3><span className='details-header'>Wind</span></h3>
                        <h3><span className='details-info'>{degreesToCompass(data?.wind.deg)} {Math.floor(data?.wind.speed)} mph</span></h3>
                    </div>
                    <div className='humidity-info-container'>
                        <h3><span className='details-header'>Humidity</span></h3>
                        <h3><span className='details-info'>{data?.main.humidity} %</span></h3>
                    </div>
                    <div className='humidity-info-container'>
                        <h3><span className='details-header'>Pressure</span></h3>
                        <h3><span className='details-info'>{data?.main.pressure} </span></h3>
                    </div>
                </div>
            </div>
            
            <div className='photo-credits-container'>
                <article>Photo by James Wheeler from Pexels</article>
            </div>
        </div>
    )
}

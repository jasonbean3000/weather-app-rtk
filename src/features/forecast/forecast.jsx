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
import clearPhoto from '../../resources/images/sunny.jpg'
import thunderstormPhoto from '../../resources/images/thunderstormPhoto.jpeg'
import drizzlePhoto from '../../resources/images/drizzlePhoto.jpeg'
import snowPhoto from '../../resources/images/snowPhoto.jpeg'
import freezingRain from '../../resources/images/freezing-rain.jpg'
import freezingRainIcon from '../../resources/images/freezing-rain-icon.png'
import sleetIcon from '../../resources/images/sleet-icon.png'
import sleetPhoto from '../../resources/images/sleet-photo.jpg'
import tornadoIcon from '../../resources/images/tornado-icon.png'
import scatteredCloudsPhoto from '../../resources/images/scattered-clouds.jpg'
import partlyCloudyPhoto from '../../resources/images/partly-cloudy-photo.jpg'

export default function Forecast() {

    const [searchTerm, setSearchTerm] = useState('')
    const [cityName, setCityName] = useState({name:"Dallas"})
    const { data, isLoading } = weatherApis.endpoints.city.useQuery(cityName.name)
    
    let d = new Date(data?.dt*1000);
    console.log(d)

    // const successCallback = (position) => {
    //     console.log(position);
    //     };
      
    // const errorCallback = (error) => {
    //     console.log(error);
    //     };
      
    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    console.log(data);

    const weatherCondition = data?.weather[0].main;
    const weatherId = data?.weather[0].id;

    let iconImage;
    let photo;
    let photographer;
    let weatherDescription;

    console.log(weatherCondition);

    switch (weatherId) {
        case 200:
            weatherDescription = 'Thunderstorm with Light Rain'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 201:
            weatherDescription = 'Thunderstorm with Rain'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 202:
            weatherDescription = 'Thunderstorm with Heavy Rain'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 210:
            weatherDescription = 'Light Thunderstorm'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 211:
            weatherDescription = 'Thunderstorm'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 212:
            weatherDescription = 'Heavy Thunderstorm'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;    
        case 221:
            weatherDescription = 'Ragged Thunderstorm'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 230:
            weatherDescription = 'Thunderstorm with Light Drizzle'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 231:
            weatherDescription = 'Thunderstorm with Drizzle'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 232:
            weatherDescription = 'Thunderstorm with Heavy Drizzle'
            iconImage = thunderstorm
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 300:
            weatherDescription = 'Light Intensity Drizzle'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;
        case 301:
            weatherDescription = 'Drizzle'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;
        case 302:
            weatherDescription = 'Heavy Intensity Drizzle'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;
        case 310:
            weatherDescription = 'Light Intensity Drizzle Rain'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;
        case 311:
            weatherDescription = 'Drizzle Rain'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;
        case 312:
            weatherDescription = 'Heavy Intensity Drizzle Rain'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;    
        case 313:
            weatherDescription = 'Rain Shower and Drizzle'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;
        case 314:
            weatherDescription = 'Heavy Rain Shower and Drizzle'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;
        case 321:
            weatherDescription = 'Shower Drizzle'
            iconImage = drizzle
            photo = drizzlePhoto
            photographer = "Ayşenur Sağlam";
            break;
        case 500:
            weatherDescription = 'Light Rain'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 501:
            weatherDescription = 'Moderate Rain'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 502:
            weatherDescription = 'Heavy Intensity Rain'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 503:
            weatherDescription = 'Very Heavy Rain'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 504:
            weatherDescription = 'Extreme Rain'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 511:
            weatherDescription = 'Freezing Rain'
            iconImage = freezingRainIcon
            photo = freezingRain
            photographer = "Pixabay";
            break;    
        case 520:
            weatherDescription = 'Light Intensity Rain Shower'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 521:
            weatherDescription = 'Rain Shower'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 522:
            weatherDescription = 'Intense Rain Shower'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 531:
            weatherDescription = 'Ragged Rain Shower'
            iconImage = rain
            photo = rainPhoto
            photographer = "Mathias Reding";
            break;
        case 600:
            weatherDescription = 'Light Snow'
            iconImage = snow
            photo = snowPhoto
            photographer = "James Wheeler";
            break;
        case 601:
            weatherDescription = 'Snow'
            iconImage = snow
            photo = snowPhoto
            photographer = "James Wheeler";
            break;
        case 602:
            weatherDescription = 'Heavy Snow'
            iconImage = snow
            photo = snowPhoto
            photographer = "James Wheeler";
            break;
        case 611:
            weatherDescription = 'Sleet'
            iconImage = sleetIcon
            photo = sleetPhoto
            photographer = 'ArtHouse Studio';
            break; 
        case 612:
            weatherDescription = 'Light Sleet Shower'
            iconImage = sleetIcon
            photo = sleetPhoto
            photographer = 'ArtHouse Studio';
            break;
        case 613:
            weatherDescription = 'Sleet Shower'
            iconImage = sleetIcon
            photo = sleetPhoto
            photographer = 'ArtHouse Studio';
            break;
        case 615:
            weatherDescription = 'Light Rain and Snow'
            iconImage = sleetIcon
            photo = sleetPhoto
            photographer = 'ArtHouse Studio';
            break;    
        case 616:
            weatherDescription = 'Rain and Snow'
            iconImage = sleetIcon
            photo = sleetPhoto
            photographer = 'ArtHouse Studio';
            break;
        case 620:
            weatherDescription = 'Light Snow Shower'
            iconImage = snow
            photo = snowPhoto
            photographer = "James Wheeler";
            break;
        case 621:
            weatherDescription = 'Snow Shower'
            iconImage = snow
            photo = snowPhoto
            photographer = "James Wheeler";
            break;
        case 622:
            weatherDescription = 'Heavy Snow Shower'
            iconImage = snow
            photo = snowPhoto
            photographer = "James Wheeler";
            break;
        case 701:
            weatherDescription = 'Mist'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;
        case 711:
            weatherDescription = 'Smoke'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;
        case 721:
            weatherDescription = 'Haze'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;
        case 731:
            weatherDescription = 'Dust'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;
        case 741:
            weatherDescription = 'Fog'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;
        case 751:
            weatherDescription = 'Sand'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;    
        case 761:
            weatherDescription = 'Dust'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;
        case 762:
            weatherDescription = 'Volcanic Ash'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;
        case 771:
            weatherDescription = 'Squalls'
            iconImage = smoke
            photo = smokePhoto
            photographer = "Karol Wiśniewski";
            break;
        case 781:
            weatherDescription = 'Tornado'
            iconImage = tornadoIcon
            photo = thunderstormPhoto
            photographer = "Greg";
            break;
        case 801:
            weatherDescription = 'Few Clouds'
            iconImage = clouds
            photo = scatteredCloudsPhoto
            photographer = "Pixabay";
            break;
        case 802:
            weatherDescription = 'Scattered Clouds'
            iconImage = clouds
            photo = scatteredCloudsPhoto
            photographer = "Pixabay";
            break;
        case 803:
            weatherDescription = 'Partly Cloudy'
            iconImage = clouds
            photo = partlyCloudyPhoto
            photographer = "Pixabay";
            break;
        case 804:
            weatherDescription = 'Cloudy'
            iconImage = clouds
            photo = cloudyPhoto
            photographer = "Engin Akyurt";
            break;
        default:
            weatherDescription = 'Clear Skies'
            iconImage = sun;  
            photo = clearPhoto; 
            photographer = "Johannes Plenio";
    }

    // if (weatherId === 721) {
    //     weatherDescription = 'this weather condition yo'
    // } else {
    //     weatherDescription = 'its like this out'
    // }

    if (weatherCondition === 'Clear') {
        
    } else if (weatherCondition === 'Clouds') {
        
    } else if (weatherCondition === 'Thunderstorm') {
        
    } else if (weatherCondition === 'Drizzle') {
        
    } else if (weatherCondition === 'Rain') {
        
    } else if (weatherCondition === 'Snow') {
       
    } else {
        
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

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCityName({ name: searchTerm});
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
                        />
                    </div>
                    <button>Search</button>
                </form>
            </div>
            <div className='main-container'>
                <div className='primary-forecast-container'>
                    <div className='city-info-container'>
                        <h3>{data?.name}</h3>
                        <h1>{Math.floor(kelvinToFarenheit(data?.main.temp))}<span>&#176;</span></h1>
                        <h4>{weatherDescription}</h4>
                        {/* {<article>{ts.toLocaleDateString()} {ts.toLocaleTimeString()}</article>} */}
                        <h3>Feels Like {Math.floor(kelvinToFarenheit(data?.main.feels_like))}<span>&#176;</span></h3>
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
                <article>Photo by {photographer} from Pexels</article>
            </div>
        </div>
    )
}

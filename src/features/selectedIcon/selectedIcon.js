import React from "react";
import { useState } from "react";
import { weatherApis } from "../../api/apiSlice";
import sun from '../../resources/images/sun.png'

export default function IconImage() {

    const [cityName, setCityName] = useState({name:""})
    const { data, error, isLoading, isSuccess } = weatherApis.endpoints.city.useQuery(cityName.name)
    const weatherCondition = data?.weather[0].main;
    console.log(weatherCondition);
        if (weatherCondition === 'Clear') {
            return (
                <div>
                    <img src={sun}></img>
                </div>    
            )
        }
}
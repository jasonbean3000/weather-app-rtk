import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiKey = '5a4be461c4e57254e95d78422009a8e5';


// Define a service using a base URL and expected endpoints
export const mapApi = createApi({
  reducerPath: 'mapApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://' }),
  endpoints: (builder) => ({
    map: builder.query({
        query:(lat, long) => `tile.openweathermap.org/map/precipitation/5/${lat}/${long}.png?appid=${apiKey}`
    }),
  }),
})

export const weatherApis = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://' }),
    endpoints: (builder) => ({
        
        city: builder.query({
            query:(name) => `api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCityByName } = weatherApis;









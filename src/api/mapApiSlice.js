// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const apiKey = '5a4be461c4e57254e95d78422009a8e5';


// export const mapApi = createApi({
//     reducerPath: 'mapApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://tile.openweathermap.org/map/' }),
//     endpoints: (builder) => ({
//         getMap: builder.query({
//             query: (lat, long) => `precipitation_new/5/${lat}/${long}.png?appid=${apiKey}`,
//         })
//     })
// })

// export const { useGetMap } = mapApi;
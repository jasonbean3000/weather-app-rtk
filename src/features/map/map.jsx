import React from "react";
import { mapApi, weatherApis } from "../../api/apiSlice";

export default function Map() {

    const { data, error, isLoading, isSuccess } = mapApi.endpoints.map.useQuery('32.7668', '-96.7836')
    

    return (
        <div>
         {data}
        </div>
    )
}
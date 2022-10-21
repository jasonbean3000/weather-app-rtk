import React from "react";
import { mapApi } from "../../api/apiSlice";

export default function Map() {

    const { data } = mapApi.endpoints.map.useQuery('32.7668', '-96.7836')
    

    return (
        <div>
         {data}
        </div>
    )
}
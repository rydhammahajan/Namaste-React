import {createContext } from "react"; 

const LocationContext = createContext({
    loc :{ 
        lat: 1 , 
        long : 1 
    }
}) ; 

export default LocationContext ;  
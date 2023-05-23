import {createContext } from "react"; 

const LocationContext = createContext({
    location : {
        locationName : ""  ,  
    },
    locationCoords :{ 
        lat:28.5047063, 
        long : 77.0500089 
    }, 
    locationModal : {
        display : true 
    }
}) ; 

export default LocationContext ;  

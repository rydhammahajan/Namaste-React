import {useParams} from "react-router-dom" 

const RestaurantMenu =  () => {
    console.log(useParams() ) ;
    const {resId} = {...useParams()} ; 
    console.log(resId) ;  
}

export default RestaurantMenu ; 
import { useState , useEffect } from "react";
const useRestaurantMenu = (resId) => {

    const [restaurantData , setRestaurantData] = useState(null) ;
    const [recommendedList , setRecommendedList] = useState(null) ;
    const [specialComboList , setSpecialComboList] = useState(null) ; 
     
    useEffect(()=>{
        fetchRestaurantMenu() ; 
    } , [])

    async function fetchRestaurantMenu() {
        const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5047063&lng=77.0500089&restaurantId=${resId}&submitAction=ENTER`) ;
        const json_data  = await data.json() ; 
        setRestaurantData(json_data.data) ; 
        setRecommendedList(json_data.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) ; 
        setSpecialComboList(json_data.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }
    
    return {restaurantData , recommendedList , specialComboList} ; 

}
export default useRestaurantMenu ; 
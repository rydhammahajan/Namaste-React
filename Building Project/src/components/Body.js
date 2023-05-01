import { useState , useEffect} from "react";
import { restaurantList , IMG_CLOUD_LINK } from "../config";
import Shimmer from "./Shimmer";

const RestaurantList = ({name , cuisines , cloudinaryImageId}) => {
    
    return (

        <div className="d-flex flex-column restaurant-card p-4 gap-3 border">

            <img src = {IMG_CLOUD_LINK + cloudinaryImageId} className = "border rounded-1 border-0"></img>
            <div>
                <div className="fs-5 h3">{name}</div> 
                <div className="fs-6">{cuisines.join(", ")}</div> 
            </div>            
        </div>
        
    )
    
}

function performSearch(inputText , restaurants) {
    return restaurants.filter((item) => {
        return    item.data.data.name.includes(inputText) ; 
    })        
}


const Body = () => {

    const [inputText , setInputText] = useState("") ;
    let [allRestaurants , setAllRestaurants] = useState([]) ;
    let [filteredRestaurants , setFilteredRestaurants] = useState([]) ;


    useEffect(()=> {
        fetchAPIData() ;  
    } , []) ; 

    async function fetchAPIData(){
        const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5047063&lng=77.0500089&offset=31&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING") ; 

        const json = await data.json();
        setAllRestaurants(json.data.cards);
        setFilteredRestaurants(json.data.cards)
    }

    return (

        <div className="body p-5">

            <div className="search-box d-flex justify-content-center p-5">
                <input 
                type = "text" 
                placeholder="Enter something to search ...." 
                value = {inputText }
                className="p-2 border rounded-1" 
                onChange = { (e) => {
                    setInputText(e.target.value)
                }}
                >
                </input>
                <button className=" p-2 border rounded-1" 
                onClick={() => {
                    setFilteredRestaurants(performSearch(inputText , allRestaurants)) ;
                }}>
                Search</button>
            </div>

                
            <div className = "d-flex justify-content-center">

                
                {(allRestaurants.length !== 0)?

                    <div className="d-flex flex-wrap gap-4 justify-content-evenly">
                            {filteredRestaurants.map((restaurantListItem) => (
                                <RestaurantList {...restaurantListItem.data.data} />
                            ))} 
                    </div>  : (<Shimmer/>)}
                
            </div>

        </div>
    )
}

export default Body ; 
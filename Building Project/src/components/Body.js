import { useState } from "react";
import { restaurantList , IMG_CLOUD_LINK } from "../config";
 
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

function performSearch(inputText , tempRestaurantList) {

    tempRestaurantList = tempRestaurantList.filter((item) => {
        return item.data.data.name.includes(inputText) ; 
    })
    return tempRestaurantList ;

}


const Body = () => {

    const [inputText , setInputText] = useState("") ;
    let [tempRestaurantList , setTempRestaurantList] = useState(restaurantList) ;
    let length = tempRestaurantList.length ; 

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
                    tempRestaurantList = restaurantList ;
                    tempRestaurantList = performSearch(inputText , tempRestaurantList) ;
                    setTempRestaurantList(tempRestaurantList) ;
                }}>
                Search</button>
            </div>

                

                <div className = "d-flex justify-content-center">

                {
                    length === 0 ? (
                    <h6>Oops! No match found for "{inputText}".</h6>
                    ) : (
                    <div className="d-flex flex-wrap gap-4 justify-content-evenly">
                        {tempRestaurantList.map((restaurantListItem) => (
                            <RestaurantList {...restaurantListItem.data.data} />
                        ))}
                    </div>
                    )
                }

                </div>

        </div>
    )
}

export default Body ; 
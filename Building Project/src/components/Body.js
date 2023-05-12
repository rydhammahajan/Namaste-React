import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link, useParams } from "react-router-dom";



function performSearch(inputText , restaurants) {
    if(inputText === "") return restaurants ;
    return restaurants.filter((item) => {
        return    item.data.data.name.toLowerCase().includes(inputText.toLowerCase()) ; 
    })        
}


const Body = () => {
 
    const [inputText , setInputText] = useState("") ;
    let [allRestaurants , setAllRestaurants] = useState([]) ;
    let [filteredRestaurants , setFilteredRestaurants] = useState([]) ;
    let [sortAnswer , setSortAnswer] = useState(useParams().sortBy);


    useEffect(()=> {
        fetchAPIData() ;  
    } , [sortAnswer]) ; 

    async function fetchAPIData(){
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5047063&lng=77.0500089&sortBy=${sortAnswer ? sortAnswer : "RELEVANCE"}&offset=10&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`) ; 

        const json = await data.json();
        setAllRestaurants(json.data.cards);
        setFilteredRestaurants(json.data.cards)
    }
    
    return (<div className="body p-5 d-flex flex-column justify-content-center">

            {

                allRestaurants.length === 0 ? (<Shimmer/>) :

            (
                <>
                
                <div className="filter-section border-bottom  d-flex justify-content-between p-3 ">
                    
                    <h1>Restaurants</h1>
                    <div className="d-flex justify-content-end pt-3 gap-5">

                        <Link to = '/search/RELEVANCE' className="text-dark" key = "relevance" onClick = {()=>{
                            setSortAnswer("RELEVANCE")
                        }}><span className = {sortAnswer === "RELEVANCE" ? "border-bottom border-dark" : undefined}  >Relevance</span></Link>

                        <Link to = '/search/DELIVERY_TIME'  className="text-dark" key = "delivery" onClick = {()=>{
                            setSortAnswer("DELIVERY_TIME")
                        }}><span className = {sortAnswer === "DELIVERY_TIME" ? "border-bottom border-dark" : undefined}>Delivery Time</span></Link>

                        <Link to = '/search/RATING'  className="text-dark" key = "rating" onClick = {()=>{
                            setSortAnswer("RATING")
                        }}><span className = {sortAnswer === "RATING" ?"border-bottom border-dark" : undefined}>Rating</span></Link>

                        <Link to = '/search/COST_FOR_TWO'  className="text-dark" key = "lowCost" onClick = {()=>{
                            setSortAnswer("COST_FOR_TWO");
                        }}><span className = {sortAnswer === "COST_FOR_TWO" ? "border-bottom border-dark" : undefined}>Cost: Low To High</span></Link>

                        <Link to = '/search/COST_FOR_TWO_H2L' className="text-dark"  key = "highCost" onClick = {()=>{
                            setSortAnswer("COST_FOR_TWO_H2L")
                        }}><span className = {sortAnswer === "COST_FOR_TWO_H2L" ? "border-bottom border-dark" : undefined}>Cost: High To Low</span></Link>

                        <Link to = "/search"  onClick={()=>{
                            setSortAnswer("");
                        }}><span className="text-color"><i className="fa-solid fa-filter" ></i>Clear Filters</span></Link>

                    </div>

                </div>

                <div className="search-box d-flex justify-content-center p-5">
                    <input 
                    type = "text" 
                    placeholder="Enter something to search ...." 
                    value = {inputText }
                    className="p-2 border rounded-1" 
                    onChange = { (e) => {
                        setInputText(e.target.value)
                    }}
                    onKeyUp={(e) => {

                        e.code === "Enter" && setFilteredRestaurants(performSearch(inputText , allRestaurants)) ;
                    }}
                    >
                    </input>
                    <button className=" p-2 border rounded-1" 
                    onClick={() => {
                        setFilteredRestaurants(performSearch(inputText , allRestaurants)) ;
                    }}>
                    Search</button>
                </div>

                <div className = "d-flex justify-content-center p-5">

                    {
                        filteredRestaurants.length === 0 ? <h1>Oops! No Search Result.</h1> :

                        <div className="d-flex flex-wrap gap-5 justify-content-evenly">
                                {filteredRestaurants.map((restaurantListItem) => (
                                    <RestaurantCard {...restaurantListItem.data.data} />
                                ))} 
                        </div>
                    }
                
                </div>
            </>

            )}

        </div>)
}

export default Body ; 

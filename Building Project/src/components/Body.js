import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";



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
    let [sortAnswer , setSortAnswer] = useState("RELEVANCE");
    let [filterHighlight , setFilterHighLight] = useState("");
    


    useEffect(()=> {
        fetchAPIData() ;  
    } , [sortAnswer]) ; 

    async function fetchAPIData(){
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5047063&lng=77.0500089&sortBy=${sortAnswer ? sortAnswer : "RELEVANCE"}&offset=1&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`) ; 

        const json = await data.json();
        setAllRestaurants(json.data.cards);
        setFilteredRestaurants(json.data.cards)
    }
    
    return (<div className="body p-5 d-flex flex-column justify-content-center">

            {

                allRestaurants.length === 0 ? (<Shimmer/>) :

            (
                <>
    
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
                
                <div className="filter-section border-bottom  d-flex justify-content-between p-3 ">
                    
                    <h1>Restaurants</h1>
                    <div className="d-flex justify-content-end pt-3 gap-5">
                        <Link to = '/search/RELEVANCE' className="text-dark" onClick = {()=>{
                            setAllRestaurants([])
                            setSortAnswer("DELIVERY_TIME")
                            setFilterHighLight("relevance") ; 
                        }}><span className = {filterHighlight === "relevance" && "border-bottom border-dark"}  >Relevance</span></Link>
                        <Link to = '/search/DELIVERY_TIME'  className="text-dark" onClick = {()=>{
                            setAllRestaurants([])
                            setSortAnswer("delivery")
                            setFilterHighLight("delivery") ; 
                        }}><span className = {filterHighlight === "delivery" && "border-bottom border-dark"}>Delivery Time</span></Link>
                        <Link to = '/search/RATING'  className="text-dark" onClick = {()=>{
                            setAllRestaurants([])
                            setSortAnswer("RATING")
                            setFilterHighLight("rating") ; 
                        }}><span className = {filterHighlight === "rating" && "border-bottom border-dark"}>Rating</span></Link>
                        <Link to = '/search/COST_FOR_TWO'  className="text-dark" onClick = {()=>{
                            setAllRestaurants([])
                            setSortAnswer("COST_FOR_TWO");
                            setFilterHighLight("lowCost") ; 
                        }}><span className = {filterHighlight === "lowCost" && "border-bottom border-dark"}>Cost: Low To High</span></Link>
                        <Link to = '/search/COST_FOR_TWO_H2L' className="text-dark"  onClick = {()=>{
                            setAllRestaurants([])
                            setSortAnswer("COST_FOR_TWO_H2L")
                            setFilterHighLight("highCost") ; 
                        }}><span className = {filterHighlight === "highCost" && "border-bottom border-dark"}>Cost: High To Low</span></Link>
                        <Link to = "/search" onClick={()=>{
                            setSortAnswer("RELEVANCE");
                            setFilterHighLight("") ; 
                            setAllRestaurants([]) ;

                        }}><span className="text-color"><i class="fa-solid fa-filter" ></i>Clear Filters</span></Link>
                    </div>

                </div>

                <div className = "d-flex justify-content-center p-5">

                    {
                        filteredRestaurants.length === 0 ? <h1>Oops! No Search Result.</h1> :

                        <div className="d-flex flex-wrap gap-4 justify-content-evenly">
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

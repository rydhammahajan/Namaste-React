import { useEffect, useState } from "react";
import {useParams} from "react-router-dom" 
import { IMG_CLOUD_LINK } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu =  () => {

    const {resId} = useParams(); 
    let[restaurantData , setRestaurantData] = useState(null) ; 
    let [recommendedList , setRecommendedList] = useState([]) ;
    let [specialComboList , setSpecialComboList] = useState([]) ; 


    
    useEffect(()=>{
        fetchRestaurantMenu() ; 
    } , [])

    async function fetchRestaurantMenu() {
        const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5047063&lng=77.0500089&restaurantId=${resId}&submitAction=ENTER`) ;
        const json_data  = await data.json() ; 
        setRestaurantData(json_data.data) ; 
        setRecommendedList(json_data.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) ; 
        setSpecialComboList(json_data.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)

        console.log(json_data.data)
        console.log(json_data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) ; 
        // console.log(json_data.data) ; 
    }

    function RecommendedList(item){

        return (
            <div className="d-flex py-3 px-5 justify-content-between border">

                <div className="d-flex flex-column justify-content-center gap-1">

                {(item?.isVeg !== 1)? (<img src="https://img.icons8.com/color/48/null/non-vegetarian-food-symbol.png" height={"30px"} width={"30px"}/ >) : (<img src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png" height={"30px"} width={"30px"}/>
                )}

                    <span className="h1 fs-5">{item?.name}</span>

                    <span className="text-secondary">Rs. {item?.price /100}</span>

                    <span className="text-secondary">{item?.description}
                    </span>

                </div>
                <img src = {IMG_CLOUD_LINK+ item?.imageId
                } height={"100px"}/>
            </div>
        )
    }

    function SpecialComboList(item){
        console.log(item) ; 
        return (
            <div className="d-flex py-3 px-5 justify-content-between border">

                <div className="d-flex flex-column justify-content-center gap-1">

                {(item?.isVeg !== 1)? (<img src="https://img.icons8.com/color/48/null/non-vegetarian-food-symbol.png" height={"30px"} width={"30px"}/ >) : (<img src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png" height={"30px"} width={"30px"}/>
                )}

                    <span className="h1 fs-5">{item?.name}</span>

                    <span className="text-secondary">Rs. {item?.price /100}</span>

                    <span className="text-secondary">{item?.description}
                    </span>

                </div>

            </div>
        )

    }

  
    return (restaurantData === null ) ? (
        <Shimmer/>
    ) : (

       

        <div className="m-5 p-5 border border-success ">

            <div className="d-flex p-3 justify-content-between border">

                <div className="d-flex flex-column justify-content-center gap-1">
                    <span className="h1 fs-3">{restaurantData?.cards[0]?.card?.card?.info?.name}</span>

                    <span className="text-secondary">{restaurantData?.cards[0]?.card?.card?.info?.areaName}, {restaurantData?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString
                    }</span>

                    <span className="text-secondary">{restaurantData?.cards[0]?.card?.card?.info?.cuisines?.join(", ")
                    }</span>

                    <span className="bg-success p-1 " style={{width : "55px"}}>
                    <span className="text-white h1 fs-6">{restaurantData?.cards[0]?.card?.card?.info?.avgRatingString} </span>
                    <i className="fa-solid fa-star text-white"></i>
                    </span>

                </div>
                <img src = {IMG_CLOUD_LINK+ restaurantData?.cards[0]?.card?.card?.info?.cloudinaryImageId
                } />
            </div>

            <div className="d-flex gap-5 fs-3 p-3 menu-header-detail border">
                    <span>
                        <i class="fa-solid fa-clock"></i>
                        <span className="h1 fs-3"> {restaurantData?.cards[0]?.card?.card?.info?.sla?.slaString}</span>
                    </span>

                    <span>
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        <span className="h1 fs-3"> {restaurantData?.cards[0]?.card?.card?.info?.costForTwoMessage.slice(1)}</span>
                    </span>
            </div>

            <div className="d-flex flex-column p-3 m-5 border gap-5">
                
                <span className="h1 fs-5">Recommended ({recommendedList?.length})</span>
                <div>
                {   
                    
                    recommendedList.map((item)=>{
                      return RecommendedList(item?.card?.info) ;   
                    })
                }
                </div>

                {(specialComboList === undefined || specialComboList.length === 0 )? 
                (<></>) :

                (<>
                    <span className="h1 fs-5">Special Combos ({specialComboList?.length})</span>
                    <div>
                    {
                        specialComboList.map((item)=>{
                        return SpecialComboList(item?.card?.info) ;   
                        })
                    }
                    </div>
                </>)
                }

            </div>

        </div>


    )
}

export default RestaurantMenu ; 
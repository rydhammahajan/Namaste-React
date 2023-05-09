import {useParams} from "react-router-dom" 
import { IMG_CLOUD_LINK } from "../config";
import Shimmer from "./Shimmer";
import RecommendedList from "./RecommendedList";
import SpecialComboList from "./SpecialComboList";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu =  () => {

    const {resId} = useParams(); 
    const {restaurantData , recommendedList , specialComboList} = useRestaurantMenu(resId) ; 
    const {name , areaName , sla , cuisines , avgRatingString , cloudinaryImageId , costForTwoMessage} = restaurantData?.cards[0]?.card?.card?.info || {} ;
        
    return !restaurantData ? (<Shimmer/>) : 
    (
        <div className="m-5 p-5 border border-success ">

            <div className="d-flex p-3 justify-content-between border">

                <div className="d-flex flex-column justify-content-center gap-1">
                    <span className="h1 fs-3">{name}</span>

                    <span className="text-secondary">{areaName}, {sla?.lastMileTravelString}</span>

                    <span className="text-secondary">{cuisines?.join(", ")
                    }</span>

                    <span className="bg-success p-1 " style={{width : "55px"}}>
                    <span className="text-white h1 fs-6">{avgRatingString} </span>
                    <i className="fa-solid fa-star text-white"></i>
                    </span>

                </div>
                <img src = {IMG_CLOUD_LINK+ cloudinaryImageId} />
            </div>

            <div className="d-flex gap-5 fs-3 p-3 menu-header-detail border">
                    <span>
                        <i class="fa-solid fa-clock"></i>
                        <span className="h1 fs-3"> {sla?.slaString}</span>
                    </span>

                    <span>
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        <span className="h1 fs-3"> {costForTwoMessage.slice(1)}</span>
                    </span>
            </div>

            <div className="d-flex flex-column p-3 m-5 border gap-5">
                
                <span className="h1 fs-5">Recommended ({recommendedList?.length})</span>
                <div>
                {   
                    !recommendedList ? (<></>) :
                    recommendedList.map((item) => {
                        return (<RecommendedList item={item?.card?.info} />)})
                }
                </div>

                {!specialComboList ? (<></>) :
                    
                    (<>
                    <span className="h1 fs-5">Special Combos ({specialComboList?.length})</span>
                    <div>
                    {
                        specialComboList.map((item)=>{
                        return (<SpecialComboList item={item?.card?.info} />)})
                    }
                    </div>
                    </>)
                }

            </div>

        </div>


    )
}

export default RestaurantMenu ; 

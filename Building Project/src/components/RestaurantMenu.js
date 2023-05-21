import {useParams} from "react-router-dom" 
import { useContext , useEffect } from "react";
import { IMG_CLOUD_LINK } from "../config";
import Shimmer from "./Shimmer";
import RecommendedList from "./RecommendedList";
import SpecialComboList from "./SpecialComboList";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import LocationContext from "../utils/LocationContext";
import Location from "./Location";
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "../utils/useIsAuthenticated"
import HeaderContext from "../utils/HeaderContext";

const RestaurantMenu =  () => {

    const {resId} = useParams(); 
    const {restaurantData , recommendedList , specialComboList} = useRestaurantMenu(resId) ; 
    const {name , areaName , sla , cuisines , avgRatingString , cloudinaryImageId , costForTwoMessage} = restaurantData?.cards?.[0]?.card?.card?.info || {} ;
    const {locationModal} = useContext(LocationContext);
    const {isAuthenticated} = useIsAuthenticated();
    const navigate = useNavigate() ;
    const {setPage} = useContext(HeaderContext) ;
    
    useEffect(()=>{
        setPage({
            currentPage : "restaurants" ,
        })
    }, [])

    useEffect(()=>{
        if(isAuthenticated === false){
            navigate("/login")
        }
        } , [isAuthenticated])
    return !restaurantData ? (<Shimmer/>) : 
    (
        <div className="p-5 d-flex flex-column gap-5 align-items-center">
            {locationModal.display && <Location/>}
            <div className="d-flex p-3 justify-content-between  restaurant-menu-header">

                <div className="d-flex flex-column justify-content-center gap-1 ">
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

            <div className="d-flex gap-5 fs-3 p-3 menu-header-detail  restaurant-menu-price justify-content-around ">
                    <span>
                        <i className="fa-solid fa-clock"></i>
                        <span className="h1 fs-3"> {sla?.slaString}</span>
                    </span>

                    <span>
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                        <span className="h1 fs-3"> {costForTwoMessage.slice(1)}</span>
                    </span>
            </div>

            <div className="d-flex flex-column p-3  align-items-center">
                
                {   
                    recommendedList &&
                    (<>
                        <span className="h1 fs-3">Recommended ({recommendedList?.length})</span>
                        <div className="d-flex flex-column  align-items-center" >
                        {   
                            recommendedList.map((item) => {
                            return <RecommendedList item={item?.card?.info} />})
                        }
                        </div>
                        </>
                    )
                }

                {     specialComboList &&
                    
                    (<>
                    <span className="h1 fs-3">Special Combos ({specialComboList?.length})</span>
                    <div className="d-flex flex-column  align-items-center">
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

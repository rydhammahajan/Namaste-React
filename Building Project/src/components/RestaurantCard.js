import { Link } from "react-router-dom"
import {IMG_CLOUD_LINK } from "../config.js";

const RestaurantCard= ({name , cuisines , cloudinaryImageId , id , avgRating
    , deliveryTime, costForTwo , aggregatedDiscountInfo
}) => {
        return (

        <Link to = {"/restaurant/"+id}><div className="d-flex flex-column restaurant-card p-3  text-secondary">

            <img src = {IMG_CLOUD_LINK + cloudinaryImageId}  alt = {name} height={"180px"} width={"260px"}></img>
            <div className="pt-2">
                <div className="h5 text-dark">{name}</div> 
                <div className="text-secondary text-truncate " style={{fontSize :"14px" , width : "250px"}}>{cuisines?.join(", ")}</div> 
            </div>  
            <div className="d-flex justify-content-between text-secondary pt-2" style={{"fontSize" : "14px"}}>
            <div className="text-light bg-success py-1 px-2">
                <i class="fa-solid fa-star"></i>
                <span> {avgRating}</span>
            </div>
            <i class="fa-solid fa-circle pt-2" style={{"fontSize" : "4px"}}></i>
            <span>{deliveryTime} MINS</span>
            <i class="fa-solid fa-circle pt-2" style={{"fontSize" : "4px"}}></i>
            <span>{costForTwo/100} FOR TWO</span>
            </div>   
            {aggregatedDiscountInfo?.descriptionList[0]?.meta && 
                <>
            <hr/>   
            <div className="brown-text fs-6"> <i class="fa-solid fa-tags"></i> {aggregatedDiscountInfo?.descriptionList[0]?.meta}</div></>  }
            <div className="quick-menu">
            <hr/>
            <div className="h6 brown-text  text-center">Quick Menu</div>  
            </div>
        </div></Link>
        
    )
    
}

export default RestaurantCard ; 
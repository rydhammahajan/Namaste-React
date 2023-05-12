import { Link } from "react-router-dom"
import {IMG_CLOUD_LINK } from "../config.js";
import QuickMenu from "./QuickMenu.js";

const RestaurantCard= ({name , cuisines , cloudinaryImageId , id , avgRating
    , deliveryTime, costForTwo , aggregatedDiscountInfo
}) => {

        return (

        <Link to = {"/restaurant/"+id }>
        <div className="d-flex flex-column restaurant-card p-3  text-secondary position-relative" key = {id} >

            <img src = {cloudinaryImageId !== ""? IMG_CLOUD_LINK + cloudinaryImageId : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPVk2P2G9HzLbp-t_E-iaSJ9awZ65hdqSWNx_KF1cMWYLXyZQO9YorVUMChw77s8f-2M&usqp=CAU"}  alt = {name} height={"180px"} width={"260px"}></img>
            <div className="pt-2">
                <div className="h5 text-dark">{name}</div> 
                <div className="text-secondary text-truncate " style={{fontSize :"14px" , width : "250px"}}>{cuisines?.join(", ")}</div> 
            </div>  
            <div className="d-flex justify-content-between text-secondary pt-2" style={{"fontSize" : "14px"}}>
            <div className="text-light bg-success py-1 px-2">
                <i className="fa-solid fa-star"></i>
                <span> {avgRating}</span>
            </div>
            <i className="fa-solid fa-circle pt-2" style={{"fontSize" : "4px"}}></i>
            <span>{deliveryTime} MINS</span>
            <i className="fa-solid fa-circle pt-2" style={{"fontSize" : "4px"}}></i>
            <span>{costForTwo/100} FOR TWO</span>
            </div>   
            {aggregatedDiscountInfo?.descriptionList[0]?.meta && 
          
            <div className="brown-text fs-6"><hr className="text-secondary"/><i className="fa-solid fa-tags"></i> {aggregatedDiscountInfo?.descriptionList[0]?.meta}</div>}


            <div className="quick-menu-section ">
                <div className="h6 brown-text  text-center quick-menu-text">
                    <hr className="text-secondary"/>
                    Quick Menu
                </div>  
                <QuickMenu id = {id}/>

            </div>

        </div></Link>
        
    )
    
}

export default RestaurantCard ; 
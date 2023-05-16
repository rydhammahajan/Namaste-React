import { useEffect } from "react";

const Carousel = ()=> {

    useEffect(()=>{

        let dom_caraousel = document.querySelector(".carousel") ; 
        let id = setInterval(()=>{
            const elements = document.querySelectorAll(".carousel-group") ;
            dom_caraousel.removeChild(elements[0]) ;
            dom_caraousel.appendChild(elements[0]) ;
        }  , 2500)

        return () => {
            clearInterval(id);
        };
    } , [])
    return (
    
        <div className="carousel d-flex position-relative gap-2 overflow-hidden pb-5">

        <div className="carousel-group  one d-flex gap-2 justify-content-center" style={{height : "400px"}}>
            <img src = {require("../assets/food2-carousel.jpg") }width={"440px"}/>
            <img src = {require("../assets/food-carousel.jpg")}/>
            <img src = {require("../assets/food3-carousel.jpg")}  height = {"400px"} width={"440px"}/>
        </div>

        <div className="carousel-group two d-flex gap-2 justify-content-center " style={{height : "400px"}}>
            <img src = {require("../assets/food4-carousel.jpg")} height = {"400px"} width={"720px"}/>
            <img src = {require("../assets/food7-carousel.jpg")}  width={"720px"} / >
        </div>

        <div className="carousel-group three d-flex gap-2 justify-content-center" style={{height : "400px"}}>
            <img src = {require("../assets/food6-carousel.jpg")}/>
            <img src = {require("../assets/food5-carousel.jpg")}/>
        </div>

        </div>
    )
}

export default Carousel ; 
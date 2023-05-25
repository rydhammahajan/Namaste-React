import { useContext, useEffect, useState} from "react"
import {Link} from "react-router-dom" 
import Logo from "../assets/Logo.png"
import LocationContext from "../utils/LocationContext"
import useIsAuthenticated from "../utils/useIsAuthenticated"
import LogIn from "./LogIn"
import HeaderContext from "../utils/HeaderContext"
const Header = () => {

    const {location  , setLocationModal } = useContext(LocationContext) ;
    const {isAuthenticated} = useIsAuthenticated() ; 
    const {logout} = useIsAuthenticated() ;
    const {page } = useContext(HeaderContext) ; 

    return (
 
        <div 
        className='nav-bar d-flex px-4 justify-content-between py-2'>
           
            <div className="d-flex gap-3">
                <Link to = "/" ><img src = {Logo} alt = "logo" style = {{height : "60px" }}/></Link> 
                {location.locationName !== "" &&
                    <>
                    <i className="fa-solid fa-location-dot pt-3 ms-5  fs-3 text-color"></i> 
                    <div className = "text-truncate d-inline-block pt-3" style={{maxWidth : "200px"}}>{location.locationName} </div>
                    </>
                }

            </div>

           <ul className='nav-menu d-flex pt-3 gap-5' style = {{listStyle : "none"}}>
                
                <Link to = "/" 
                className= {page.currentPage === "home" ? "border-bottom border-dark pe-2" : undefined} ><li><i className="fa-solid fa-house"></i> Home</li></Link>

                <Link to = "/restaurants" className= {page.currentPage === "restaurants" ? "border-bottom border-dark pe-2" : undefined}><li><i className="fa-solid fa-utensils"></i> Restaurants</li></Link>

                <Link to = "/help" className= {page.currentPage === "help" ? "border-bottom border-dark pe-2" : undefined}><li><i className="fa-solid fa-question"></i> Help</li></Link>

                <Link to = "/cart" className= {page.currentPage === "cart" ? "border-bottom border-dark pe-2" : undefined}><li><i className="fa-solid fa-cart-shopping"></i> Cart</li></Link>

                {page.currentPage !== "home" && <button className="text-color border-0 px-3 bg-light rounded-1" onClick={()=>{

                    setLocationModal({
                        display : true 
                    }) ;

                }}>Set Location</button> }

                {
                    isAuthenticated === true  ? <button className="text-color border-0 px-3 bg-light rounded-1" onClick={()=>{
                    logout() ; }}>LogOut</button> : 
                    <button className="text-color border-0 px-3 bg-light rounded-1"><Link to = "/login" className="text-color">LogIn</Link></button>
                }
                
                
            </ul>
            
        </div>

    )

}
export default Header ; 

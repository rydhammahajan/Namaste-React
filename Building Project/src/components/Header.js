import Logo from "../assets/logo.png"
import {Link} from "react-router-dom" 
import LocationContext from "../utils/LocationContext"
import { useContext, useEffect, useState } from "react"
import useIsAuthenticated from "../utils/useIsAuthenticated"
const Header = () => {

    const {location } = useContext(LocationContext) ; 
    const{ isAuthenticated , logout} = useIsAuthenticated() ;
    

    return (

        isAuthenticated  && 
        <div 
        className='nav-bar d-flex px-4 justify-content-between py-2'>
           
            <div>
                <Link to = "/" ><img src = {Logo} alt = "logo" style = {{height : "60px" }}/></Link> 
                {location.locationName !== "" &&
                    <>
                    <i class="fa-solid fa-location-dot pt-3 ms-5 me-3 fs-3 text-color"></i> 
                    <div className = "text-truncate d-inline-block" style={{maxWidth : "200px"}}>{location.locationName} </div>
                    </>
                }
                


            </div>          

           <ul className='nav-menu d-flex pt-3 gap-5' style = {{listStyle : "none"}}>
                
                <Link to = "/" ><li>Home</li></Link>
                <Link to = "/search" ><li>Restaurants</li></Link>
                <Link to = "/location" ><li>Location</li></Link>
                <Link to = "/about" ><li>About Us</li></Link>
                <Link to = "/help" ><li>Help</li></Link>
                <Link to = "/" ><li>Cart</li></Link>
                <Link to = "/profile" ><li>Profile</li></Link>
                <Link to = "/" className="text-color" onClick={()=>{
                    logout() ; 
                }}>

                    LogOut
                </Link>
                
            </ul>
            
        </div>

    )

}
export default Header ; 

import { useContext, useEffect, useState} from "react"
import {Link} from "react-router-dom" 
import Logo from "../assets/logo.png"
import LocationContext from "../utils/LocationContext"
import useIsAuthenticated from "../utils/useIsAuthenticated"
import LogIn from "./LogIn"
const Header = () => {

    const {location } = useContext(LocationContext) ; 
    const {isAuthenticated , logout} = useIsAuthenticated()

    useEffect(() => {
        console.log(isAuthenticated);
      }, [isAuthenticated]);
    
    // if (isAuthenticated === false) {
    // return <></>;
    // }
    
    return (
 
        <div 
        className='nav-bar d-flex px-4 justify-content-between py-2'>
           
            <div className="d-flex gap-3">
                <Link to = "/" ><img src = {Logo} alt = "logo" style = {{height : "60px" }}/></Link> 
                {location.locationName !== "" &&
                    <>
                    <i class="fa-solid fa-location-dot pt-3 ms-5  fs-3 text-color"></i> 
                    <div className = "text-truncate d-inline-block pt-3" style={{maxWidth : "200px"}}>{location.locationName} </div>
                    </>
                }

            </div>

           <ul className='nav-menu d-flex pt-3 gap-5' style = {{listStyle : "none"}}>
                
                <Link to = "/" ><li>Home</li></Link>
                <Link to = "/search" ><li>Restaurants</li></Link>
                <Link to = "/about" ><li>About Us</li></Link>
                <Link to = "/help" ><li>Help</li></Link>
                <Link to = "/" ><li>Cart</li></Link>
                <Link to = "/profile" ><li>Profile</li></Link>

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

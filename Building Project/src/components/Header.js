import Logo from "../assets/Logo.png"
import {Link} from "react-router-dom" 
const Header = () => {


    return (

        <div 
        className='nav-bar d-flex py-1 px-5 justify-content-between overflow-hidden'>

            <img src = {Logo} alt = "logo" style = {{height : "80px" }}/>
            
            

            <ul className='nav-menu d-flex' style = {{listStyle : "none"}}>
                
                <Link to = "/" className='my-3 mx-4'><li>Home</li></Link>
                <Link to = "/search" className='my-3 mx-4'><li>Search</li></Link>
                <Link to = "/" className='my-3  mx-4'><li>About Us</li></Link>
                <Link to = "/" className='my-3  mx-4'><li>Help</li></Link>
                <Link to = "/" className='my-3  mx-4'><li>Cart</li></Link>

            </ul>

        </div>


    )

}
export default Header ; 

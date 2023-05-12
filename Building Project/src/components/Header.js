import Logo from "../assets/logo.png"
import {Link} from "react-router-dom" 
const Header = () => {


    return (

        <div 
        className='nav-bar d-flex px-4 justify-content-between'>

            <Link to = "/" ><img src = {Logo} alt = "logo" style = {{height : "60px" }}/></Link>            
            
            

            <ul className='nav-menu d-flex pt-3 gap-5' style = {{listStyle : "none"}}>
                
                <Link to = "/" ><li>Home</li></Link>
                <Link to = "/search" ><li>Search</li></Link>
                <Link to = "/about" ><li>About Us</li></Link>
                <Link to = "/help" ><li>Help</li></Link>
                <Link to = "/" ><li>Cart</li></Link>
                
            </ul>

        </div>


    )

}
export default Header ; 

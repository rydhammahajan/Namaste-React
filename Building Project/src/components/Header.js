const Header = () => {
    const logo = require('../../Assets/Logo.png');

    return (

        <div 
        className='nav-bar d-flex py-1 px-5 justify-content-between'>

            <img src = {logo} alt = "logo" style = {{height : "80px" }}/>
            
            

            <ul className='nav-menu d-flex' style = {{listStyle : "none"}}>
                
                <a href = "/" className='my-3 mx-4'><li>Home</li></a>
                <a href = "/" className='my-3 mx-4'><li>Menu</li></a>
                <a href = "/" className='my-3  mx-4'><li>About Us</li></a>
                <a href = "/" className='my-3  mx-4'><li>Help</li></a>
                <a href = "/" className='my-3  mx-4'><li>Cart</li></a>

            </ul>

        </div>


    )

}
export default Header ; 

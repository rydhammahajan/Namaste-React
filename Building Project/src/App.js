import React, { useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter ,  Outlet , RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
// import About from "./components/About"
import Cart from "./components/Cart";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Help from "./components/Help";
import LocationContext from "./utils/LocationContext";
import UserContext from "./utils/UserContext";
import ModalContext from "./utils/ModalContext";
import Modal from "./components/Modal";
import Location from "./components/Location";
import useIsAuthenticated from "./utils/useIsAuthenticated";
import { Provider } from "react-redux";
import store from "./utils/Redux/store";
import HeaderContext from "./utils/HeaderContext";
import LandscapeModeMessage from "./components/Landscape";

const AppLayout = () => {

    // const {isAuthenticated} = useIsAuthenticated() 
    
    const data = JSON.parse(localStorage.getItem("USER")) ; 

    const [locationCoords , setLocationCoords] = useState({ 
        lat:28.5047063, 
        long : 77.0500089 
    }) ;

    const [location, setLocation] = useState({
        locationName : "" ,
    }) ;  

    const [locationModal , setLocationModal]  = useState({
        display : true
    });

    const [user , setUser] = useState({
        fname : data ?.fname , 
        lname : data?.lname , 
        email : data ?.email
    }) ; 

    const [modal , setModal] = useState({}) ; 

    const [page , setPage] = useState({
        currentPage : ""
    }) ; 

   
    return(
    <>
            <LocationContext.Provider value={{locationCoords : locationCoords , setLocationCoords : setLocationCoords , location : location, setLocation : setLocation , locationModal : locationModal , setLocationModal : setLocationModal} }>
            <UserContext.Provider value = {{user : user , setUser: setUser}}>

            <ModalContext.Provider value = {{modal : modal  , setModal : setModal}}> 

            <HeaderContext.Provider value =  {{page : page , setPage : setPage}}>

            <Provider store = {store}>

                {modal.display === true && <Modal/>}
                {(page.currentPage !== "login" && page.currentPage !== "signup")&& <Header key={10}/>}
                <Outlet key = {11}/>
                {(page.currentPage !== "login" && page.currentPage !== "signup")&& <Footer/>}
            
            </Provider>
            </HeaderContext.Provider>
            </ModalContext.Provider>
            </UserContext.Provider>
            </LocationContext.Provider>
    </>
)}

const appRouter = new createBrowserRouter([

    {
        path : "/"  , 
        element :<AppLayout/> , 
        errorElement : <Error/>,
        children : [

            {
                path : ""  , 
                element :<Home/> ,  
            },
            {
                path : "/restaurants"  , 
                element :<Body/> ,  
            },
            
            {
                path : "/restaurants/:sortBy"  , 
                element :<Body/> ,  
            },
            {
                path : "restaurant/:resId" , 
                element :  <RestaurantMenu/>
            },
            // {
            //     path : "/about" , 
            //     element :  <About/>
            // },
            {
                path : "/help"  , 
                element :<Help/> , 
            },
            {
                path : "/signup"  , 
                element :<SignUp/> ,
            },
            {
                path : "/login"  , 
                element :<LogIn/> ,
            },{
                path : "/cart" , 
                element : <Cart/>
            }
        ]
    },
   

])


const root = ReactDOM.createRoot(document.getElementById("root")) ; 

const handleResize = () => {
    if (window.innerWidth <= 1200) {
      root.render(<LandscapeModeMessage />);
    } else {
      root.render(<RouterProvider router={appRouter} />);
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  handleResize(); // Initial render based on current window width

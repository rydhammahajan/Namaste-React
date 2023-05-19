import React, { useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter ,  Outlet , RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About"
import Error from "./components/Error";
import Help from "./components/Help";
import LocationContext from "./utils/LocationContext";
import UserContext from "./utils/UserContext";
import ModalContext from "./utils/ModalContext";
import Modal from "./components/Modal";
import Location from "./components/Location";
import useIsAuthenticated from "./utils/useIsAuthenticated";


const AppLayout = () => {

    const {isAuthenticated} = useIsAuthenticated()
    
    const data = JSON.parse(localStorage.getItem("USER")) ; 

    const [locationCoords , setLocationCoords] = useState({ 
        lat:28.5047063, 
        long : 77.0500089 
    }) ;

    const [location, setLocation] = useState({
        locationName : "" 
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
   
    return(
    <>
            <LocationContext.Provider value={{locationCoords : locationCoords , setLocationCoords : setLocationCoords , location : location, setLocation : setLocation , locationModal : locationModal , setLocationModal : setLocationModal} }>
            <UserContext.Provider value = {{user : user , setUser: setUser}}>

            <ModalContext.Provider value = {{modal : modal  , setModal : setModal}}> 

                {modal.display === true && <Modal/>}
                {isAuthenticated && locationModal.display && <Location/>}
                <Header key={10}/>
                <Outlet key = {11}/>
            
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
                path : "/search"  , 
                element :<Body/> ,  
            },
            
            {
                path : "/search/:sortBy"  , 
                element :<Body/> ,  
            },
            {
                path : "restaurant/:resId" , 
                element :  <RestaurantMenu/>
            },
            {
                path : "about" , 
                element :  <About/>
            },
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
            }
        ]
    },
    // {
    //     path : "/signup"  , 
    //     element :<SignUp/> ,
    // },
    // {
    //     path : "/login"  , 
    //     element :<LogIn/> ,
    // }

])


const root = ReactDOM.createRoot(document.getElementById("root")) ; 
root.render(<RouterProvider router = {appRouter}/>) ;

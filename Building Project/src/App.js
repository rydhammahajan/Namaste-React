import React, { useState } from "react"
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
import UserInfo from "./components/UserInfo";
import Help from "./components/Help";
import Profile from "./components/Profile";
import LocationContext from "./utils/LocationContext";


 
const AppLayout = () => {
    const [locationCoords , setLocationCoords] = useState({ 
        lat:28.5047063, 
        long : 77.0500089 
    }) ;
    const [location, setLocation] = useState({
        locationName : "" 
    }) ; 
    const [locationModal , setLocationModal]  = useState({
        display : true
    })
    return(
    <>
            <LocationContext.Provider value={{locationCoords : locationCoords , setLocationCoords : setLocationCoords , location : location, setLocation : setLocation , locationModal : locationModal , setLocationModal : setLocationModal} }>

                <Header/>
                <Outlet/>

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
                path : "/location"  , 
                element :<UserInfo/> , 
            },{
                path : "/profile" , 
                element : <Profile/>
            }
        ]
    },
    {
        path : "/signup"  , 
        element :<SignUp/> ,
    },
    {
        path : "/login"  , 
        element :<LogIn/> ,
    }

])


const root = ReactDOM.createRoot(document.getElementById("root")) ; 
root.render(<RouterProvider router = {appRouter}/>) ;

import React from "react"
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



const AppLayout = () => {
    return(
    <>
        {/* <Header/> */}
        <Outlet/>
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
                element :<UserInfo/> ,  
            },
            
            {
                path : "/search"  , 
                element :<Body/> ,  
            },
            {
                path : "restaurant/:resId" , 
                element :  <RestaurantMenu/>
            },
            {
                path : "about" , 
                element :  <About/>
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

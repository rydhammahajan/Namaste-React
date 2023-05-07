import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter ,  Outlet , RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import SignUp from "./components/SignUp";
import About from "./components/About"



const AppLayout = () => {
    return(
    <>
        <Header/>
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
    },{
        path : "/signup"  , 
        element :<SignUp/> ,
    }

])


const root = ReactDOM.createRoot(document.getElementById("root")) ; 
root.render(<RouterProvider router = {appRouter}/>) ;

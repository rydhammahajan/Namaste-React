import React from "react"
import ReactDOM from "react-dom/client"


const heading1 = React.createElement("h1" , {} , "Igniting Our App") ;

const outerContainer = React.createElement(
    "div" , 
    {
        id : "container"
    } ,
    [heading1]
 ) ; 

const root = ReactDOM.createRoot(document.getElementById("root")) ; 

root.render(outerContainer) ;

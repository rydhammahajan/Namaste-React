import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
    "h1" , 
    { } , 
    "Igniting Our Apps"
)

const root = ReactDOM.createRoot(document.getElementById("root")) ; 

console.log("He")

root.render(heading1) ;


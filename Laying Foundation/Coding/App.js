import React from "react"
import ReactDOM from "react-dom/client"

/*
<div>
    <h1></h1>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>

const list1 = React.createElement("li" , {} , "About Us") ;

const list2 = React.createElement("li" , {} , "Support") ;

const list3 = React.createElement("li" , {} , "Home") ;

const unorderedList = React.createElement("ul" , {} , [list1 , list2 , list3]) ;

const heading = React.createElement("h1" , {} , "Namaste React") ; 

*/

//Using Functional Component

const LectureName = () => {

    return <h3>Laying the foundation.</h3>
}

const Introduction = () => {

    const num = 3 ; 
    return (
        <div>                                           
            <h2>This is a Lecture No. : {num}</h2>      
            < LectureName />    {/*This is Component Composition i.e. Nested Components*/}
        </div>
    )
}


const mainContainer = (

    <div>

        <h1>Namaste React</h1>
        < Introduction/>
        <ul>
            <li>Home</li>
            <li>Support</li>
            <li>About Us</li>
        </ul>
    </div>

)




const root = ReactDOM.createRoot(document.getElementById("root")) ; 

root.render(mainContainer) ;

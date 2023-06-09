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
        <div className="title">                                           
            <h2>This is a Lecture No. : {num}</h2>      
            < LectureName />    {/*This is Component Composition i.e. Nested Components*/}
        </div>
    )
}


const mainContainer = (

    <div>

        <h1>Namaste React</h1>
        <Introduction></Introduction>
        <ul>
            <li>Home</li>
            <li>Support</li>
            <li>About Us</li>
        </ul>
    </div>

)


const HeaderOfPage = () => {

    return (
    <header className="d-flex justify-content-between " style={{ backgroundColor :"cyan"}}>

    <img src = "https://shorturl.at/CGNR4" className="logo border rounded-pill" style = 
    {{height:"50px"}}>

    </img>
    <input type = "text" placeholder="Enter something to serach" style = 
    {{width:"500px"}}></input>
    <i className="fa-solid fa-user fs-1"></i>
    </header>
    )

}



const root = ReactDOM.createRoot(document.getElementById("root")) ; 

// root.render(mainContainer) ;
root.render(<HeaderOfPage></HeaderOfPage>) ;

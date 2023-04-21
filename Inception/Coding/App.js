// Adding Namaste Everyone using Javascript DOM manipulation 

/*
    let h1 = document.createElement("h1") ; 
    h1.innerText = "Namaste Everyone" ; 

    let root = document.getElementById("root") ; 
    root.appendChild(h1) ; 

*/


/* ***************************************************************************************** */

//Adding Namaste Everyone using React 


/*
    const heading = React.createElement("h1" , {} , "Namaste Everyone !") ;
    console.log(heading) ;
    const root = ReactDOM.createRoot( document.getElementById("root")) ; 
    root.render(heading) 

*/


/* ***************************************************************************************** */


/*
<div>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
</div> 

Adding the above HTML code using react 
Steps  :
1. Create the elements 
2. Create the root 
3. Render root
*/

const heading1 = React.createElement("h1" , {} , "Heading1") ;
const heading2 = React.createElement("h2" , {} , "Heading2") ;

const outerContainer = React.createElement(
    "div" , 
    {
        id : "container"
    } ,
    [heading1 , heading2]
 ) ; 

const root = ReactDOM.createRoot(document.getElementById("root")) ; 

root.render(outerContainer) ;

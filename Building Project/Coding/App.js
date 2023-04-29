import React from "react"
import ReactDOM from "react-dom/client"

const restaurantList = [
    {

        "data": {
        "type": "F",
        "id": "353902",
        "name": "Vaango",
        "uuid": "057f43ef-802f-4e81-8db9-08d0c6307d5f",
        "city": "52",
        "area": "INA Colony",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "odt8n4mupdmxnwcicqfz",
        "cuisines": [
        "South Indian"
        ]
        }
    } , 
    {
        "data": {
        "type": "F",
        "id": "223881",
        "name": "Gauri Shankar & Sons (Rialto Chowk)",
        "uuid": "f00b0bbc-cd88-46a8-ac0a-785fe5181805",
        "city": "52",
        "area": "INA Colony",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "v1mcy5x6atfuu4erjx67",
        "cuisines": [
        "North Indian",
        "Punjabi",
        "Thalis",
        "Indian"
        ]
        }
    } , 
    {
        "data": {
            "type": "F",
            "id": "314520",
            "name": "Sourab Fast Food",
            "uuid": "e0eb06b6-71e2-410d-ae80-e4c40a018099",
            "city": "52",
            "area": "Crystal Chowk",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "idru36pe97ntiqlxcztu",
            "cuisines": [
            "North Indian",
            "Chinese"
            ]
        }
    },
    {
        "data": {
            "type": "F",
            "id": "353902",
            "name": "Vaango",
            "uuid": "057f43ef-802f-4e81-8db9-08d0c6307d5f",
            "city": "52",
            "area": "INA Colony",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "odt8n4mupdmxnwcicqfz",
            "cuisines": [
            "South Indian"
            ]

        }
    },
    {
        "data": {
            "type": "F",
            "id": "314520",
            "name": "Sourab Fast Food",
            "uuid": "e0eb06b6-71e2-410d-ae80-e4c40a018099",
            "city": "52",
            "area": "Crystal Chowk",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "idru36pe97ntiqlxcztu",
            "cuisines": [
            "North Indian",
            "Chinese"
            ]
        }
    },
    {
        "data": {
            "type": "F",
            "id": "353902",
            "name": "Vaango",
            "uuid": "057f43ef-802f-4e81-8db9-08d0c6307d5f",
            "city": "52",
            "area": "INA Colony",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "odt8n4mupdmxnwcicqfz",
            "cuisines": [
            "South Indian"
            ]

        }
    },
    {
        "data": {
            "type": "F",
            "id": "314520",
            "name": "Sourab Fast Food",
            "uuid": "e0eb06b6-71e2-410d-ae80-e4c40a018099",
            "city": "52",
            "area": "Crystal Chowk",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "idru36pe97ntiqlxcztu",
            "cuisines": [
            "North Indian",
            "Chinese"
            ]
        }
    },
    {
        "data": {
            "type": "F",
            "id": "353902",
            "name": "Vaango",
            "uuid": "057f43ef-802f-4e81-8db9-08d0c6307d5f",
            "city": "52",
            "area": "INA Colony",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "odt8n4mupdmxnwcicqfz",
            "cuisines": [
            "South Indian"
            ]

        }
    }
]
    
const Header = () => {
    const logo = require('../Assets/Logo.png');

    return (
        <div className="nav-bar d-flex justify-content-between px-3 py-2  position-sticky">

            <img 
            src={logo} alt =  "Logo" 
            style = {{height : "90px"}} 
            className="border rounded-pill border-0"
            />

            <ul className="d-flex gap-5 " style = {{ listStyleType: "none"}}>
                <a href = "/"><li className = "m-3 fs-5">Home</li></a>
                <a href = "/"><li className = "m-3 fs-5">About</li></a>
                <a href = "/"><li className = "m-3 fs-5">Search</li></a>
                <a href = "/"><li className = "m-3 fs-5">Cart</li></a>
                <a href = "/"><li className = "m-3 fs-5">Profile</li></a>
            </ul>


        </div>
    )

}

const RestaurantList = ({name , cuisines , cloudinaryImageId}) => {

    // console.log(props.restaurantData) ; 

    // const temp = props.restaurantData.data
    
    return (

        <div className="d-flex flex-column border card ">

        <img src = {`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_200,c_fill/${cloudinaryImageId}`} ></img>
        <h4>{name}</h4> 
        <h5>{cuisines.join(",")}</h5> 

            
        </div>
        
    )
    
}

const Body = () => {

   return (

    <div> 
        <div className="p-5 d-flex justify-content-between flex-wrap gap-2">

    
            {/* <RestaurantList  {...restaurantList[0].data}/> */}
            {   
                restaurantList.map( (arr) => {
                    return <RestaurantList  {...arr.data}/>
                })
            }
        </div>
    </div>
   )
}

const body = (
    <>
        <Header/>
        <Body/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root")) ; 
root.render(body) ;
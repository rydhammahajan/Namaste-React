// import { useContext, useEffect, useState } from "react"
// import LocationContext from "../utils/LocationContext";
// import Location from "./Location.js";
// import UserContext from "../utils/UserContext";
// import Location from "./Location";

// const Profile = ()=>{

//     const [profileData , setProfileData] = useState(null) ; 
//     const [editPermission , setEditPermission] = useState(false) ; 
//     const {location , locationModal, setLocationModal} = useContext(LocationContext) ; 

//     console.log(locationModal.display) ;

//     const {user , setUser} = useContext(UserContext) ;

//     async function FetchProfileData(){


//         const data = await JSON.parse(localStorage.getItem("USER")) ; 
//         setProfileData(data) ;
//         console.log(data) ;  

//     }
//     useEffect(()=>{
//         FetchProfileData() ;
//     } , [])

//     function SaveInformation(){

//         const USER = JSON.stringify({
//             ...profileData , 
//             fname : user?.fname , 
//             lname : user?.lname , 
//             email : user?.email 
//         })

//         localStorage.setItem("USER" , USER) ; 
//     }
//     return(

//         <>
//         {/* {locationModal.display && <Location/>} */}
//         <div className="background-component d-flex align-items-center justify-content-center">

//         <div className="d-flex  flex-column align-items-center bg-light p-5 m-5 gap-3" >

//             <img src = {require("../assets/profileImage.png")} height = "200px" width = "200px" className="profile-Image"/ >
//             <div>

//             </div>

//             <label className="fs-5 text-color">
//              First Name <br/>
//             <input className="form-input mt-3" disabled = {editPermission ? false : true} value = {user?.fname} onChange = {(e) =>{
//                 setUser(
//                     {
//                         ...user , 
//                         fname : e.target.value
//                     }
//                 ) ; 
//             }}/>
//             </label>

//             <label className="fs-5 text-color">
//              Last Name <br/>
//             <input className="form-input mt-3" disabled = {editPermission ? false : true} value = {user?.lname} onChange = {(e) =>{
//                 setUser(
//                     {
//                         ...user , 
//                         lname : e.target.value
//                 }) ; 
//             }}/>
//              </label>

//             <label className="fs-5 text-color">
//              Email Address <br/>
//             <input className="form-input mt-3"  disabled = {editPermission ? false : true} value = {user?.email} onChange = {(e) =>{
//                 setUser({
//                     ...user , 
//                     email :e.target.value
//                 }) ;  
//             }}/>
//              </label>

//             {/* <label className="fs-5 text-color">
//              Location <br/>
//             <input className="form-input mt-3" disabled = {true} value = {location?.locationName}/> 
//             {editPermission && <i className="fa-solid fa-pencil" onClick = {()=>{
//                   setLocationModal({
//                     display : true}) ; 
//             }}></i> }
//              </label> */}

//             <button className="form-button fs-5 py-3"
//             onClick = {()=>{
//                 if(!editPermission)setEditPermission(true) ;
//                 else {
//                     SaveInformation() ; 
//                     setEditPermission(false) ; 
//                 }
//             }}> {editPermission === true ? "Save Profile" : "Edit Profile"}</button>

//             <Location/>

//         </div>
//         </div>
//         </>
//     )
// }

// export default Profile ; 
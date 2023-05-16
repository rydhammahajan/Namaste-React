import { useContext, useEffect, useState } from "react"
import LocationContext from "../utils/LocationContext";
import UserInfo from "./UserInfo.js";

const Profile = ()=>{

    const [profileData , setProfileData] = useState(null) ; 
    const [editPermission , setEditPermission] = useState(false) ; 
    const {location} = useContext(LocationContext) ; 
    const [fname , setFName] = useState("") ; 
    const [lname , setLName] = useState("") ; 
    const [email , setEmail] = useState("") ; 
    const [displayLocation , setDisplayLocation] = useState(false) ; 
    async function FetchProfileData(){

        const data = await JSON.parse(localStorage.getItem("USER")) ; 
        setProfileData(data) ; 
        setFName(data?.fname)
        setLName(data?.Lname)
        setEmail(data?.email)
    }
    useEffect(()=>{
        FetchProfileData() ;
    } , [])

    function SaveInformation(){

        const USER = JSON.stringify({
            ...profileData , 
            fname : fname , 
            lname : lname , 
            email : email 
        })

        localStorage.setItem("USER" , USER) ; 
    }
    return(

        <>
        {displayLocation && <UserInfo/>}
        <div className="background-component d-flex align-items-center justify-content-center">

        <div className="d-flex  flex-column align-items-center bg-light p-5 m-5 gap-3" >

        {profileData && <>

            <img src = {require("../assets/profileImage.png")} height = "200px" width = "200px" className="profile-Image"/ >
            <div>

            </div>

            <label className="fs-5 text-color">
             First Name <br/>
            <input className="form-input mt-3" disabled = {editPermission ? false : true} value = {fname} onChange = {(e) =>{
                setFName(e.target.value) ; 
            }}/>
            </label>

            <label className="fs-5 text-color">
             Last Name <br/>
            <input className="form-input mt-3" disabled = {editPermission ? false : true} value = {lname} onChange = {(e) =>{
                setLName(e.target.value) ; 
            }}/>
             </label>

            <label className="fs-5 text-color">
             Email Address <br/>
            <input className="form-input mt-3"  disabled = {editPermission ? false : true} value = {email} onChange = {(e) =>{
                setEmail(e.target.value) ; 
            }}/>
             </label>

            <label className="fs-5 text-color">
             Location <br/>
            <input className="form-input mt-3" disabled = {true} value = {location?.locationName}/> 
            {editPermission && <i className="fa-solid fa-pencil" onClick = {()=>{
                 setDisplayLocation(true) ;
            }}></i> }
             </label>

            <button className="form-button fs-5 py-3"
            onClick = {()=>{
                if(!editPermission)setEditPermission(true) ;
                else {
                    SaveInformation() ; 
                    setEditPermission(false) ; 
                }
            }}> {editPermission === true ? "Save Profile" : "Edit Profile"}</button>
            </>}
        </div>
        </div>
        </>
    )
}

export default Profile ; 
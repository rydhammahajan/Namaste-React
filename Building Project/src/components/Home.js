import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
const Home = () => {

    let [path , setPath] = useState("") ;  
    async function findPath() {
        
        try{
            const token = localStorage.getItem("accessToken") ;

            console.log(token) ;
            const response = await fetch("https://www.melivecode.com/api/auth/user" , {
                method: 'GET',
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })

            const response_json = await response.json() ; 
            console.log(response_json) ;
            if(response_json.status === "ok"){
                setPath("/search")
            }else{
                setPath("/login")
            }
          
        }catch(error) {
            console.log(error) ;
        }
    }

    useEffect(()=> {
        findPath() ; 
    } , [])

    return(
        <>
            <div className="home-top position-relative">

                <div className="text-light fs-1 h1 position-absolute " style={{top:"20%" , left : "2%"}}>
                    <span style = {{fontSize : "30px"}}>Hey Foodie!</span><br/>
                    <span style = {{fontSize : "50px"}}>Looking for</span><br/>
                    <span style = {{fontSize : "70px"}}>Delicious Food ?</span><br/>
                    <Link to={path}><button className=" button p-3 mt-5 background-color text-light explore-button" >Explore Now</button></Link>
                </div>

            </div>
            <div className="d-flex flex-column pt-5 px-3 ">
                <h1 className="text-famousRes">World Famous Restaurants</h1>
                <div className="d-flex gap-5 p-5">
                <img src = {require("../assets/famousRes1.avif")} className="famousRes" height={"200px"}></img>
                <img src = {require("../assets/famousRes2.avif")} className="famousRes" height={"200px"}></img>
                <img src = {require("../assets/famousRes3.avif")} className="famousRes" height={"200px"}></img>
                <img src = {require("../assets/famousRes4.avif")} className="famousRes" height={"200px"}></img>
                </div>

            </div>
            <div className="d-flex flex-column p-3 ">
                <h1 className="text-famousRes">#FlavourFinders in Instagram</h1>
                <div className="d-flex gap-5 p-5 flex-wrap justify-content-around">
                <img src = {require("../assets/instafood1.png")} className="instaRes" height={"200px"}></img>
                <img src = {require("../assets/instafood2.png")} className="instaRes" height={"200px"}></img>
                <img src = {require("../assets/instafood3.png")} className="instaRes" height={"200px"}></img>
                <img src = {require("../assets/instafood4.png")} className="instaRes" height={"200px"}></img>
                <img src = {require("../assets/instafood5.png")} className="instaRes" height={"200px"}></img>
                <img src = {require("../assets/instafood6.png")} className="instaRes" height={"200px"}></img>
                <img src = {require("../assets/instafood7.png")} className="instaRes" height={"200px"}></img>
                <img src = {require("../assets/instafood8.png")} className="instaRes" height={"200px"}></img>
                
                </div>

            </div>
        </>
    )
}

export default Home ; 
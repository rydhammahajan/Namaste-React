import { Link } from "react-router-dom";
import { useState , useEffect , useContext} from "react";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import HeaderContext from "../utils/HeaderContext";

const Home = () => {

    let [path , setPath] = useState("/restaurants") ;  
    
    const {isAuthenticated} = useIsAuthenticated();
    const {setPage} = useContext(HeaderContext) ;


    useEffect(()=>{
        setPage({
            currentPage : "home" ,
        })
    }, [])

    useEffect(() => {
        console.log(isAuthenticated) ;
        if (!isAuthenticated) {
        setPath("/login");
        } else {
        setPath("/restaurants");
        }
    });
    
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
            <div className="d-flex flex-column pt-5 px-3  ">
                <h1 className="text-famousRes">World Famous Restaurants</h1>
                <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">
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
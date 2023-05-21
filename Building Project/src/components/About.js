import { useState , useContext, useEffect } from "react";
import LocationContext from "../utils/LocationContext";
import Location from "./Location";
import HeaderContext from "../utils/HeaderContext";
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "../utils/useIsAuthenticated";

const About = () => {
    const {locationModal} = useContext(LocationContext)
    const {setPage} = useContext(HeaderContext) ;
    const {isAuthenticated} = useIsAuthenticated()
    const navigate = useNavigate() ;

    useEffect(()=>{
        setPage({
            currentPage : "about" ,
        })
    }, [])
    
    useEffect(()=>{
        if(isAuthenticated === false){
            navigate("/login")
        }
    } , [isAuthenticated])

    return (
        <>
        {locationModal.display && <Location/>}
        <h1>This is an About Section</h1> 
        </>
    )
}

export default About ;
 
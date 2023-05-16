import { useState } from "react"
import useGeolocation from "../utils/useGeolocation"
import { MANUAL_LOOCATION_API } from "../config.js";
import { useContext  } from "react";
import LocationContext from "../utils/LocationContext";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {

    const [recommendedList , setRecommendedList] = useState() ; 
    const [OptionChoose , setOptionChoose] = useState(0)
    const {setLocationCoords} = useContext(LocationContext) ; 
    const {location  , setLocation , setLocationModal} = useContext(LocationContext) ; 
    const [input , setInput] = useState(location.locationName) ; 
    const navigate = useNavigate() ;
    

    const latlng = useGeolocation(); 


    async function CurrentLocationAPI() {

        const data = await fetch(`https://www.swiggy.com/mapi/misc/address-recommend?latlng=${latlng[0]}%2C${latlng[1]}`)
        const json_data = await data.json() ;

        setInput(json_data?.data[0]?.formatted_address) ;
        setLocationCoords({
            lat : latlng[0] , 
            long : latlng[1] 
        })
        setOptionChoose(1) ;
    }

    async function EnterLocationManually(value) {
        const data = await fetch(MANUAL_LOOCATION_API+value)
            const json_data = await data.json() ; 
            setRecommendedList(json_data.data) ;
    }

    function SearchList(data) {
        return ( 
            <button className = "options m-1 text-truncate"
            onClick={()=>{
                setInput(data) ; 
                setRecommendedList([]) ; 
                setOptionChoose(1) ;
            }}>{data}</button> 
        )
    }

    function SaveLocation(){
    
        setLocation({
            locationName : input
        });
        setLocationModal({
            display : false}) ; 
        navigate("/search")
    }

    return (

        <div className="position-fixed top-0 start-0" style={{zIndex : 2}}>
            <div className="location-background d-flex justify-content-center align-items-center p-5">

                <div className="user-form d-flex flex-column p-4 gap-5 align-items-center border rounded-1 ">

                    <div className="fs-3 text-dark">Help us Locate You! </div>


                    <label className="fs-5 text-secondary">Location<br/>

                        <input  className = " mt-1 px-2 form-input" value = {input} placeholder = "Choose one option...." required 
                        disabled={OptionChoose === 2 ? false : true} 
                        onChange={(e)=> {

                            
                            if(e.target.value === "") {
                                setInput("") ; 
                                setRecommendedList([]);
                            }
                            else{
                                setInput(e.target.value) ; 
                                EnterLocationManually(e.target.value) ; 
                            }
                            
                        }}
                        /><br/>

                        <div className="d-flex flex-column option-container">
                        
                        {recommendedList?.length >= 1 && (
                            recommendedList.map((item) => {
                            return SearchList(item.description);
                            })
                        )}
                        
                        </div>

                    </label>


                    <div className="d-flex gap-2">
                        <button className = "form-button" 
                            onClick={()=>{ 
                                    CurrentLocationAPI();
                                    setOptionChoose(0) ; 
                            }}>Use Current Location
                        </button>


                        <button  className = "form-button"
                        onClick={()=>{ 
                            setInput("") ;
                            setOptionChoose(2)
                            setRecommendedList([]) ; 
                        }}
                        >Enter Location Manually</button>
                    </div>
                    

                    <button className="form-button fs-3 " disabled =
                    { OptionChoose === 1 ?  false : true }
                    onClick= {()=>{
                        SaveLocation() ; 
                    }}
                    >Save</button>
                    
                </div>
            </div>
        </div>

    )

}

export default UserInfo
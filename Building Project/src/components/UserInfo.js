import { useState } from "react"
import useGeolocation from "../utils/useGeolocation"
import { MANUAL_LOOCATION_API } from "../config.js";
import Modal from "./Modal";

const UserInfo = () => {

    const [location , setLocation] = useState("") ; 
    const [firstName , setFirstName] = useState("") ; 
    const [lastName , setLastName] = useState("") ; 
    const [mobile , setMobile] = useState() ; 
    const [recommendedList , setRecommendedList] = useState() ; 
    const [OptionChoose , setOptionChoose] = useState(0)


    const latlng = useGeolocation(); 
    async function CurrentLocationAPI() {

        const data = await fetch(`https://www.swiggy.com/mapi/misc/address-recommend?latlng=${latlng[0]}%2C${latlng[1]}`)
        const json_data = await data.json() ; 
        setLocation(json_data?.data[0]?.formatted_address);
 
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
                setLocation(data) ;
                setRecommendedList([]) ; 
            }}>{data}</button> 
        )
    }

    return (
        <>
        <Modal/>
        <div className="background-component d-flex justify-content-center align-items-center p-5">

            <div className="user-form d-flex flex-column p-4 gap-5 align-items-center border rounded-1">

                <div className="fs-3 ">Let's get to know you better! </div>

                <label className="fs-5 text-secondary">First Name<br/>
                    <input className = " mt-1 form-input" required
                    onChange={(e)=>{
                        setFirstName(e.target.value)
                    }}
                    />
                </label>

                <label className="fs-5 text-secondary">Last Name<br/>
                    <input className = " mt-1 form-input" required 
                        onChange={(e)=>{
                        setLastName(e.target.value)
                    }}
                    />
                </label>

                <label className="fs-5 text-secondary" type = "tel">Mobile No.<br/>
                    <input className = " mt-1 form-input"required 
                        onChange={(e)=>{
                        setMobile(e.target.value)
                    }}
                    />
                </label>

                <label className="fs-5 text-secondary">Location<br/>

                    <input  className = " mt-1 form-input" value = {location} placeholder = "choose one option...." required 
                    disabled={OptionChoose === 2 ? false : true} 
                    onChange={(e)=> {

                        if(e.target.value === "") setRecommendedList([]);
                        setLocation(e.target.value) ;
                        EnterLocationManually(e.target.value) ; 
                        
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
                        }}>Use Current Location
                    </button>
                    <button  className = "form-button"
                    onClick={()=>{ 
                        setLocation("") ; 
                        setOptionChoose(2)
                        setRecommendedList([]) ; 
                    }}
                    >Enter Location Manually</button>
                </div>
                

                <button className="form-button fs-3">Save</button>
                
            </div>
        </div>
        </>

    )

}

export default UserInfo
import { useState } from "react"

const UserInfo = () => {

    const [location , setLocation] = useState("") ; 
    const [firstName , setFirstName] = useState("") ; 
    const [lastName , setLastName] = useState("") ; 
    const [mobile , setMobile] = useState() ; 
    const [recommendedList , setRecommendedList] = useState() ; 
    const [locationOptionChoose , setLocationOptionChoose] = useState(false)
    const [hideList , setHideList] = useState(true) ; 

    function UseCurrentLocation(){  
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{ 
                CurrentLocationAPI(position.coords.latitude , position.coords.longitude) ; 
            });
        }
    }
    async function CurrentLocationAPI(latitude , longitude) {

        const data = await fetch(`https://www.swiggy.com/mapi/misc/address-recommend?latlng=${latitude}%2C${longitude}`)
        const json_data = await data.json() ; 
        console.log(json_data) ;
        setLocation(json_data?.data[0]?.formatted_address);
 
    }
    async function EnterLocationManually(value) {
        const data = await fetch(`https://www.swiggy.com/mapi/misc/place-autocomplete?input=${value}`)
        const json_data = await data.json() ; 
        setRecommendedList(json_data.data) ; 
        console.log(json_data.data) ;
    }

    function SearchButton(data) {
        return ( 
            <button className = "options m-1"
            onClick={()=>{
                setLocation(data) ;
                setHideList(true) ; 
            }}>{data}</button> 
        )
    }

    return (

        <div className="background-component d-flex justify-content-center align-items-center p-5">

            <div className="bg-light d-flex flex-column p-4 gap-5 align-items-center border rounded-1">

                <div className="fs-3 ">Let's get to know you better! </div>

                <label className="fs-5 text-secondary">First Name<br/>
                    <input className = " mt-1 signUp-input"required
                    onChange={(e)=>{
                        setFirstName(e.target.value)
                    }}
                    />
                </label>

                <label className="fs-5 text-secondary">Last Name<br/>
                    <input className = " mt-1 signUp-input"required 
                        onChange={(e)=>{
                        setLastName(e.target.value)
                    }}
                    />
                </label>

                <label className="fs-5 text-secondary" type = "tel">Mobile No.<br/>
                    <input className = " mt-1 signUp-input"required 
                        onChange={(e)=>{
                        setMobile(e.target.value)
                    }}
                    />
                </label>

                <label className="fs-5 text-secondary">Location<br/>

                    <input  className = " mt-1 signUp-input" value = {location} required 
                    disabled={locationOptionChoose ? false : true} 
                    onChange={(e)=> {

                        setLocation(e.target.value) ;
                        EnterLocationManually(e.target.value) ; 
                        setHideList(false) ;
                    }}
                    /><br/>
                    <div className="d-flex flex-column option-container">
                    
                    {hideList ? (
                        <></>
                    ) : (
                        recommendedList? recommendedList.map((item) => {
                        return SearchButton(item.description);
                        }) : <></>
                    )}
                    
                    </div>
                </label>
                <div className="d-flex gap-2">
                    <button className = "submit-button" 
                        onClick={()=>{ 
                                setLocationOptionChoose(true)
                                UseCurrentLocation() ;
                                setHideList(true) ;
                        }}>Use Current Location
                    </button>
                    <button  className = "submit-button"
                    onClick={()=>{ 
                        setLocation("") ; 
                        setLocationOptionChoose(true)
                        setHideList(false) ;
                    }}
                    >Enter Location Manually</button>
                </div>
                

                <button className="submit-button fs-3  " >Save</button>
                
            </div>
        </div>

    )

}

export default UserInfo
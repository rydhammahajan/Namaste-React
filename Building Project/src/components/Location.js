import { useState , useContext, useEffect} from "react"
import axios from "axios";
import useGeolocation from "../utils/useGeolocation"
import { MANUAL_LOOCATION_API  , GEO_API_KEY} from "../config.js";
import LocationContext from "../utils/LocationContext";
import ModalContext from "../utils/ModalContext";
import { clearCart } from "../utils/Redux/cartSlice";
import { useDispatch } from "react-redux";

const Location = () => {

    const [recommendedList , setRecommendedList] = useState() ; 
    const [OptionChoose , setOptionChoose] = useState(0)
    const {location  , setLocation , setLocationModal ,setLocationCoords} = useContext(LocationContext) ; 
    const [input , setInput] = useState(location.locationName) ;
    const [latitude , setLatitude] = useState() ; 
    const [longitude , setLongitude] = useState () ;  
    const {modal , setModal} = useContext(ModalContext) ;
    const latlng = useGeolocation(); 
    const dispatch = useDispatch();
    

    async function CurrentLocationAPI() {

        const data = await fetch(`https://www.swiggy.com/mapi/misc/address-recommend?latlng=${latlng[0]}%2C${latlng[1]}`)
        const json_data = await data.json() ;

        setInput(json_data?.data[0]?.formatted_address) ;
        setLatitude(latlng[0]) ; 
        setLongitude(latlng[1]) ; 
        setOptionChoose(1) ;
    }

    async function EnteredLocationAPI(data) {

        try {
            const response = await axios.get('https://nominatim.openstreetmap.org/search', {
              params: {
                q: data,
                format: 'json',
              },
            });
      
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setLatitude(lat) ; 
                setLongitude(lon) ; 
            }
          } catch (error) {
            console.error('Error:', error);
          }

       

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
                EnteredLocationAPI(data)

            }}>{data}</button> 
        )
    }

    function HandleCart() {
        dispatch(clearCart()) ; 
    }

    function SaveLocation(){


        setLocationCoords({
            lat : latitude , 
            long : longitude , 
        })
    
        setLocation({
            locationName : input
        });
        setLocationModal({
            display : false
        }) ; 
        setModal({
            ...modal  ,
            name : "afterLocation" , 
            display : true , 
            heading : "Awesome Job!",
            message : "Your Location has been successfully updated !" , 
            description : "We're excited to deliver food at your door🥳" , 
            navigate : ""
             
        })

        HandleCart() ;

    }

    /**
     * 
     * OptionChoose - > 0 , 1 , 2 
     * Initially : 0 
     * if( 0 || 1) keep the input as disabled 
     * if(2) keep the input abled to let user enter the text
     */

    return (

        <div className="position-fixed top-0 start-0" style={{zIndex : 10}}>
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
        { OptionChoose === 1 || (location.locationName !== "" && OptionChoose === 0)?  false : true }
        onClick= {()=>{
            SaveLocation() ; 
        }}
        >Save</button>
    
        </div>
        </div>
        </div>


    )

}

export default Location ;

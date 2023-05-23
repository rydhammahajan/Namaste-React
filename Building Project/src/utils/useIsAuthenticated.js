import { useState  , useEffect , useContext} from "react";
import ModalContext from "../utils/ModalContext";
import LocationContext from "./LocationContext";


const useIsAuthenticated = () => {

    const [isAuthenticated , setIsAuthenticated] = useState(null) ; 
    const {modal ,setModal} = useContext(ModalContext) ; 
    const {setLocation , setLocationCoords , setLocationModal } = useContext(LocationContext) ;  
    
    async function Check() {

        if(!localStorage.getItem("USER"))  setIsAuthenticated(false) ; 
        else{

            try{
                const token = await (JSON.parse(localStorage.getItem("USER")))?.accessToken;
                const response = await fetch("https://www.melivecode.com/api/auth/user" , {
                    method: 'GET',
                    headers: {
                        Authorization : `Bearer ${token}`
                    }
                })
            
    
                const response_json = await response?.json() ; 
                
                if(response_json?.status === "ok"){
                    setIsAuthenticated(true)
                }else{
                    localStorage.removeItem("USER")
                    setIsAuthenticated(false)
                    setLocation({
                        locationName : ""  })
                    setLocationModal({
                        display : true 
                    })
                    setLocationCoords({
                        lat:28.5047063, 
                        long : 77.0500089 
                    })
                }
              
            }catch(error) {
                setIsAuthenticated(false) ;
            }
            
        }
        


    }

    useEffect(()=> {
        Check() ; 
    })

    const logout = () => {

        localStorage.removeItem("USER");

        setIsAuthenticated(false);

        setLocation({
            locationName : ""  })
        setLocationCoords({
            lat:28.5047063, 
            long : 77.0500089 
        })
        setLocationModal({
            display : true 
        })

        setModal({
            ...modal , 
            name : "afterLogOut" , 
            heading : "Logged Out!",
            description : "" , 
            message : "" , 
            navigate : "" ,
            display : true 
        }) 

      };
    
    return { isAuthenticated, logout , setIsAuthenticated};
    

}

export default useIsAuthenticated ; 

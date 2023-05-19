import { useState  , useEffect , useContext} from "react";
import ModalContext from "../utils/ModalContext";
import LocationContext from "./LocationContext";


const useIsAuthenticated = () => {

    const [isAuthenticated , setIsAuthenticated] = useState(null) ; 
    const {modal ,setModal} = useContext(ModalContext) ; 
    const {setLocation} = useContext(LocationContext) ;  
    const {setLocationCoords} = useContext(LocationContext) ; 
    const {setLocationModal} = useContext(LocationContext) ; 


    async function Check() {
        
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
                setIsAuthenticated(false)
            }
          
        }catch(error) {
            setIsAuthenticated(false) ;
        }


    }


    useEffect(()=> {
        console.log("inside effect" , isAuthenticated) ; 
        Check() ; 
    } )

    const logout = () => {
        localStorage.removeItem("USER");
        setIsAuthenticated(false);
        setModal({
            ...modal , 
            name : "afterLogOut" , 
            heading : "Logged Out!",
            navigate : "/" , 
            description : "" , 
            message : "" , 
            display : true 
        }) 
        setLocation({
            locationName : ""  })
        setLocationCoords({
            lat:28.5047063, 
            long : 77.0500089 
        })
        setLocationModal({
            display : true 
        })
      };
    
    return { isAuthenticated, logout , setIsAuthenticated};
    

}

export default useIsAuthenticated ; 

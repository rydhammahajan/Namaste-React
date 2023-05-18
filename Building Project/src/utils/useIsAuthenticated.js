import { useState  , useEffect , useContext} from "react";
import ModalContext from "../utils/ModalContext"


const useIsAuthenticated = () => {

    const [isAuthenticated , setIsAuthenticated] = useState(null) ; 
    const {modal ,setModal} = useContext(ModalContext) ; 


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
        Check() ; 
    } ,[isAuthenticated])

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
      };
    
    return { isAuthenticated, logout , setIsAuthenticated};
    

}

export default useIsAuthenticated ; 

import { useState  , useEffect} from "react";

const useIsAuthenticated = () => {

    const [isAuthenticated , setIsAuthenticated] = useState(false) ; 

    async function Check() {
        
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
                setIsAuthenticated(true)
            }else{
                setIsAuthenticated(false)
            }
          
        }catch(error) {
            setIsAuthenticated(false) ;
            console.log(error) ;
        }
    }

    useEffect(()=> {
        Check() ; 
    }, [])

    return isAuthenticated ; 

}

export default useIsAuthenticated ; 
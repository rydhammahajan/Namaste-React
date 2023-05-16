import { useState  , useEffect} from "react";

const useIsAuthenticated = () => {

    const [isAuthenticated , setIsAuthenticated] = useState(null) ; 

    async function Check() {
        
        try{
            const token = await JSON.parse(localStorage.getItem("USER"))?.accessToken;
            const response = await fetch("https://www.melivecode.com/api/auth/user" , {
                method: 'GET',
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })

            const response_json = await response.json() ; 
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
    } , [])

    const logout = () => {
        localStorage.removeItem("USER");
        setIsAuthenticated(false);
      };
    
      return { isAuthenticated, logout , setIsAuthenticated };
     

}

export default useIsAuthenticated ; 
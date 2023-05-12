import {useState ,  useEffect} from "react" ; 
import {Link, useNavigate} from "react-router-dom" ; 
import { USER_AUTHENTICATE_API } from "../config";
const image = require("../assets/side.jpg")


const LogIn = () => {

    let [email , setEmail] = useState(""); 
    let [password , setPassword] = useState("");
    let [buttonState  , setButtonState] = useState(false) ;
    let [isPasswordDirty , setIsPasswordDirty ] = useState(false) ; 
    let [isEmailDirty , setEmailDirty ] = useState(false) ; 
    let [logInError , setLogInError] = useState("") ; 

    const navigate = useNavigate() ;  //Navigate Hook


    function CheckFormSubmission() {
        if(email !== "" && password !== "") {
            return true;
        }
        return false ; 
    }

    async function SendLogInRequest(){

        try{
            const response = await fetch(USER_AUTHENTICATE_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username : email,
                password : password , 
                expiresIn : 60000000000 
            })
          }) ;
         const response_json = await response.json() ; 

         if(response_json.status === "ok") {

            localStorage.setItem("accessToken" , response_json.accessToken) ;  
            navigate("/") ;
            
         } 
         else{
            setLogInError(response_json.message)
         }
        }catch(error){
            console.log(error) ; 
        }
        
    }

    useEffect(()=>{

        if(CheckFormSubmission()){
            setButtonState(true) 
        }else{
            setButtonState(false) 
        }

    }, [email , password])


    return (

        <div className="d-flex justify-content-center align-items-center background-component">


            

            <div className="d-flex flex-column p-5 gap-2 signup-login-box justify-content-around ">

                <img className = "signup-login-right-side" src = {image}/>

                <div className="d-flex flex-column position-absolute  p-3 " style={{top : "10px" , right : "40px"}}>
                    <span className="fs-4 text-light h1">Welcome</span>
                    <span className="fs-4 text-light h1">to the planet of</span>
                    <span className="h1 text-light" style={{fontSize : "45px"}}>Flavour Finders</span>
                </div>

                { logInError != "" && <div className="text-danger fs-5">{logInError} :( <br></br>Looks like this user doesn't exist!</div> 
                }

                <h1 className=" text-color ">Login</h1>

                <label className="fs-5 text-secondary">Email Id<br/>
                    <input className = " mt-1 form-input" placeholder="abcd@email.com" type = "email"
                    onChange = {(e)=>{
                        setEmail(e.target.value) 
                        setEmailDirty(true) 
                    }} required />
                    {
                        isEmailDirty && email === "" ? <p className="text-danger small-fs">*Email is required</p> :<p></p>  
                    }
                </label>
                

                <label className="fs-5 text-secondary">Password<br/>
                    <input type="password" className = " form-input  mt-1"
                    onChange = {(e)=>{
                        setPassword(e.target.value)
                        setIsPasswordDirty(true) ; 
                    }} 

                    required/>

                    {
                        isPasswordDirty && password === "" ? <p className="text-danger small-fs">*Password is required</p>  : <p></p>
                    }
                </label>

                
    

                <button className="form-button fs-3  " disabled={!buttonState ? true : false} 
                onClick = {() => {SendLogInRequest() ;}} type = "submit">Submit</button>

                <p className="fs-6 h1" >A new user?  <Link to = "/signup" className="text-color"><span>SignUp </span></Link></p>

            </div>
        </div>
        
    )

}

export default LogIn ; 

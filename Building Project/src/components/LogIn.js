import {useState ,  useEffect , useContext} from "react" ; 
import {Link} from "react-router-dom" ; 
import { USER_AUTHENTICATE_API } from "../config";
import ModalContext from "../utils/ModalContext";
import Modal from "./Modal";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import HeaderContext from "../utils/HeaderContext";




const LogIn = () => {

    const [email , setEmail] = useState(""); 
    const [password , setPassword] = useState("");
    const [buttonState  , setButtonState] = useState(false) ;
    const [isPasswordDirty , setIsPasswordDirty ] = useState(false) ; 
    const [isEmailDirty , setEmailDirty ] = useState(false) ; 
    const [logInError , setLogInError] = useState("") ; 
    const {modal , setModal} = useContext(ModalContext)
    const image = require("../assets/side.jpg")
    const {setIsAuthenticated } = useIsAuthenticated() ; 
    const {setPage} = useContext(HeaderContext) ;

    useEffect(()=>{
        setPage({
            currentPage : "login" ,
        })
    }, [])



    
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

         if(response_json?.status === "ok") {
           
            localStorage.setItem('USER', JSON.stringify({
                ...response_json?.user,
                accessToken: response_json?.accessToken
            })); 
            
            setIsAuthenticated(true) ; 

            setModal({

                ...modal ,
                name : "afterLogIn" , 
                heading : "Login Successful",
                navigate : "/" , 
                description : "" , 
                message : "" , 
                display : true 
            })        
            
         
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

        <>
        {modal.display === true && modal.name === "afterLogIn" && <Modal/>}
        <div className="d-flex justify-content-center align-items-center background-component">


            

            <div className="d-flex flex-column p-3  my-5 gap-2 signup-login-box justify-content-around col-11 col-sm-6 col-lg-5 col-xl-4">

                <img className = "signup-login-right-side" src = {image}/>

                <div className="d-flex flex-column position-absolute  p-3 " style={{top : "40px" , left : "40px"}}>
                    <span className="fs-4 text-light ">Welcome</span>
                    <span className="fs-4 text-light ">to the planet of</span>
                    <span className="fs-2 h1 text-light" style={{fontSize : "45px"}}>Flavour Finders</span>
                </div>

                <div className="d-flex align-items-center py-5 gap-3 flex-column">

                <h1 className=" text-color ">Login</h1>

                <label className="fs-5 text-secondary">Email Id<br/>
                    <input className = " mt-1 form-input" placeholder="abcd@email.com" type = "email"
                    onChange = {(e)=>{
                        setEmail(e.target.value) 
                        setEmailDirty(true) 
                        setLogInError("")
                    }} required />

                    {
                        isEmailDirty && email === "" && <p className="text-danger small-fs">*Email is required</p>
                    }
                    
                </label>
                

                <label className="fs-5 text-secondary">Password<br/>
                    <input type="password" className = " form-input  mt-1"
                    onChange = {(e)=>{
                        setPassword(e.target.value)
                        setIsPasswordDirty(true) ; 
                        setLogInError("")
                    }} 

                    required/>

                    {
                        isPasswordDirty && password === "" ? <p className="text-danger small-fs">*Password is required</p>  : <p></p>
                    }
                </label>

                { logInError != "" && <div className="text-danger fs-5">{logInError} ! <br></br>email and/or password not valid</div> 
                }
                
    

                <button className="form-button fs-3  " disabled={!buttonState ? true : false} 
                onClick = {() => { SendLogInRequest() ;}} type = "submit">Submit</button>

                <p className="fs-6 h1" >A new user?  <Link to = "/signup" className="text-color"><span>SignUp </span></Link></p>
                </div>
                

            </div>
        </div>
        </>
        
    )

}

export default LogIn ; 

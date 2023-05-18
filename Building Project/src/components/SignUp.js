import {useEffect, useState , useContext} from "react"
import {Link} from "react-router-dom";
import { CREATE_USER_API } from "../config";
import ModalContext from "../utils/ModalContext";
import Modal from "./Modal";

const image = require("../assets/side.jpg")
const SignUp = () => {

    const [firstName , setFirstName] = useState("") ; 
    const [lastName , setLastName] = useState("") ; 
    const [email , setEmail] = useState(""); 
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [buttonState  , setButtonState] = useState(false) ;
    const [isConfirmPasswordValid , setIsConfirmPasswordValid ] = useState(true) ; 
    const [isConfirmPasswordDirty , setIsConfirmPasswordDirty ] = useState(false) ; 
    const [isPasswordDirty , setIsPasswordDirty ] = useState(false) ; 
    const [isEmailDirty , setEmailDirty ] = useState(false) ; 
    const [signUpError , setSignUpError] = useState("") ; 
    const {modal , setModal} = useContext(ModalContext) ; 

    
    function CheckPasswordValidation(){
        if(confirmPassword !== password && isConfirmPasswordDirty) {
            setIsConfirmPasswordValid(false) ; 
        }else{
            setIsConfirmPasswordValid(true) ; 
        }
        
    }

    function CheckFormSubmission() {
        if(email !== "" && password !== "" && password.length >= 8 && password === confirmPassword ) {
            return true;
        }
        return false ; 
    }

    async function SendSignUpRequest(){

        try{
            const response = await fetch(CREATE_USER_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
              fname : firstName,
              lname : lastName,
              username :email , 
              password : password,
              email : email , 
              avatar : 'null',
            })
          }) ;
         const response_json = await response.json() ; 

         console.log(response_json) ; 

         if(response_json.status === "ok") {
            setModal({

                ...modal ,
                name : "afterSignUp" , 
                heading : "Welcome",
                message : "Account Created Successfully!" , 
                description : "Complete next steps to start ordering food❤️" , 
                navigate : "/login" , 
                display : true 
            })
            
         } 
         else{
            setSignUpError(response_json.message)
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

    }, [email , confirmPassword , password])

    useEffect(() => {
        CheckPasswordValidation() ;
    } , [password , confirmPassword])

    return (

        <>
        {modal.name === "afterSignUp" && modal.display === true && <Modal/>} 
        <div className="d-flex justify-content-center align-items-center background-component">


            

            <div className="d-flex flex-column p-5 m-5 gap-2 signup-login-box justify-content-around ">

                <img className = "signup-login-right-side" src = {image}/>

                <div className="d-flex flex-column position-absolute  p-3 " style={{top : "70px" , right : "40px"}}>
                    <span className="fs-4 text-light h1">Welcome</span>
                    <span className="fs-4 text-light h1">to the planet of</span>
                    <span className="h1 text-light" style={{fontSize : "45px"}}>Flavour Finders</span>
                </div>

                <h1 className=" text-color ">SignUp</h1>

                <label className="fs-5 text-secondary">First Name<br/>
                    <input className = " mt-1 form-input"  required
                    onChange={(e)=>{
                        setFirstName(e.target.value)
                        setSignUpError("") ; 
                    }}
                    />
                </label>
            
                <label className="fs-5 text-secondary">Last Name<br/>
                    <input className = " mt-1 form-input" required 
                        onChange={(e)=>{
                        setLastName(e.target.value)
                        setSignUpError("") ; 
                    }}
                    />
                </label>

                <label className="fs-5 text-secondary">Email Id<br/>
                    <input className = " mt-1 form-input" placeholder="abcd@email.com" type = "email"
                    onChange = {(e)=>{
                        setEmail(e.target.value) 
                        setEmailDirty(true) 
                        setSignUpError("") ; 
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
                        setSignUpError("") ; 
                    }} 

                    required/>

                    {
                        isPasswordDirty ? 
                            (password.length < 8 ? <p className="text-danger small-fs">*Min 8 characters required</p> : <p></p> ) : <p></p>
                    }
                </label>

                <label className="fs-5 text-secondary">Confirm Password<br/>
                    <input type="password "  className = " mt-1 form-input"
                    onChange = {(e)=>{
                        setConfirmPassword(e.target.value) ;
                        setIsConfirmPasswordDirty(true) ; 
                        setSignUpError("") ; 
                    }}
                    required/>
                    {
                        isConfirmPasswordValid ? <p></p> : <p className="text-danger small-fs">*Password & Confirm Password must be same</p> 
                    }
                </label>
                
                { signUpError != ""  && <div className="text-danger fs-5">SignUp Failed !<br></br>Looks like this {signUpError} already!</div>
                }
    

                <button className="form-button fs-3  " disabled={!buttonState ? true : false} 
                onClick = {() => {SendSignUpRequest() ;}} type = "submit">Submit</button>

                <p className="fs-6 h1" >Already an existing user?  <Link to = "/login" className="text-color"><span>Login</span></Link></p>

            </div>
        </div>
        </>

        
    )

}

export default SignUp  ;

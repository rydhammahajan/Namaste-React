import {useEffect, useState} from "react"
import { useNavigate , Link} from "react-router-dom";
import { CREATE_USER_API } from "../config";
const image = require("../assets/side.jpg")
const SignUp = () => {

    let [email , setEmail] = useState(""); 
    let [password , setPassword] = useState("");
    let [confirmPassword , setConfirmPassword] = useState("");
    let [buttonState  , setButtonState] = useState(false) ;
    let [isConfirmPasswordValid , setIsConfirmPasswordValid ] = useState(true) ; 
    let [isConfirmPasswordDirty , setIsConfirmPasswordDirty ] = useState(false) ; 
    let [isPasswordDirty , setIsPasswordDirty ] = useState(false) ; 
    let [isEmailDirty , setEmailDirty ] = useState(false) ; 
    let [signUpError , setSignUpError] = useState("") ; 

    const navigate = useNavigate() ;  //Navigate Hook

    
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
              fname : 'null',
              lname : 'null',
              username :email , 
              password : password,
              email : email , 
              avatar : 'null',
            })
          }) ;
         const response_json = await response.json() ; 

         if(response_json.status === "ok") {
            navigate("/") ;
            
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

        <div className="d-flex justify-content-center align-items-center background-component">


            

            <div className="d-flex flex-column p-5 gap-2 signUp-box justify-content-around ">

                <img className = "signup-image" src = {image}/>

                <div className="d-flex flex-column position-absolute  p-3 " style={{top : "10px" , right : "40px"}}>
                    <span className="fs-4 text-light h1">Welcome</span>
                    <span className="fs-4 text-light h1">to the planet of</span>
                    <span className="h1 text-light" style={{fontSize : "45px"}}>Flavour Finders</span>
                </div>

                { signUpError != ""  && <div className="text-danger fs-5">SignUp Failed :( <br></br>Looks like this {signUpError} already!</div>
                }

                <h1 className=" text-color ">SignUp</h1>

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
                        isPasswordDirty ? 
                            (password.length < 8 ? <p className="text-danger small-fs">*Min 8 characters required</p> : <p></p> ) : <p></p>
                    }
                </label>

                <label className="fs-5 text-secondary">Confirm Password<br/>
                    <input type="password "  className = " mt-1 form-input"
                    onChange = {(e)=>{
                        setConfirmPassword(e.target.value) ;
                        setIsConfirmPasswordDirty(true) ; 
                    }}
                    required/>
                    {
                        isConfirmPasswordValid ? <p></p> : <p className="text-danger small-fs">*Password & Confirm Password must be same</p> 
                    }
                </label>
                
    

                <button className="form-button fs-3  " disabled={!buttonState ? true : false} 
                onClick = {() => {SendSignUpRequest() ;}} type = "submit">Submit</button>

                <p className="fs-6 h1" >Already an existing user?  <Link to = "/login" className="text-color"><span>Login</span></Link></p>

            </div>
        </div>

        
    )

}

export default SignUp  ;

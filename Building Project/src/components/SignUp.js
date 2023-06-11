import {useEffect, useState , useContext} from "react"
import {Link} from "react-router-dom";
import { CREATE_USER_API } from "../config";
import ModalContext from "../utils/ModalContext";
import Modal from "./Modal";
import HeaderContext from "../utils/HeaderContext";

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
    const [isFirstNameDirty , setIsFirstNameDirty ] = useState(false) ; 
    const [isLastNameDirty, setIsLastNameDirty ] = useState(false) ; 
    const [signUpError , setSignUpError] = useState("") ; 
    const [onSubmit , setOnSubmit]  = useState(false)  ; 
    const {modal , setModal} = useContext(ModalContext) ; 
    const {setPage} = useContext(HeaderContext) ;



    useEffect(()=>{
        setPage({
            currentPage : "signup" ,
        })
    }, [])

    function ValidEmailPattern(){
        const pattern = "^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z]+$"
        const ans = email.match(pattern) ; 
        return ans ; 
    }
    function ValidNamePattern(text){
        const pattern = "^[a-zA-Z\s]+$"
        const ans = text.match(pattern) ; 
        return ans ;
    }
    function ValidPattern(){
        return ValidEmailPattern() && ValidNamePattern(firstName) && ValidNamePattern(lastName) ; 
    }
    
    function CheckPasswordValidation(){
        if(confirmPassword !== password && isConfirmPasswordDirty) {
            setIsConfirmPasswordValid(false) ; 
        }else{
            setIsConfirmPasswordValid(true) ; 
        }
        
    }

    function CheckFormSubmission() {

        setOnSubmit(false) ; 
        if(email !== "" && password !== "" && password.length >= 8 && password === confirmPassword ) {
            return true;
        }
        return false ; 
    }

    async function SendSignUpRequest(){

        if(!ValidPattern()) {
            setOnSubmit(true) ; 
            return ;
        }

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
                description : "Login next to start your session!❤️" , 
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
        <div className="d-flex justify-content-center align-items-center background-component ">


            

            <div className="d-flex flex-column p-3 my-5 gap-2 signup-login-box justify-content-around col-11 col-sm-6 col-lg-5 col-xl-4 ">

                <img className = "signup-login-right-side " src = {image}/>

                <div className="d-flex flex-column position-absolute  p-3 " style={{top : "40px" , left : "40px"}}>
                    <span className="fs-4 text-light ">Welcome</span>
                    <span className="fs-4 text-light ">to the planet of</span>
                    <span className="fs-2 h1 text-light" style={{fontSize : "45px"}}>Flavour Finders</span>
                </div>

                <div className="d-flex align-items-center py-5 px-2 gap-3 flex-column">
                <h1 className=" text-color ">SignUp</h1>

                <label className="fs-5 text-secondary">First Name<br/>
                    <input className = " mt-1 form-input"  required
                    onChange={(e)=>{
                        setFirstName(e.target.value)
                        setSignUpError("") ; 
                        setIsFirstNameDirty(true) ; 
                    }}
                    />
                    {
                        isFirstNameDirty && onSubmit && !ValidNamePattern(firstName) && firstName !== "" && <p className="text-danger small-fs">*Please Enter a valid alphabetical name</p>
                    }
                </label>
            
                <label className="fs-5 text-secondary">Last Name<br/>
                    <input className = " mt-1 form-input" required 
                        onChange={(e)=>{
                        setLastName(e.target.value)
                        setSignUpError("") ; 
                        setIsLastNameDirty(true) ; 
                    }}
                    />
                    {
                        isLastNameDirty && onSubmit && !ValidNamePattern(lastName) && lastName !== "" && <p className="text-danger small-fs">*Please Enter a valid alphabetical name</p>
                    }
                </label>

                <label className="fs-5 text-secondary">Email Id<br/>
                    <input className = " mt-1 form-input" placeholder="abcd@email.com" type = "email"
                    onChange = {(e)=>{
                        setEmail(e.target.value) 
                        setEmailDirty(true) 
                        setSignUpError("") ; 
                    }} required />
                    {
                        isEmailDirty && email === "" && <p className="text-danger small-fs">*Email is required</p> 
                    }
                    {
                        isEmailDirty && onSubmit && !ValidEmailPattern() && email !== "" && <p className="text-danger small-fs">*Please Enter a valid email <i className="text-secondary">abc@domainname</i></p>
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
                    <input type="password"  className = " mt-1 form-input"
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
        </div>
        </>

        
    )

}

export default SignUp  ;

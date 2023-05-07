import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
const SignUp = () => {

    let [email , setEmail] = useState(""); 
    let [password , setPassword] = useState("");
    let [confirmPassword , setConfirmPassword] = useState("");
    let [buttonState  , setButtonState] = useState("false") ;
    let [isConfirmPasswordValid , setIsConfirmPasswordValid ] = useState(true) ; 
    let [isConfirmPasswordDirty , setIsConfirmPasswordDirty ] = useState(false) ; 
    let [isPasswordDirty , setIsPasswordDirty ] = useState(false) ; 
    let [isEmailDirty , setEmailDirty ] = useState(false) ; 
    let [signUpError , setSignUpError] = useState("") ; 

    const navigate = useNavigate() ; 

    
    function CheckPasswordValidation(){
        if(confirmPassword !== password && isConfirmPasswordDirty) {
            setIsConfirmPasswordValid(false) ; 
            console.log("Password & Confirm Password should be same") ; 
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

    async function SendPostRequest(){

        try{
            const response = await fetch("https://www.melivecode.com/api/users/create", {
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
            console.log("Yayyy!") ; 
            navigate("/") ;
            
         } 
         else{
            setSignUpError(response_json.message)
            // console.log(response_json.message) ; 
         }
        }catch(error){
            console.log(error) ; 
        }
        
    }

    useEffect(()=>{

        if(CheckFormSubmission() === true){
            setButtonState("true") 
        }else{
            setButtonState("false") 
        }

    }, [email , confirmPassword , password])

    useEffect(() => {
        CheckPasswordValidation() ;
    } , [password , confirmPassword])
    return (

        <div className="d-flex justify-content-center align-items-center signUp-component">


            

            <div className="d-flex flex-column p-5 gap-2 signUp-box justify-content-center align-items-between">

                <img className = "signup-image" src = "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8"/>

                <div className="d-flex flex-column position-absolute  p-3 " style={{top : "10px" , right : "70px"}}>
                    <span className="fs-4 text-light h1">Welcome</span>
                    <span className="fs-4 text-light h1">to the planet of</span>
                    <span className="h1 text-color" style={{fontSize : "40px"}}>Flavour Finders</span>
                </div>

                { signUpError != "" ? <div className="text-danger fs-5">SignUp Failed :( <br></br>Looks like this {signUpError} already!</div> : <></>
                }

                <h1 className=" text-color ">SignUp</h1>

                <label className="fs-5 text-secondary">Email Id<br/>
                    <input className = " mt-1 signUp-input" placeholder="abcd@email.com" type = "email"
                    onChange = {(e)=>{
                        setEmail(e.target.value) 
                        setEmailDirty(true) 
                    }} required />
                    {
                        isEmailDirty && email === "" ? <p className="text-danger small-fs">*Email is required</p> :<p></p>  
                    }
                </label>
                

                <label className="fs-5 text-secondary">Password<br/>
                    <input type="password" className = " signUp-input  mt-1"
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
                    <input type="password "  className = " mt-1 signUp-input"
                    onChange = {(e)=>{
                        setConfirmPassword(e.target.value) ;
                        setIsConfirmPasswordDirty(true) ; 
                    }}
                    required/>
                    {
                        isConfirmPasswordValid ? <p></p> : <p className="text-danger small-fs">*Password & Confirm Password must be same</p> 
                    }
                </label>
                
    

                <button className="submit-button fs-3  " disabled={buttonState === "false" ? true : false} 
                onClick = {() => {SendPostRequest() ;}} type = "submit">Submit</button>

                <p className="text-color fs-6 h1" >Already an existing user? Login here.</p>

            </div>
            </div>

       

    )

}

export default SignUp  ;

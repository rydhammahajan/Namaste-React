import {useEffect, useState} from "react"
const SignUp = () => {

    let [email , setEmail] = useState(""); 
    let [password , setPassword] = useState("");
    let [confirmPassword , setConfirmPassword] = useState("");
    let [buttonState  , setButtonState] = useState("false") ; 

    function CheckPasswordValidation(){

        if(confirmPassword !== password) {

            console.log("Password & Confirm Password should be same") ; 
        }

    }


    function CheckFormSubmission() {

        if(email !== "" && password !== "" && password === confirmPassword ) {
            return true;
        }
        return false ; 

    }

    useEffect(()=>{

        if(CheckFormSubmission() === true){
            setButtonState("true") 
        }else{
            setButtonState("false") 
        }

    }, [email , confirmPassword , password])

    return (

        <div className="d-flex justify-content-center algin-items-center border ">

            <div className="border border-success d-flex flex-column p-5 gap-3">
                <h1>SignUp</h1>
                <label>Email Id</label>
                <input placeholder="abcd@email.com"
                onChange = {(e)=>{
                    setEmail(e.target.value)
                }}
                />
                <label>Password</label>
                <input
                onChange = {(e)=>{
                    setPassword(e.target.value)
                }}
                
                />
                <label>Confirm Password</label>
                <input
                onChange = {(e)=>{
                    setConfirmPassword(e.target.value)
                    CheckPasswordValidation() ; 
                }}
                />

                <button  disabled={buttonState === "false" ? true : false}>Submit</button>
                

            </div>

        </div>

    )

}

export default SignUp  ;
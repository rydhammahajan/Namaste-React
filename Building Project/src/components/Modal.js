import { useState } from "react";

const Modal = () => {

    [modalDisplay , setModalDisplay] = useState(true) ;

    return (

         modalDisplay && <div className="modal d-flex align-items-center justify-content-center position-fixed">
            <div className="d-flex flex-column justify-content-center align-items-center p-5 modal-body position-relative">
                <i className="fa-solid fa-x position-absolute" onClick={()=>{
                    setModalDisplay(false) ; 
                }}></i>
                <h1 className="text-color">Awesome Job!</h1>
                <img src = {require("../assets/verifiedGif.gif")} height = "100px"/>
                <span className="fs-5">Your profile has been successfully updated</span>
                <span className="fs-5"> We're excited to have you on board🥳 </span>
                
            </div>
        </div>

    )
}
export default Modal ; 




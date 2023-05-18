import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import ModalContext from "../utils/ModalContext";  



const Modal = () => {

    const {modal , setModal} = useContext(ModalContext) ;
    const navigate = useNavigate() ;


    return (

         <div className="modal d-flex align-items-center justify-content-center position-fixed">
            <div className="d-flex flex-column justify-content-center align-items-center p-5 modal-body position-relative">
                <i className="fa-solid fa-x position-absolute" onClick={()=>{
                    setModal({
                        ...modal ,
                        display : false , 
                        name : "" 
                    }) ; 
                    if(modal.navigate !== "")navigate(modal.navigate) ; 
                }}></i>

                <h1 className="text-color">{modal.heading}</h1>
                <img src = {require("../assets/verifiedGif.gif")} height = "100px"/>
                <span className="fs-5">{modal.message !== "" && modal.message}</span>
                <span className="fs-5"> {modal.description !== "" && modal.description} </span>

                
            </div>
        </div>

    )
}
export default Modal ; 

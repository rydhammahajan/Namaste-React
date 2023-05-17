import { useContext} from "react";
import ModalContext from "../utils/ModalContext";  



const Modal = () => {

    const {modal , setModal} = useContext(ModalContext) ;

    return (

         <div className="modal d-flex align-items-center justify-content-center position-fixed">
            <div className="d-flex flex-column justify-content-center align-items-center p-5 modal-body position-relative">
                <i className="fa-solid fa-x position-absolute" onClick={()=>{
                    setModal({
                        ...modal ,
                        display : false
                    }) ; 
                }}></i>

                <h1 className="text-color">Awesome Job!</h1>
                <img src = {require("../assets/verifiedGif.gif")} height = "100px"/>
                <span className="fs-5">Your Location has been successfully updated</span>
                <span className="fs-5"> We're excited to deliver food at your door🥳 </span>

                
            </div>
        </div>

    )
}
export default Modal ; 

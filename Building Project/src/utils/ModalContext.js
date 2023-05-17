import { createContext } from "react";

const ModalContext = createContext({

    modal : {
        name : "" , 
        heading : "" , 
        imageSource  :"" , 
        message : "" , 
        description : "" , 
        display : false ,  
        navigate : ""

    }
})

export default ModalContext
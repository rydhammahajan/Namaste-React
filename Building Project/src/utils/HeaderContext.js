import { createContext } from "react";

const HeaderContext = createContext({
    page : {
        currentPage : "" , 
    }
}) 

export default HeaderContext ;  
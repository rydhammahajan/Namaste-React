import { createContext } from "react";

const UserContext = createContext({

    user : {
        fname :  "" , 
        lname : "" , 
        email : "" , 
    }
})

export default UserContext ;
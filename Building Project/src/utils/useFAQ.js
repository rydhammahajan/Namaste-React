import { useEffect, useState } from "react"
import { FAQ_API } from "../config";

//Creating Hook -> Hook is nothing , just a normal function 
const useFAQ = () => {


    const[questions , setQuestions] = useState() ; 

    async function fetchFAQ (){

        const data = await fetch(FAQ_API) ; 
        const json_data = await data.json() ; 
        setQuestions(json_data?.data?.issues?.data) ; 
    }

    useEffect(()=>{
        fetchFAQ() ; 
    } , [])

    return questions ; 

}

export default useFAQ ; 
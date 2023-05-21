import { useEffect, useState } from "react";

const useQuickMenu = (id)=>{

    const [quickMenu , setQuickMenu] = useState() ;

    useEffect(()=>{
        fetchQuickMenu() ; 
    } , [])

    async function fetchQuickMenu(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/quick?menuId=${id}&categories=true`) ; 
        const json_data = await data.json();
        if(!json_data || !json_data?.data?.menu?.items)setQuickMenu(null) ;  
        else setQuickMenu(Object.values(json_data?.data?.menu?.items))
    }

    return quickMenu ;

}

export default useQuickMenu ; 
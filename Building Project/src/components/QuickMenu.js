import useQuickMenu from "../utils/useQuickMenu";
import { IMG_CLOUD_LINK } from "../config";
function dispalyMenu({name , cloudinaryImageId}) {

    return (

        <div className="d-flex flex-column align-items-center justify-content-center quick-menu-item" style={{width : "40%"}}>
            <img src = {cloudinaryImageId ? IMG_CLOUD_LINK+cloudinaryImageId : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcUMtbrLIcDqTbpneyRpsAEs4nsoGYY5H3g&usqp=CAU"} height = {"50px"} width={"100px"}/>
            <div className="text-truncate text-center" style={{width:"100px"}}>{name}</div>
        </div>

    )

}

const QuickMenu = ({id}) => {
    
    const data = useQuickMenu(id)?.slice(0 ,6);
    return(
        data &&
        <div className="d-flex flex-column align-items-center quick-menu-component rounded-1 p-3 gap-3" key = {id}>

            <h5>Quick Menu</h5>

            <div className="d-flex flex-wrap gap-2 justify-content-around">
            {
                data.map((item)=>{
                    return dispalyMenu(item) ; 
                 })
            }
            </div>

            <div className="quick-menu-item">More items...</div>
        </div>
    )
}

export default QuickMenu ; 
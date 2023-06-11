import { IMG_CLOUD_LINK } from "../config";
import ManageCart from "./ManageCart";
const RecommendedList = ({item}) => {
    const {isVeg , name , defaultPrice , price ,  description , imageId , id} = item || {};
    return (
        <div className="d-flex py-3 px-5 justify-content-between restaurant-menu-section my-4 gap-5 col-11 col-sm-10">

            <div className="d-flex flex-column justify-content-center ">

            {(isVeg !== 1)? (<img src="https://img.icons8.com/color/48/null/non-vegetarian-food-symbol.png" height={"30px"} width={"30px"}/ >) : (<img src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png" height={"30px"} width={"30px"}/>
            )}

                <span className="h1 fs-5">{name}</span>

                <span className="text-secondary"> Rs.{price ?  price/100 : defaultPrice /100 }</span>

                <span className="text-secondary d-none d-sm-block " >{description}
                </span>

            </div>
            <div>
                <img src = {imageId ? IMG_CLOUD_LINK+ imageId: ""} height={"100px"}/>
                <ManageCart {...item} />
            </div>
        </div>
    )
}


export default RecommendedList ; 
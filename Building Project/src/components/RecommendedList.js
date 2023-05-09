import { IMG_CLOUD_LINK } from "../config";
const RecommendedList = ({item}) => {
    
    const {isVeg , name , price , description , imageId} = item || {}; 
    return (
        <div className="d-flex py-3 px-5 justify-content-between border">

            <div className="d-flex flex-column justify-content-center gap-1">

            {(isVeg !== 1)? (<img src="https://img.icons8.com/color/48/null/non-vegetarian-food-symbol.png" height={"30px"} width={"30px"}/ >) : (<img src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png" height={"30px"} width={"30px"}/>
            )}

                <span className="h1 fs-5">{name}</span>

                <span className="text-secondary">Rs. {price /100}</span>

                <span className="text-secondary">{description}
                </span>

            </div>
            <img src = {IMG_CLOUD_LINK+ imageId
            } height={"100px"}/>
        </div>
    )
}


export default RecommendedList ; 
import ManageCart from "./ManageCart";

const SpecialComboList = ({item}) =>{
        const {isVeg , name , price , description} = item || {} ; 
        return (
            <div className="d-flex py-3 px-5 justify-content-between  restaurant-menu-section my-4 col-11 col-sm-10">

                <div className="d-flex flex-column justify-content-center gap-1">

                {(isVeg !== 1)? (<img src="https://img.icons8.com/color/48/null/non-vegetarian-food-symbol.png" height={"30px"} width={"30px"}/ >) : (<img src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png" height={"30px"} width={"30px"}/>
                )}

                    <span className="h1 fs-5">{name}</span>

                    <span className="text-secondary  d-none d-sm-block ">Rs. {price /100}</span>

                    <span className="text-secondary">{description}
                    </span>

                </div>
                <div><ManageCart {...item}/></div>

            </div>
        )

}
export default SpecialComboList
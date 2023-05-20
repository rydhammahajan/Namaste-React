import { IMG_CLOUD_LINK } from "../config";
import ManageCart from "./ManageCart";
const CartItem = ({cartItem})=>{

    const {imageId , name , price , count , id} = cartItem ; 



    return (


        <div className="d-flex justify-content-between px-5 py-2 my-2 gap-5 single-cart-item border align-items-center" key = {id}>

        <div className="d-flex flex-column ">
        <span className="fs-6">{name}</span>
        <span className=" text-secondary">Price : Rs. {price/100}</span>
        <span className="text-secondary">Total : Rs. {(price*count).toFixed(2)/100}</span>
        </div>

        <div>
        {imageId && <img src = {IMG_CLOUD_LINK + imageId} height = "80px" width = "100px"/> }

        <ManageCart {...cartItem}/>
        </div>

        </div>

    )

}

export default CartItem ;
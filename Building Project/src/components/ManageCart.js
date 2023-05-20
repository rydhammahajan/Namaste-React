import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; 
import { addItem , removeItem , clearCart} from "../utils/Redux/cartSlice"; 

const ManageCart = ({name ,  defaultPrice , price , imageId , id})=>{

  const cartItems = useSelector(store => store.cart.items);
  const currentItem = cartItems.get(id) ; 
  const dispatch = useDispatch();


  function HandleAdd() {

        const rate = (price ? price : defaultPrice) ; 
        const newItem = {
        id : id , 
        name: name,
        imageId: imageId,
        price : rate , 
        };
        dispatch(addItem([id , newItem]));
    }

    function HandleRemove(){
        dispatch(removeItem(id));
    }


    return (

        <div className="add-button d-flex gap-2 mt-2 py-2 border bg-light rounded-1 justify-content-around " key = {id}>
           { currentItem && <i className="fa-solid fa-minus pt-1"  
            onClick={()=>{
                HandleRemove() ; 
            }}
            >
            </i>}

            {!currentItem ? <button className="fs-6 text-success h1 pt-1 border-0 bg-light"
            onClick={()=>{
                HandleAdd() ; 
            }}
            >ADD</button> : <span className="fs-6 text-success h1">{currentItem.count}</span> }

            {currentItem && <i class="fa-solid fa-plus pt-1" 
            onClick={()=>{
                HandleAdd() ; 
            }}
            ></i>}
        </div>

    )

}

export default ManageCart ;
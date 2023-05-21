import React, { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import CartItem from "./CartItem";
import LocationContext from "../utils/LocationContext";
import HeaderContext from "../utils/HeaderContext";
import Location from "./Location";
import { clearCart } from "../utils/Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "../utils/useIsAuthenticated"

const Cart = ()=>{

    const [cartItems , setCartItems] = useState() ; 

    let items = useSelector(store => store.cart.items); 
    const totalCost = useSelector(store => store.cart.totalCost); 
    const dispatch = useDispatch() ;
    const {locationModal} = useContext(LocationContext)
    const {setPage} = useContext(HeaderContext) ;
    const {isAuthenticated} = useIsAuthenticated()
    const navigate = useNavigate() ;

    useEffect(()=>{
        setPage({
            currentPage : "cart" ,
        })
    }, [])
9
    useEffect(()=>{
        items = items ? Array.from(items?.values()) :  [] ; 
        setCartItems(items) ; 

    } , [items])

    function HandleClearCart(){
        dispatch (clearCart()) ; 
    }

    useEffect(()=>{
        if(isAuthenticated === false){
            navigate("/login")
        }
    } , [isAuthenticated])
    return (

        <>
        {locationModal.display && <Location/>}
        {!cartItems || cartItems?.length < 1? ( 

            
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-5">

            <img src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy/2xempty_cart_yfxml0" height = "300px"/>

            <div className="h1 text-secondary">Your Cart is Empty</div>
            <div className="text-secondary">You can go to Restaurants page to view more restaurants.</div>

            <button className="p-3 fs-4 text background-color border-0 rounded-1"><Link to = "/restaurants" className= "text-light">Go to Restaurants</Link></button>

            </div>
        
        ) :      
        (
            <div className=" d-flex flex-column cart">

                
                <div className="d-flex justify-content-between text-light border-bottom py-4 px-4 position-sticky top-0 background-color" style={{zIndex : "5" }}>
                <span className=" fs-1 h1">Cart Items <i className="fa-solid fa-cart-shopping"></i></span>
                <button className="px-4 border-0 rounded-1 text-secondary" onClick = {()=>{
                    HandleClearCart() ; 
                }}>Clear Cart</button>
                </div>


                <div className="p-5 mx-5 d-flex flex-column gap-3">

                <div className="d-flex gap-3 ">


                    <div>
                    {
                        cartItems?.map((cartItem)=>{
                            return <CartItem cartItem = {cartItem}/>
                        })
                    }
                    </div>

                    <div className="d-flex flex-column border align-items-center gap-4 p-3 payment-box">
                    <span className="fs-3 h1">Want to Add more ?</span>
                    <Link to = "/restaurants"><button className = "form-button fs-5 p-3 text-center">Add more</button></Link>
                    <span><span className="fs-3 h1">Payment Info</span>
                    <i className ="fa-solid fa-wallet text-secondary fs-1 ps-3"></i></span>

                    <span className="text-secondary fs-4 border-top pt-3 border-dark">Amount To Be Paid :  Rs. {totalCost}</span>
                    </div>
                </div>
                
                </div>

            </div>
        
        )}
        </>
    

    )
}

export default Cart ; 
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import CartItem from "./CartItem";

const Cart = ()=>{

    const [cartItems , setCartItems] = useState() ; 
    let items = useSelector(store => store.cart.items); 
    


    useEffect(()=>{
        items = items ? Array.from(items?.values()) :  [] ; 
        setCartItems(items) ; 

    } , [items])


    return (
        !cartItems || cartItems?.length < 1? ( 

            <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-5">

            <img src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy/2xempty_cart_yfxml0" height = "300px"/>

            <div className="h1 text-secondary">Your Cart is Empty</div>
            <div className="text-secondary">You can go to Restaurants page to view more restaurants.</div>

            <button className="p-3 fs-4 text background-color border-0 rounded-1"><Link to = "/search" className= "text-light">Go to Restaurants</Link></button>

            </div>
        
        ) :      
        (
            <div className=" d-flex flex-column ">
                <div className="fs-1 h1 text-light border-bottom py-4 px-4 position-sticky top-0 background-color" style={{zIndex : "5" }}>Cart Items <i class="fa-solid fa-cart-shopping"></i></div>
                <div className="p-5 mx-5 d-flex flex-column gap-3">

                <div className="d-flex gap-3 justify-content-around">


                    <div>
                    {
                        cartItems?.map((cartItem)=>{
                            return <CartItem cartItem = {cartItem}/>
                        })
                    }
                    </div>

                    <div className="d-flex flex-column border align-items-center gap-4 p-5 payment-box">
                    <span className="fs-3 h1">Want to Add more ?</span>
                    <button class = "form-button fs-5 p-3 text-center">Add more</button>
                    <span><span className="fs-3 h1">Payment Info?</span>
                    <i className ="fa-solid fa-wallet text-secondary fs-1 ps-3"></i></span>
                    </div>
                </div>
                
                </div>

            </div>
        
        )
    

    )
}

export default Cart ; 
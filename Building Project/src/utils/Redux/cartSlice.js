import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';

enableMapSet();
const  cartSlice = createSlice({


    name : "cart"  , 

    initialState : {
        items : new Map() ,
        totalCost : 0 , 
    } , 

    reducers : {

        addItem: (state, action) => {

            const data = state.items.get(action.payload[0]) ; 
            data ? state.items.set(action.payload[0] ,{...action.payload[1]  , count: data.count+1})
            : 
            state.items.set(action.payload[0] ,{ ...action.payload[1] , count: 1 }) ;

            state.totalCost += (action.payload[1].price/100)
        },

        removeItem : (state , action) => {

            const data = state.items.get(action?.payload) ; 
            if(data.count > 1) {
                state.items.set(action.payload , {...data , count : data.count-1 })
            }else{
                state.items.delete(action.payload)
            } 
            state.totalCost -= (data.price/100)
        } ,

        clearCart : (state) => {
            state.items.clear() ;
            state.totalCost = 0 ; 
        }

    } 


})

export default cartSlice.reducer ; 
export const {addItem , removeItem , clearCart} = cartSlice.actions ; 
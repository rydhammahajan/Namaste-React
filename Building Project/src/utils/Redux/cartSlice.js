import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';

enableMapSet();
const  cartSlice = createSlice({


    name : "cart"  , 

    initialState : {
        items : new Map() ,
    } , 

    reducers : {

        addItem: (state, action) => {

            const data = state.items.get(action.payload[0]) ; 
            data ? state.items.set(action.payload[0] ,{...action.payload[1]  , count: data.count+1})
            : 
            state.items.set(action.payload[0] ,{ ...action.payload[1] , count: 1 }) ;
        },

        removeItem : (state , action) => {

            const data = state.items.get(action?.payload) ; 
            if(data.count > 1) {
                state.items.set(action.payload , {...data , count : data.count-1 })
            }else{
                state.items.delete(action.payload)
            } 
        } ,

        clearCart : (state) => {
            state.items.clear() ;
        }

    } 


})

export default cartSlice.reducer ; 
export const {addItem , removeItem , clearCart} = cartSlice.actions ; 
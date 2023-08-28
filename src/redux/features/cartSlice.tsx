import { productInterface } from "@/app/components/Products/page";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
    item : Array<productInterface>;
    totalAmount : number;
    totalQuantity : number;
}
const initialState : CartState = {
    item : [],
    totalAmount : 0,
    totalQuantity : 0
}
export const CartSlice = createSlice({
    name : "cart",
    initialState ,
    reducers :{
        addToCart(state : CartState,action : PayloadAction<{product : productInterface;quantity:number}>) {
            const newItem = action.payload.product;
            const existingItem = state.item.find((item)=>{item._id === newItem._id});
            state.totalQuantity = state.totalQuantity + action.payload.quantity;
            state.totalAmount = state.totalAmount + (action.payload.quantity * action.payload.product.price)
            
            if(!existingItem) {
                const totalPrice = newItem.price * action.payload.quantity
            }
        }
    }
})
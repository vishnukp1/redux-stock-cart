import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart: (state, action) => {
        const existingItem = state.item.find((item) => item.id === action.payload.id);

        if (!existingItem) {
          
          state.item.push({ ...action.payload });
        }

      
    },
    deletecart: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
    increaseQuantity:(state,action) =>{
        const item= state.item.find((item) => item.id === action.payload);
        if(item){
            item.quantity += 1
        }

    },
    decreaseQuantity:(state,action) =>{
        const item= state.item.find((item) => item.id === action.payload);
        if(item){
            item.quantity -= 1
            
          if(item.quantity === 0) {
           state.item = state.item.filter((item) => item.id !== action.payload);
          }
        }

    }
  },
});

export const { addcart, deletecart,increaseQuantity ,decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
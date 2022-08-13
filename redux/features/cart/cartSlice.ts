import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number,
  quantity: number
}

export interface CartState {
  productsList: Product[]
}

const initialState: CartState = {
  productsList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const id = action.payload
      const find = state.productsList.find((item) => item.id === id);
      
      if (find) {
        state.productsList = state.productsList.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      } else {
        state.productsList.push({
          id: action.payload,
          quantity: 1
        });
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export enum ProductSize {
  small = "small",
  medium = "medium",
  big = "big"
}

type Product = {
  id: number,
  size?: ProductSize,
  quantity: number
}

export interface CartState {
  productsList: Product[]
}

const initialState: CartState = {
  productsList: [],
}

interface IAddToCartPayload {
  id: number,
  size?: ProductSize,
  name: string;
  prices: number[];
  ingredients?: string[];
  imageUrl: string;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const find = state.productsList.find((item) => item.id === action.payload.id);
      
      if (find) {
        state.productsList = state.productsList.map((item) =>
          (item.id === action.payload.id && item.size === action.payload.size)
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      } else {
        state.productsList.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
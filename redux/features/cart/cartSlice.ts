import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export enum ProductSize {
  small = "small",
  medium = "medium",
  big = "big"
}

export type Product = {
  id: number,
  size?: ProductSize,
  quantity: number,
  name: string;
  prices: number[];
  ingredients?: string[];
  imageUrl: string;
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

interface IIncrementDecrementPayload {
  id: number,
  size?: ProductSize,
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
      const find = state.productsList.find((item) => item.id === action.payload.id && item.size === action.payload.size);
      
      if (find) {
        state.productsList = state.productsList.map((item) => {
          if(item.id === action.payload.id && item.size === action.payload.size) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } 

          return item
        })
          
      } else {
        state.productsList.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    increament(state, action: PayloadAction<IIncrementDecrementPayload>) {
      state.productsList = state.productsList.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    },
    decrement(state, action: PayloadAction<IIncrementDecrementPayload>) {
      state.productsList = state.productsList.map((item) =>
      item.id === action.payload.id && item.size === action.payload.size
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      );
    },
    removeFromCart(state, action: PayloadAction<IIncrementDecrementPayload>) {
      state.productsList = state.productsList.filter((item) =>
        !(item.id === action.payload.id && item.size === action.payload.size)
      );
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, increament, decrement, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
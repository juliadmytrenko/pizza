const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state) => state.cart;

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  )
);
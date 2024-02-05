import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
  name: "carrito",
  initialState: [],
  reducers: {
    setCarrito(state, action) {
      return action.payload;
    },
    addToCart(state, action) {
        return [...state, action.payload];
        console.log("payloa " + action.payload)
      },
  },
});

const { actions, reducer } = carritoSlice;
export const { setCarrito, addToCart } = actions;
export default reducer;
import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
  name: "carrito",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const nuevoCarrito = [...state];

      const existeEnElCarrito = nuevoCarrito.some(
        (item) => item.name === action.payload.name
      );

      if (existeEnElCarrito && action.payload.stock > 0) {
        return nuevoCarrito.map((itemCarrito) =>
          itemCarrito.name === action.payload.name &&
          itemCarrito.cantidad < action.payload.stock
            ? { ...itemCarrito, cantidad: itemCarrito.cantidad + 1 }
            : itemCarrito
        );
      } else if (action.payload.stock > 0) {
        return [...nuevoCarrito, { ...action.payload, cantidad: 1 }];
      } else {
        console.log(
          "El stock del producto es 0, no se puede agregar al carrito."
        );
        return nuevoCarrito;
      }
    },
    decrementarCantidad(state, action) {
      return state.map((itemCarrito) =>
        itemCarrito.name === action.payload.name && itemCarrito.cantidad > 1
          ? { ...itemCarrito, cantidad: itemCarrito.cantidad - 1 }
          : itemCarrito
      );
    },
    eliminarProducto(state, action) {
      return state.filter(
        (itemCarrito) => itemCarrito.name !== action.payload.name
      );
    },
    resetearCarrito(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = carritoSlice;
export const {
  addToCart,
  decrementarCantidad,
  eliminarProducto,
  resetearCarrito,
} = actions;
export default reducer;

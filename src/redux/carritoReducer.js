import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
  name: "carrito",
  initialState: [],
  reducers: {
   
    addToCart(state, action) {
      const nuevoCarrito = [...state];

  // 2. ¿Existe dentro del carrito el producto al que le estoy haciendo clic? (some)
  const existeEnElCarrito = nuevoCarrito.some(item => item.name === action.payload.name);

  if (existeEnElCarrito && action.payload.stock > 0) {
    // Si existe, actualiza la cantidad del producto en el carrito
    return nuevoCarrito.map(itemCarrito =>
      (itemCarrito.name === action.payload.name && itemCarrito.cantidad < action.payload.stock)
        ? { ...itemCarrito, cantidad: itemCarrito.cantidad + 1 }
        : itemCarrito
    );
  } else if (action.payload.stock > 0) {
    // Si no existe, agrega el nuevo producto al carrito con cantidad inicial de 1
    return [...nuevoCarrito, { ...action.payload, cantidad: 1 }];
  } else {
    // Puedes manejar el caso donde el stock es 0 según tus necesidades
    console.log("El stock del producto es 0, no se puede agregar al carrito.");
    return nuevoCarrito;
  }
    },
    decrementarCantidad(state, action) {
      return state.map(itemCarrito =>
        (itemCarrito.name === action.payload.name) && (itemCarrito.cantidad > 1)
          ? { ...itemCarrito, cantidad: itemCarrito.cantidad - 1 }
          : itemCarrito
      );
    },
    eliminarProducto(state, action) {
      return state.filter(itemCarrito =>
        itemCarrito.name !== action.payload.name
      );
    },
    resetearCarrito(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = carritoSlice;
export const { addToCart, decrementarCantidad, eliminarProducto, resetearCarrito } = actions;
export default reducer;
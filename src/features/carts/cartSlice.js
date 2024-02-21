import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        carts: [action.payload, ...state.carts],
      };
    },

    remove: (state, action) => {
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload),
      };
    },

    QtyUpdate: (state, action) => {
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === action.payload.id) {
            if (item.qty + action.payload.num >= 1) {
              return { ...item, qty: item.qty + action.payload.num };
            } else {
              return item;
            }
          } else {
            return item;
          }
        }),
      };
    },

    newPrice: (state, action) => {
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, NewPrice: item.price * item.qty };
          } else {
            return item;
          }
        }),
      };
    },
  },

  extraReducers: (builder) => {},
});

export const { add, remove, QtyUpdate, newPrice } = cartSlice.actions;

export default cartSlice.reducer;

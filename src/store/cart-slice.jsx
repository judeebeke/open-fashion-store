import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: "",
    totalQuantity: "",
  },
  reducers: {
    addProductToCart(state, action) {
      let currentItem = state.items.find((item) => {
        return item.id === action.payload.id;
      });

      let cartItem = {
        id: action.payload.id,
        image: action.payload.image,
        quantity: 1,
        price: action.payload.price,
        liked: false,
        onCart: true,
      };

      if (!currentItem) {
        state.items = [...state.items, cartItem];
      } else {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              onCart: !item.onCart,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price, 0);

      state.totalQuantity = state.items.length;
    },
    toggleToFavourite(state, action) {
      let currentItem = state.items.find((item) => {
        return item.id === action.payload.id;
      });

      let cartItem = {
        id: action.payload.id,
        image: action.payload.image,
        quantity: 0,
        price: action.payload.price,
        liked: true,
        onCart: false,
      };

      if (!currentItem) {
        state.items = [...state.items, cartItem];
      } else {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, liked: !item.liked };
          } else {
            return item;
          }
        });
      }
    },
    addedToCart(state, action) {
      let currentItems = state.items.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });

      state.items = currentItems;

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price, 0);
      state.totalQuantity = state.items.length;
    },
    removeFromCart(state, action) {
      let currentItems = state.items.map((cartItem) => {
        if (
          cartItem.id === action.payload.id &&
          action.payload.quantity !== 1
        ) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else if (
          cartItem.id === action.payload.id &&
          action.payload.quantity === 1
        ) {
          return;
        } else {
          return cartItem;
        }
      });

      state.items = currentItems;

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price, 0);
      state.totalQuantity = state.items.length;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

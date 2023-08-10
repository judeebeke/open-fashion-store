import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: "",
    totalQuantity: "",
    isChangedData: false,
    animateCart: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity;
      state.isChangedData = action.payload.isChangedData;
    },
    addProductToCart(state, action) {
      state.isChangedData = true;
      let currentItem = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      let cartItem = {
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
        quantity: 1,
        price: action.payload.price,
        sampName: action.payload.sampName,
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

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      state.totalQuantity = state.items.length;
      state.animateCart = true;
    },
    toggleToFavourite(state, action) {
      state.isChangedData = true;
      let currentItem = state.items.find((item) => {
        return item.id === action.payload.id;
      });

      let cartItem = {
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
        quantity: 0,
        price: action.payload.price,
        sampName: action.payload.sampName,
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
      state.isChangedData = true;
      let currentItems = state.items.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return cartItem;
        }
      });

      state.items = currentItems;

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.items.length;
      state.animateCart = true;
    },
    removeFromCart(state, action) {
      state.isChangedData = true;
      let getLowestItem = action.payload.quantity === 1;

      if (getLowestItem) {
        state.items = state.items.filter((item) => {
          return item.id !== action.payload.id;
        });
      } else {
        state.items = state.items.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              quantity: action.payload.quantity - 1,
            };
          } else {
            return cartItem;
          }
        });
      }

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      state.totalQuantity = state.items.length;
      state.animateCart = true;
    },
    closeAnimateCart(state) {
      state.animateCart = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

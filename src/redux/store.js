// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice';
import WishListReducer from './WishListSlicer';

const store = configureStore({
  reducer: {
    user: userReducer,
    wishlist:WishListReducer,
  },
});

export default store;

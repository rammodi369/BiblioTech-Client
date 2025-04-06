import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    setWishList: (state, action) => {
      const existingItem = state.wishList.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.wishList.push(action.payload); // Push the new item if it doesn't exist
      }
    },
    clearWishList: (state) => {
      state.wishList = [];
    },
    removeOneWishlist: (state, action) => {
      state.wishList = state.wishList.filter(item => item.id !== action.payload);
    },
  },
});

export const { setWishList, clearWishList, removeOneWishlist } = wishListSlice.actions;

export default wishListSlice.reducer;

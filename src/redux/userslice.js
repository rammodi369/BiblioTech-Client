import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
     //   alert(JSON.stringify(action.payload.user));
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
    resetFine: (state) => {
      if (state.user) {
        state.user.fine = 0;
      }
    },
  },
});

export const { setUser, clearUser, resetFine } = userSlice.actions;

export default userSlice.reducer;

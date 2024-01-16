// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null, // Initial state is usually null or an empty object
  reducers: {
    setUser: (state, action) => {
      return action.payload; // Set the user data in the state
    },
    clearUser: (state) => {
      return null; // Clear the user data when logging out
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

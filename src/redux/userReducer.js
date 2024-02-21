import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    resetToken(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUser, resetToken } = actions;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  fullName: "",
  email: "",
  isAdmin: false,
  isSeller: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { _id, fullName, email, isAdmin, isSeller } = action.payload;

      state.id = _id;
      state.fullName = fullName || email;
      state.email = email;
      state.isAdmin = isAdmin;
      state.isSeller = isSeller;
    },
    resetUser: (state) => {
      state.id = "";
      state.fullName = "";
      state.email = "";
      state.isAdmin = false;
      state.isSeller = false;
    },
  },
});

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;

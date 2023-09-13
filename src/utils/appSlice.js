import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu:(state, action)=>{
      console.log("closemenu called");
      state.isOpen=false;
    },
    },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;

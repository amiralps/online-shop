import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {theme: localStorage.getItem("theme") || "Light"},
  reducers: {
    changeTheme(state) {
      if (state.theme === "Dark") {
        state.theme = "Light";
        localStorage.setItem("theme", "Light");
      } else {
        state.theme = "Dark";
        localStorage.setItem("theme", "Dark");
      }
    },
  },
});

export default themeSlice.reducer
export const {changeTheme} = themeSlice.actions
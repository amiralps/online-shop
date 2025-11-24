import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  itemsCounter: 0,
  selectedItems: [],
  totalCount: 0,
  checkOut: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem(state, action) {},
    addItem(state, action) {},
    increment(state, action) {},
    decrement(state, action) {},
    checkOut(state) {
      state = {
        itemsCounter: 0,
        selectedItems: [],
        totalCount: 0,
        checkOut: false,
      };
    },
  },
});

export default cartSlice.reducer;
export const {removeItem, addItem, increment, decrement, checkOut} =
  cartSlice.actions;

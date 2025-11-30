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
    removeItem(state, action) {
      const {colorIndex, data} = action.payload;
    },
    addItem(state, action) {
      const {colorIndex, data} = action.payload;
      const productIndex = state.selectedItems.findIndex((item) => {
        return item.id === data.id;
      });
      if (productIndex === -1) {
        state.selectedItems.push({
          ...data,
          colors: data.colors.map((c, i) => {
            if (i === colorIndex) {
              return {...c, quantity: 1};
            }
            return {...c};
          }),
        });
        state.itemsCounter += 1;
        state.totalCount += data.colors[colorIndex].price;
      } else {
        state.selectedItems[productIndex].colors[colorIndex].quantity = 1;
        state.itemsCounter += 1;
        state.totalCount += data.colors[colorIndex].price;
      }
    },
    increment(state, action) {
      const {colorIndex, data} = action.payload;
      const productIndex = state.selectedItems.findIndex((item) => {
        return item.id === data.id;
      });
      if (
        state.selectedItems[productIndex].colors[colorIndex].quantity <
        state.selectedItems[productIndex].colors[colorIndex].inventory
      ) {
        state.selectedItems[productIndex].colors[colorIndex].quantity += 1;
        state.itemsCounter += 1;
        state.totalCount += data.colors[colorIndex].price;
      }
    },
    decrement(state, action) {
      const {colorIndex, data} = action.payload;
    },
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

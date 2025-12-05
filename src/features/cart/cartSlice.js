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
      const productIndex = state.selectedItems.findIndex(
        (item) => item.id == data.id
      );
      // console.log(colors);
      if (state.selectedItems.find((item) => item.id == data.id)) {
        state.selectedItems = state.selectedItems.map((item) => {
          if (item.id === data.id) {
            delete item.colors[colorIndex].quantity;

            state.itemsCounter -= 1;
            state.totalCount -= data.colors[colorIndex].price;
          }
          return item;
        });
        const quantityStatus = state.selectedItems[productIndex].colors.every(
          (item) => {
            return !item.quantity;
          }
        );
        if (quantityStatus) {
          state.selectedItems = state.selectedItems.filter(
            (item) => item.id !== data.id
          );
        }
      }
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
      const productIndex = state.selectedItems.findIndex((item) => {
        return item.id === data.id;
      });
      if (
        state?.selectedItems[productIndex]?.colors[colorIndex]?.quantity > 1
      ) {
        state.selectedItems[productIndex].colors[colorIndex].quantity -= 1;
        state.itemsCounter -= 1;
        state.totalCount -= data.colors[colorIndex].price;
      }
    },
    checkOut(state) {
      return state = {
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

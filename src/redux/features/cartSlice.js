const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    clearCart(state, action) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;

      // check if item already exist in cart

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.Contract_Service.agreedFee,
          quantity: newItem.quantity,
          totalPrice: newItem.Contract_Service.agreedFee,
          name: newItem.name,
          description: newItem.description,
          category: newItem.Category.name,
          checked: newItem.checked,

          image: newItem.Category.image,
        });
        state.totalAmount =
          state.totalAmount +
          newItem.Contract_Service.agreedFee * newItem.quantity;
      } else {
        // existingItem.quantity = existingItem.quantity + 1;
        // existingItem.totalPrice =
        //   parseInt(existingItem.totalPrice) + parseInt(existingItem.price);

        // state.totalAmount = state.totalAmount + parseInt(existingItem.price);

        state.totalAmount = state.totalAmount - existingItem.price;
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== existingItem.id
          );
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
        // existingItem.checked = false;
      }
    },

    increaseItem(state,action){
      const newItem = action.payload;

      // check if item already exist in cart

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      existingItem.quantity = existingItem.quantity + 1;
      existingItem.totalPrice =
        parseInt(existingItem.totalPrice) + parseInt(existingItem.price);

      state.totalAmount = state.totalAmount + parseInt(existingItem.price);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalAmount = state.totalAmount - existingItem.price;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalAmount = state.totalAmount - existingItem.totalPrice;
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
    },
    
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;

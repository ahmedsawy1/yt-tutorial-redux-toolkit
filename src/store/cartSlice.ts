import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  qty: number;
  sum: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.id == action.payload.id,
      );
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum += action.payload?.price;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload?.price,
        });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        item => item.id == action.payload.id,
      );

      if (existingItem && existingItem.qty != 1) {
        existingItem.qty -= 1;
        existingItem.sum -= action.payload?.price;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

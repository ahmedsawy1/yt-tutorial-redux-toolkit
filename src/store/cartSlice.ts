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
  orders: [];
}

const initialState: CartState = {
  items: [],
  orders: [],
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
    addOrder: (state, action: PayloadAction<number>) => {
      state.orders = [
        ...state.orders,
        {
          id: new Date().toString(),
          totalAmount: action.payload.sum,
          date: new Date().toISOString(),
        },
      ];
      state.items = [];
    },
  },
});

export const {addItem, removeItem, addOrder} = cartSlice.actions;

export default cartSlice.reducer;

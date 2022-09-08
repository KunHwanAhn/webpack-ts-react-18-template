import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  text: string;
  id: number;
};

export type TodoState = Todo[];

const initialState: TodoState = [];

const todos = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action: PayloadAction<number>) => state.filter((todo) => todo.id !== action.payload),
  },
});

const store = configureStore({ reducer: todos.reducer });

export type TodoDispatch = typeof store.dispatch;
export const { add, remove } = todos.actions;
export default store;

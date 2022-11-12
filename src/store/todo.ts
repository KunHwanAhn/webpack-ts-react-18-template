import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

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
    add: (state, action: PayloadAction<Todo['text']>) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action: PayloadAction<Todo['id']>) => state.filter((todo) => todo.id !== action.payload),
  },
});

export const { reducer } = todos;
export const { add, remove } = todos.actions;

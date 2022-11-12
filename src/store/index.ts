import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import {
  reducer as todoReducer,
  add as addTodo,
  remove as removeTodo,
  Todo as TypeTodo,
  TodoState,
} from './todo';

const reducer = combineReducers({
  todoState: todoReducer,
});

const store = configureStore({ reducer });

export interface StoreState {
  todoState: TodoState;
}
type StoreDispatch = typeof store.dispatch;

export type {
  TypeTodo,
  StoreDispatch,
};

export {
  addTodo,
  removeTodo,
};

export default store;

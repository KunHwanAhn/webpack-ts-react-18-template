import {
  combineReducers,
  configureStore,
  createSelector,
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

const selectTodos = createSelector(
  (state: StoreState) => state.todoState,
  (todos) => todos,
);

function selectTodoById(id: number) {
  return createSelector(
    (state: StoreState) => state.todoState,
    (todos) => todos.find((todo) => todo.id === id),
  );
}

type StoreDispatch = typeof store.dispatch;

export type {
  TypeTodo,
  StoreDispatch,
};

export {
  addTodo,
  removeTodo,
  selectTodos,
  selectTodoById,
};

export default store;

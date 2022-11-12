import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectTodos,
  addTodo,
} from '@/store';

import Todo from '@/components/Todo';

export default function Home() {
  const [text, setText] = useState('');
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  function updateText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function addNewTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setText('');
    dispatch(addTodo(text));
  }

  return (
    <>
      <form onSubmit={addNewTodo}>
        <input
          type="text"
          value={text}
          onChange={updateText}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          const { text: todoText, id } = todo;

          return (
            <Todo
              key={todo.id}
              id={id}
              text={todoText}
            />
          );
        })}
      </ul>
    </>
  );
}

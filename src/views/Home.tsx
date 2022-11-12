import * as React from 'react';
import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addTodo as addTodoToStore } from '@/store';
import type {
  StoreState,
  TypeTodo,
  StoreDispatch,
} from '@/store';

import Todo from '@/components/Todo';

function mapStateToProps(state: StoreState) {
  return { todos: state.todoState };
}

function mapDispatchToProps(dispatch: StoreDispatch) {
  return { addTodo: (text: TypeTodo['text']) => { dispatch(addTodoToStore(text)); } };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Home({ todos, addTodo }: PropsFromRedux) {
  const [text, setText] = useState('');

  function updateText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function addNewTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setText('');
    addTodo(text);
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

export default connector(Home);

import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeTodo, TypeTodo } from '@/store';

type TodoProps = TypeTodo;

export default function Todo({ text, id }: TodoProps) {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/${id}`}>
        {text}
      </Link>
      <button
        type="button"
        onClick={() => { dispatch(removeTodo(id)); }}
      >
        Delete
      </button>
    </li>
  );
}

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { removeTodo } from '@/store';
import type {
  TypeTodo,
  StoreDispatch,
} from '@/store';

interface TodoProps extends PropsFromRedux, TypeTodo {}

function mapDispatchToProps(dispatch: StoreDispatch, ownProps: TypeTodo) {
  return {
    deleteTodo: () => { dispatch(removeTodo(ownProps.id)); },
  };
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Todo({ text, id, deleteTodo }: TodoProps) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
      </Link>
      <button
        type="button"
        onClick={deleteTodo}
      >
        Delete
      </button>
    </li>
  );
}

export default connector(Todo);

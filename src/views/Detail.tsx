import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectTodoById } from '@/store';

function Detail() {
  const { id } = useParams();

  if (!id) {
    throw new Error('No required params, "id"');
  }
  const currTodo = useSelector(selectTodoById(Number(id)));

  return (
    <>
      <h2>{currTodo?.text}</h2>
      <h5>{`Created at: ${currTodo?.id}`}</h5>
    </>
  );
}

export default Detail;

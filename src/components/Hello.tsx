import * as React from 'react';

export interface HelloProps {
  complier: string;
  framework: string;
};

const Hello = (props: HelloProps) => {
  return (
    <h2>Hello from {props.complier} and {props.framework}!</h2>
  );
};

export default Hello;

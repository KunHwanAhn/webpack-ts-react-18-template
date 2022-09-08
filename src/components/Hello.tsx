import * as React from 'react';

export interface HelloProps {
  complier: string;
  framework: string;
}

function Hello(props: HelloProps) {
  const { complier, framework } = props;

  return (
    <h2>{`Hello from ${complier} and ${framework}!`}</h2>
  );
}

export default Hello;
